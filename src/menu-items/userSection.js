// assets
import { IconUsers, IconUser } from '@tabler/icons';

// constant
const icons = {
    IconUsers,
    IconUser
};

const userSection = {
    id: 'user-section',
    title: 'User Section',
    type: 'group',
    children: [
        {
            id: 'seller',
            title: 'Seller',
            type: 'collapse',
            icon: icons.IconUser,
            children: [
                {
                    id: 'add-new-seller',
                    title: 'Add new Seller',
                    type: 'item',
                    url: '/sellers/seller-add',
                    breadcrumbs: false
                },
                {
                    id: 'list',
                    title: 'List',
                    type: 'item',
                    url: '/sellers/seller-list',
                    breadcrumbs: false
                },
                {
                    id: 'withdraws',
                    title: 'Withdraws',
                    type: 'item',
                    url: '/sellers/withdraw_list',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'customers',
            title: 'Customers',
            type: 'item',
            url: '/customer/list',
            icon: icons.IconUsers,
            breadcrumbs: false,
            visible: true
        }
    ]
};

export default userSection;
