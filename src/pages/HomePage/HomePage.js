import React, { Component } from 'react';
import Articles from './../../components/Articles';
import Article from './../../components/Article';
import Search from './../../components/Search';
import { connect } from "react-redux";
import { actFetchArticlesRequest } from "./../../actions/index";

class HomePage extends Component {

  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    var { articles } = this.props;
    return (
      <div className="container">
        <Search />
        <Articles>
          {this.showNewsList(articles)}
        </Articles>
      </div>
    );
  }

  showNewsList = (articles) => {
    var result = null;
    if (articles.length > 0) {
      result = articles.map((article, index) => {
        return (<Article
          key={index}
          article={article}
          index={index}
        />)
      })
    }
    return result;
  }
}

const mapStateToProps = state => {
  return {
    articles: state.articles
  };
}



const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchArticles: () => {
      dispatch(actFetchArticlesRequest());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
