import { useState } from 'react';
import { FormControlLabel, Grid, Switch, TextField } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import BasicBreadcrumbs from 'ui-component/extended/BasicBreadcrumbs';
import Button from '@mui/material/Button';

import SelectComponent from 'ui-component/extended/SelectComponent';
import { Box } from '@mui/system';
import MultipleChipSelectComponent from 'ui-component/extended/MultipleChipSelectComponent';
import { useTheme } from '@emotion/react';
import useMediaQuery from '@mui/material/useMediaQuery';

import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import RichTextEditor from 'ui-component/extended/RichTextEditor';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginFileValidateType);

export default function SellerAddProduct() {
    const [files, setFiles] = useState([]);

    const categoryName = ['Games & Sports', 'Arts & Crafts', 'Electronic Devices', 'Gifts & Toys'];
    const subCategoryName = ['Games & Sports', 'Arts & Crafts', 'Electronic Devices', 'Gifts & Toys'];
    const subSubCategoryName = ['Games & Sports', 'Arts & Crafts', 'Electronic Devices', 'Gifts & Toys'];
    const brandName = ['Games & Sports', 'Arts & Crafts', 'Electronic Devices', 'Gifts & Toys'];
    const unitName = ['kg', 'pc', 'gm', 'ltrs'];

    const colorNames = ['red', 'green', 'yellow', 'white', 'black'];

    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
    const dynamicStyles = {
        display: 'flex',
        justifyContent: 'space-evenly',
        p: 1,
        m: 1,
        bgcolor: 'background.paper',
        borderRadius: 1,
        gap: 3,
        ...(matchesSM && { flexDirection: 'column' })
    };

    return (
        <div>
            <Grid container direction="column" spacing={1}>
                <Grid item>
                    <MainCard title={<BasicBreadcrumbs title1="Dashboard" title2="Product" title3="Add Product" />}>
                        <TextField fullWidth id="outlined-basic" label="Product Name" variant="outlined" margin="normal" />
                        <RichTextEditor />
                    </MainCard>
                </Grid>
                <Grid item>
                    <SubCard title="General Info">
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                <Grid item xs={3} sm={4} md={4}>
                                    <SelectComponent title="Category" names={categoryName} />
                                </Grid>
                                <Grid item xs={3} sm={4} md={4}>
                                    <SelectComponent title="Sub Category" names={subCategoryName} />
                                </Grid>
                                <Grid item xs={3} sm={4} md={4}>
                                    <SelectComponent title="Sub sub Category" names={subSubCategoryName} />
                                </Grid>
                                <Grid item xs={3} sm={4} md={4}>
                                    <SelectComponent title="Brand" names={brandName} />
                                </Grid>
                                <Grid item xs={3} sm={4} md={4}>
                                    <SelectComponent title="Unit" names={unitName} />
                                </Grid>
                            </Grid>
                        </Box>
                    </SubCard>
                </Grid>
                <Grid item>
                    <SubCard title="Variations">
                        <MultipleChipSelectComponent title="Colors" names={colorNames} />
                    </SubCard>
                </Grid>
                <Grid item>
                    <SubCard title="Product Price & Stock">
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-evenly',
                                p: 1,
                                m: 1,
                                bgcolor: 'background.paper',
                                borderRadius: 1,
                                gap: 3
                            }}
                        >
                            <TextField fullWidth id="outlined-basic" label="Unit Price" variant="outlined" margin="normal" />
                            <TextField fullWidth id="outlined-basic" label="Purchase Price" variant="outlined" margin="normal" />
                        </Box>
                        <Box sx={{ ...dynamicStyles }}>
                            <TextField fullWidth id="outlined-basic" label="Tax (%)" variant="outlined" margin="normal" />
                            <TextField fullWidth id="outlined-basic" label="Discount" variant="outlined" margin="normal" />
                            <TextField fullWidth id="outlined-basic" label="Shipping Cost" variant="outlined" margin="normal" />
                        </Box>
                        <Box
                            sx={{
                                textAlign: 'center',
                                p: 1,
                                m: 1,
                                bgcolor: 'background.paper',
                                borderRadius: 1,
                                gap: 3
                            }}
                        >
                            <FormControlLabel control={<Switch defaultChecked />} label="Shipping cost multiply with quantity" />
                        </Box>
                    </SubCard>
                </Grid>
                <Grid item>
                    <SubCard title="Product Images">
                        <FilePond
                            files={files}
                            onupdatefiles={setFiles}
                            allowMultiple={false}
                            acceptedFileTypes={['image/png', 'image/jpeg']}
                            name="file"
                            credits={false}
                            labelIdle='Drag & Drop Product Images or <span class="filepond--label-action">Browse</span>'
                        />
                        <FilePond
                            files={files}
                            onupdatefiles={setFiles}
                            allowMultiple={false}
                            acceptedFileTypes={['image/png', 'image/jpeg']}
                            name="file"
                            credits={false}
                            labelIdle='Drag & Drop Thumbnail or <span class="filepond--label-action">Browse</span>'
                        />
                    </SubCard>
                    <SubCard>
                        <Box sx={{ textAlign: 'center' }}>
                            <Button variant="contained" size="large">
                                Submit
                            </Button>
                        </Box>
                    </SubCard>
                </Grid>
            </Grid>
        </div>
    );
}
