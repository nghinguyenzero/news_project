import React, { Component } from 'react';

class HistoryList extends Component {
  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">History </h3>
        </div>
        <div className="panel-body">
          {/* HistoryItem */}
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>stt</th>
                <th>title</th>
                <th>timeView</th>
              </tr>
            </thead>
            <tbody>
              {this.props.children}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default HistoryList;
