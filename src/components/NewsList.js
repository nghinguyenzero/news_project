import React, { Component } from 'react';

class NewsList extends Component {
  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">List news</h3>
        </div>
        <div className="panel-body">
          {/* News */}
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>STT</th>
                <th>Title</th>
                <th>Author</th>
                <th>Image</th>
                <th>Content/description</th>
                <th>Action</th>
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

export default NewsList;
