import { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Box } from '@mui/system';

export default function RichTextEditor() {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

    console.log(convertToRaw(editorState.getCurrentContent()));

    return (
        <Box sx={{ marginTop: '20px' }}>
            <h4>Product Description</h4>
            <Editor
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={setEditorState}
            />
        </Box>
    );
}
