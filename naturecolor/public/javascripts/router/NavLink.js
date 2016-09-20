/**
 * Created by hh on 18/9/2016.
 */
// modules/NavLink.js
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
    render() {
        return <Link {...this.props} activeClassName="active"/>
    }
})
