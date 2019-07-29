
import React, { Component } from 'react';
import { connect } from "react-redux";
import { actSearchByKey } from "./../actions/index";


class Search extends Component {

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.props.onSearchByKey({[name]: value});
    }

    render() {
        var { key } = this.props;
        return (
            <input className="form-control mb-10" type="text" id="myInput" placeholder="Search for key..." title="Type in a name"
                value={key}
                name='key'
                onChange={this.onChange}
            ></input>
        );
    }
}
const mapStateToProps = state => { 
    return { key: state.key }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSearchByKey: (value) => {
            dispatch(actSearchByKey(value));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
