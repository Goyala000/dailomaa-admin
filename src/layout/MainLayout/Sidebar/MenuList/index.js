// material-ui
import { Typography } from '@mui/material';

import { useSelector } from 'react-redux';

// project imports
import NavGroup from './NavGroup';
import menuItem from 'menu-items';

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {
    const { isSeller, isSuperAdmin } = useSelector((state) => state.user);

    const navItems = menuItem.items.map((item) => {
        switch (item.type) {
            case 'group':
                // return <NavGroup key={item.id} item={item} />;
                if (!item?.visible || (item?.visible === 'isSuperAdmin' && isSuperAdmin) || (item?.visible === 'isSeller' && isSeller)) {
                    return <NavGroup key={item.id} item={item} level={1} />;
                }
                return;
            default:
                return (
                    <Typography key={item.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    });

    return <>{navItems}</>;
};

export default MenuList;
