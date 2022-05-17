import { useState } from 'react';
import { TextField, Box, Button } from '@mui/material';

import MainCard from 'ui-component/cards/MainCard';

import { FilePond, registerPlugin } from 'react-filepond';

import 'filepond/dist/filepond.min.css';

import FilePondPluginFileRename from 'filepond-plugin-file-rename';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginFileValidateType, FilePondPluginFileRename);

export default function AddNewBrandView() {
    const [files, setFiles] = useState([]);

    function fileNameGen(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    return (
        <>
            <MainCard>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField fullWidth label="Brand Name" id="outlined-size-normal" placeholder="Eg : Apple" margin="normal" />

                    <div>
                        <FilePond
                            files={files}
                            onupdatefiles={setFiles}
                            allowMultiple={false}
                            acceptedFileTypes={['image/png', 'image/jpeg']}
                            name="file"
                            credits={false}
                            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                            fileRenameFunction={(file) => {
                                return `${fileNameGen(8)}${file.extension}`;
                            }}
                        />
                    </div>
                </Box>
                <Button variant="contained">Submit</Button>
            </MainCard>
        </>
    );
}
