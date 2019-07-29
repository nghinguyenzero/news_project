import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actGetNewsRequest } from "./../../actions/index";

class NewsPage extends Component {

  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      this.props.onGetNews(id);
    }
  }

  render() {
    var { news } = this.props;
    var date = new Date(news.publishedAt).toLocaleString();
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="mt-4">{news.title}</h1>
            <p className="lead">
              by {news.source}
            </p>
            <hr></hr>
            <p>Posted on {date}</p>
            <hr></hr>
            <img className="img-fluid rounded img-300" src={news.urlToImage} alt=""></img>
            <hr></hr>
            <p>{news.Description}</p>
            <Link to="/" className="btn btn-danger mr-10"> Back
          </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { news: state.news }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onGetNews: (id) => {
      dispatch(actGetNewsRequest(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
