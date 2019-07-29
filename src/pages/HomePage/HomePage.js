import React, { Component } from 'react';
import NewsList from './../../components/NewsList';
import News from './../../components/News';
import Search from './../../components/Search';
import { connect } from "react-redux";
import { actFetchNewsListRequest } from "./../../actions/index";

class HomePage extends Component {

  componentDidMount() {
      this.props.fetchNewsList();
  }
  
  render() {
    var { newsList } = this.props;
    return (
      <div className= "container">
        <Search/>
          <NewsList>
            {this.showNewsList(newsList)}
          </NewsList>
      </div>
    );
  }

  showNewsList = (newsList) => {
    var result = null;
    if (newsList.length > 0) {
      result = newsList.map((news, index) => {
        return (<News
          key={index}
          news={news}
          index={index}
        />)
      })
    }
    return result;
  }
}

const mapStateToProps = state => { 
  return { 
    newsList: state.newsList 
    key: state.key 
  };
}



const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchNewsList : () => {
      dispatch(actFetchNewsListRequest());
    }

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
