import { Button } from '@mui/material';
import { styled } from '@mui/system';
import SearchSection from 'layout/MainLayout/Header/SearchSection';
import MainCard from 'ui-component/cards/MainCard';
import TableComponent from 'ui-component/TableComponent';

import { IconCirclePlus } from '@tabler/icons';
import { Link } from 'react-router-dom';

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
            <Link to={'/seller/product/add-new'}>
                <Button variant="contained" color="primary" startIcon={<IconCirclePlus />}>
                    Add Product
                </Button>
            </Link>
        </ProductTitle>
    );
};

export default function SellerProductsView() {
    const tableData = ['SL#', 'PRODUCT NAME', 'PURCHASE PRICE', 'SELLING PRICE', 'VERIFY STATUS', 'ACTIVE STATUS', 'ACTION'];
    return (
        <MainCard title={<ProductTitleComponent />}>
            <TableComponent tableHeaders={tableData} />
        </MainCard>
    );
}
