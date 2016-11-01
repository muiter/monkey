import React, { Component, PropTypes } from 'react'

require('./modal.scss')

const { bool, func, string } = PropTypes

export default class Modal extends Component {

	componentWillReceiveProps(nextProps) {
		if (nextProps.show) {
			document.getElementById(this.props.rootPageID).tabIndex = -1
		} else {
			document.getElementById(this.props.rootPageID).tabIndex = 0
		}
	}

	render() {
		if (this.props.show) {
			return (
				<div className="modal-container">
					<div className="modal-title-container">
						<span>{this.props.title}</span>
						<span className="close-modal-container">
							<span
								aria-label="Click to close modal"
								tabIndex="0"
								onKeyDown={this.props.handleOnKeyDown}
								onClick={this.props.handleOnClick}
								className="close-modal">
									&#215;
							</span>
						</span>
					</div>
					<div className="modal-content-container">
					 {this.props.children}
					</div>
				</div>
			)
		} else {
			return <noscript/>
		}
	}
}

Modal.propTypes = {
	title: string,
	rootPageID: string.isRequired,
	show: bool.isRequired,
	handleOnKeyDown: func,
	handleOnClick: func
}