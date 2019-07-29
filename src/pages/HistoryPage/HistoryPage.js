import React, { Component } from 'react';
import { connect } from "react-redux";
import HistoryList from './../../components/HistoryList';
import HistoryItem from './../../components/HistoryItem';



class HistoryPage extends Component {
  render() {
    var { history } = this.props;
    console.log(history);
    return (
      <div>
          <HistoryList>
            {this.showHistory(history)}
          </HistoryList>
      </div>

    );
  }
  showHistory = (history) => {
    var result = null;
    if (history.length > 0) {
      result = history.map((news, index) => {
        return (<HistoryItem
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
  return { history: state.history }
}


export default connect(mapStateToProps, null)(HistoryPage);
