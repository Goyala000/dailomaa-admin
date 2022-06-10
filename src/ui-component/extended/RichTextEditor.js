import { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default function RichTextEditor() {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

    console.log(convertToRaw(editorState.getCurrentContent()));

    return (
        <Editor
            editorState={editorState}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={setEditorState}
        />
    );
}
