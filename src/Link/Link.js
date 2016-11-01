import React, { Component, PropTypes } from 'react'

require('./link.scss')

const { bool, func, string } = PropTypes

export default class Link extends Component {

  render() {
    return (
    	<div className="link-container">
				<a
					onKeyDown={this.props.handleOnKeyDown}
					onClick={this.props.handleOnClick}
					className={this.props.className}
					href={this.props.hrefLink}
					alt={this.props.altText}>
						{this.props.children}
				</a>
			</div>
    )
  }
}

Link.propTypes = {
	hrefLink: string.isRequired,
	altText: string.isRequired,
	handleOnKeyDown: func,
	handleOnClick: func
}