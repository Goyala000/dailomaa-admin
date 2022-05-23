import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { styled } from '@mui/system';
import SearchSection from 'layout/MainLayout/Header/SearchSection';
import MainCard from 'ui-component/cards/MainCard';
import TableComponent from 'ui-component/TableComponent';

import { IconCirclePlus } from '@tabler/icons';

const ProductTitle = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
});

const ProductTitleComponent = () => {
    return (
        <ProductTitle>
            <h2>Product Table</h2>
            <SearchSection />
            <Button variant="contained" color="primary" startIcon={<IconCirclePlus />}>
                Add Product
            </Button>
        </ProductTitle>
    );
};

export default function InHouseProductListView() {
    return (
        <MainCard title={<ProductTitleComponent />}>
            <TableComponent />
        </MainCard>
    );
}
