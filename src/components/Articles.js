import React, { Component } from 'react';

class Articles extends Component {
  render() {
    return (
      <div className="container">
      <div className="media-container-row">
        {/*  */}
        {this.props.children}
        {/*  */}
      </div>
    </div>
      // <div className="panel panel-primary">
      //   <div className="panel-heading">
      //     <h3 className="panel-title">List article</h3>
      //   </div>
      //   <div className="panel-body">
      //     {/* article */}
      //     <table className="table table-bordered table-hover">
      //       <thead>
      //         <tr>
      //           <th>STT</th>
      //           <th>Title</th>
      //           <th>Author</th>
      //           <th>Image</th>
      //           <th>Content/description</th>
      //           <th>Action</th>
      //         </tr>
      //       </thead>
      //       <tbody>
      //         {this.props.children}
      //       </tbody>
      //     </table>
      //   </div>
      // </div>
    );
  }
}

export default Articles;
