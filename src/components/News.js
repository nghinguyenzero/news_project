import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actAddToHistory } from "./../actions/index"


class News extends Component {
    render() {
        var { news, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{news.title}</td>
                <td>{news.source}</td>
                <td><img src={news.urlToImage} className="img-100"></img></td>
                <td><div className="description">{news.description}</div></td>
                <td><Link
                    to={`/newsList/${news.id}`}
                    className="btn btn-success"
                    onClick={() => this.onAddHistory(news)}
                >Detail</Link></td>
            </tr>
        );
    }
    onAddHistory = (news) => {
        this.props.onAddHistory(news);
    }
}
const mapStateToProps = state => {
    return { newsHistoryList: state.newsHistoryList }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddHistory: (news) => {
            dispatch(actAddToHistory(news));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(News);
