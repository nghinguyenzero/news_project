import React, { Component } from 'react';
import Articles from './../../components/Articles';
import Article from './../../components/Article';
import Search from './../../components/Search';
import { connect } from "react-redux";
import { actFetchArticlesRequest, actSearchByKey } from "./../../actions/index";
import { filter } from 'lodash';

class HomePage extends Component {

  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    var { articles, keyword } = this.props; 

    if (keyword) {
      articles = filter(articles, (article) => {
        return article.title.toLowerCase().indexOf(keyword) !== -1;
      });
    }

    articles.sort(function (a, b) {
      var c = new Date(a.publishedAt);
      var d = new Date(b.publishedAt);
      return d - c;
    });

  return(
      <div className = "container" >
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
    keyword: state.keyword, articles: state.articles
  };
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchArticles: () => {
      dispatch(actFetchArticlesRequest());
    },
    onSearchByKey: (keyword) => {
      dispatch(actSearchByKey(keyword));
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
