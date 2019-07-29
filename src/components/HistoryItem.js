import React, { Component } from 'react';

class HistoryItem extends Component {
  render() {
    var {news} = this.props;
    var timeView = new Date(news.timeView).toLocaleString();
    return (
      <tr>
      <td>{news.news.id}</td>
      <td>{news.news.title}</td>
      <td>{timeView}</td>

  </tr>
    );
  }
}

export default HistoryItem;
