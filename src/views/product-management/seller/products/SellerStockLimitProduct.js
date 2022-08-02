import { useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import { styled } from '@mui/system';
import SearchSection from 'layout/MainLayout/Header/SearchSection';
import MainCard from 'ui-component/cards/MainCard';
import TableComponent from 'ui-component/TableComponent';

import { useTheme } from '@mui/material/styles';

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

const names = [
    'Quantity Sort By (low to high)',
    'Quantity Sort By (high to low)',
    'Order Sort By (low to high)',
    'Order Sort By (high to low)'
];

function getStyles(name, personName, theme) {
    return {
        fontWeight: personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium
    };
}

const ProductTitle = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
});

const handleChange = (event) => {
    const {
        target: { value }
    } = event;
    setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value
    );
};

const ProductTitleComponent = () => {
    const [personName, setPersonName] = useState([]);

    const theme = useTheme();

    return (
        <ProductTitle>
            <h2>Product Table</h2>
            <SearchSection />
            <div>
                <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                    <Select
                        multiple
                        displayEmpty
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput />}
                        renderValue={(selected) => {
                            if (selected.length === 0) {
                                return <em>Default Sort</em>;
                            }

                            return selected.join(', ');
                        }}
                        MenuProps={MenuProps}
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem disabled value="">
                            <em>Default Sort</em>
                        </MenuItem>
                        {names.map((name) => (
                            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        </ProductTitle>
    );
};

export default function SellerStockLimitProduct() {
    const tableData = ['SL#', 'PRODUCT NAME', 'PURCHASE PRICE', 'SELLING PRICE', 'VERIFY STATUS', 'ACTIVE STATUS', 'QUANTITY', 'ORDERS'];
    return (
        <MainCard title={<ProductTitleComponent />}>
            <TableComponent tableHeaders={tableData} />
        </MainCard>
    );
}
