import React, { Component } from 'react'

import Modal from './Modal/Modal'
import Link from './Link/Link'

import KeyCodes from './utilities/KeyCodes'

require('./index.scss')

export default class App extends Component {

	constructor(props) {
		super(props)
		this.state = { showModal: false }
		this.toggleModal = this.toggleModal.bind(this)
		this.handleKeyDown = this.handleKeyDown.bind(this)
		this.handleOnClick = this.handleOnClick.bind(this)
	}

	toggleModal(e) {
    if (e) e.preventDefault()
		this.setState({ showModal: !this.state.showModal})
	}

	handleKeyDown(e) {
		if (e.keyCode === KeyCodes.ENTER) {
			this.toggleModal(e)
		}
	}

	handleOnClick(e) {
		this.toggleModal(e)
	}

	render() {
		return (
			<div tabIndex="0" id="app">
				<Link
					handleOnKeyDown={this.handleKeyDown}
					handleOnClick={this.handleOnClick}
					className="link"
					hrefLink="javascript:void(0)"
					altText="Link to show Modal">
						<span>click here to toggle modal</span>
				</Link>
				<Modal
					title="Lorem Ipsum"
					rootPageID="app"
					show={this.state.showModal}
					handleOnKeyDown={this.handleKeyDown}
					handleOnClick={this.handleOnClick}
				>
					<div className="lorem-ipsum-content">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis mi quis viverra pretium. Ut ornare, massa a tristique feugiat, ipsum eros fringilla augue, eu lobortis velit nulla id eros. Sed euismod hendrerit erat, sed laoreet massa sollicitudin sed. Cras mollis, odio at sollicitudin scelerisque, augue tortor luctus tellus, vel finibus mauris ante ac lectus. Sed nisi erat, elementum sed dapibus sit amet, volutpat vitae risus. Aenean nulla turpis, convallis sit amet feugiat eget, posuere id ante. Nam accumsan et turpis ac pulvinar.
					</div>
					<Link className="link" hrefLink="javascript:void(0)" altText="extra link to show keyboard actions">
						<div>Use keyboard to show focus on href links and "tabIndex=0" elements</div>
					</Link>
					<div>
						Praesent eu metus et tortor malesuada bibendum sed mattis dolor. Cras non iaculis sem, et porta lectus. In finibus tortor turpis, et volutpat quam egestas vitae. Cras venenatis eget erat at molestie. Phasellus hendrerit hendrerit scelerisque. Donec ullamcorper mauris sed ex volutpat, vel convallis neque posuere. Fusce at leo quis diam gravida ultrices at fringilla nunc. In ut odio eu ante hendrerit ullamcorper eget eu nulla. Donec varius nibh eu efficitur aliquet. Maecenas et massa et elit sagittis ornare. Curabitur scelerisque ultrices odio, sit amet tristique ipsum pharetra sit amet. Nullam nec massa ornare, vestibulum leo vel, mollis tortor. Duis maximus justo vitae orci volutpat, non posuere leo rhoncus. Duis aliquet tellus diam, vel dapibus felis porttitor id. Morbi at ultrices justo.
					</div>
				</Modal>
			</div>
		)
	}
}