import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import MainCard from 'ui-component/cards/MainCard';

import { FilePond, registerPlugin } from 'react-filepond';

import 'filepond/dist/filepond.min.css';

import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import SubCard from 'ui-component/cards/SubCard';
import TableComponent from 'ui-component/TableComponent';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginFileValidateType);

export default function CategoryView() {
    const [files, setFiles] = useState([]);
    return (
        <MainCard title="Category Form">
            <Box component="form" noValidate sx={{ display: 'grid', gridAutoFlow: 'row', gap: 2 }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <TextField fullWidth id="outlined-basic" label="Category Name" variant="outlined" margin="normal" />

                    <TextField fullWidth id="outlined-basic" label="Category Slug" variant="outlined" margin="normal" />
                </div>
                <div>
                    <FilePond
                        files={files}
                        onupdatefiles={setFiles}
                        allowMultiple={false}
                        acceptedFileTypes={['image/png', 'image/jpeg']}
                        name="file"
                        credits={false}
                        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                    />
                </div>
            </Box>
            <Box sx={{ marginBottom: '40px' }}>
                <Button variant="contained">Submit</Button>
            </Box>
            <SubCard title="Category Table">
                <TableComponent />
            </SubCard>
        </MainCard>
    );
}
