import React,{Component} from 'react';
import {Editor, EditorState} from 'draft-js';

export default class MyEditor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editorState: EditorState.createEmpty()
		}
	}
	render() {
		return <Editor
		  editorState={this.state.editorState}
		  onChange={this._onChange.bind(this)}>
		</Editor>;
	}
	_onChange(editorState) {
		this.setState({editorState});
	}
};