import { useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material';
import { Box } from '@mui/system';
import MainCard from 'ui-component/cards/MainCard';

import { useTheme } from '@mui/material/styles';

import { FilePond, registerPlugin } from 'react-filepond';

import 'filepond/dist/filepond.min.css';

import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import SubCard from 'ui-component/cards/SubCard';
import TableComponent from 'ui-component/TableComponent';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250
        }
    }
};

function getStyles(name, personName, theme) {
    return {
        fontWeight: personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium
    };
}

export default function SubCategoryView() {
    const [files, setFiles] = useState([]);
    const theme = useTheme();
    const [personName, setPersonName] = useState([]);

    const names = ['Books & Stationery', 'Games & Sports', 'Arts & Crafts', 'Electronic Devices'];

    const handleChange = (event) => {
        const {
            target: { value }
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value
        );
    };

    return (
        <MainCard title="Sub Category Form">
            <Box component="form" noValidate sx={{ display: 'grid', gridAutoFlow: 'row', gap: 2 }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <TextField fullWidth id="outlined-basic" label="Sub Category Name" variant="outlined" margin="dense" />

                    <FormControl sx={{ m: 1, width: 300 }}>
                        <InputLabel id="demo-multiple-chip-label">Main Category</InputLabel>
                        <Select
                            labelId="demo-multiple-chip-label"
                            id="demo-multiple-chip"
                            multiple
                            value={personName}
                            onChange={handleChange}
                            input={<OutlinedInput id="select-multiple-chip" label="Main Category" />}
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                </Box>
                            )}
                            MenuProps={MenuProps}
                        >
                            {names.map((name) => (
                                <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
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

            <SubCard title="Sub Category Table">
                <TableComponent />
            </SubCard>
        </MainCard>
    );
}
