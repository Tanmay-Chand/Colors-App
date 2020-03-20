import React, { Component } from "react";
import "./ColorBox.css";
import { CopyToClipBoard } from "react-copy-to-clipboard";
class ColorBox extends Component {
	constructor(props) {
		super(props);
		this.state = { copied: false };
	}
	render() {
		const { name, background } = this.props;
		return (
			<CopyToClipBoard text={background}>
				<div style={{ background: background }} className="ColorBox">
					<div style={{ background }} className="copy-overlay" />
					<div className="copy-container">
						<div className="box-content">
							<span>{name}</span>
						</div>
						<button className="copy-button">Copy</button>
					</div>
					<span className="see-more">More</span>
				</div>
			</CopyToClipBoard>
		);
	}
}

export default ColorBox;
