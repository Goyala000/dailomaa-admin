// material-ui
import { Box, Card, Grid, Chip, Divider, Switch, FormGroup, FormControlLabel } from '@mui/material';

import { useTheme } from '@mui/material/styles';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import SearchSection from 'layout/MainLayout/Header/SearchSection';
import TableComponent from 'ui-component/TableComponent';

export default function SellerReturnedOrders() {
    const theme = useTheme();
    return (
        <MainCard
            title={
                <>
                    Orders
                    <Chip label="100" sx={{ marginLeft: 1 }} />
                </>
            }
            secondary={<SecondaryAction title="100" />}
        >
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <SubCard>
                        <Card
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                p: 2.5
                            }}
                        >
                            <Box>
                                <SearchSection />
                            </Box>{' '}
                            <Box>
                                <FormGroup>
                                    <FormControlLabel control={<Switch defaultChecked />} label="Inhouse Orders Only" />
                                </FormGroup>
                            </Box>
                        </Card>{' '}
                        <Divider
                            sx={{
                                opacity: 1,
                                borderColor: theme.palette.primary.light
                            }}
                        />
                        <TableComponent />
                    </SubCard>{' '}
                </Grid>{' '}
            </Grid>{' '}
        </MainCard>
    );
}
