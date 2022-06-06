// assets
import { IconUser } from '@tabler/icons';

// constant
const icons = {
    IconUser
};

const DeliveryManManagement = {
    id: 'delivery-man-management',
    title: 'Delivery Man Management',
    type: 'group',
    visible: 'isSeller',
    children: [
        {
            id: 'delivery-man',
            title: 'Delivery Man',
            type: 'collapse',
            icon: icons.IconUser,
            children: [
                {
                    id: 'add-new',
                    title: 'Add new',
                    type: 'item',
                    url: '/seller/delivery-man/add',
                    breadcrumbs: false
                },
                {
                    id: 'list',
                    title: 'List',
                    type: 'item',
                    url: '/seller/delivery-man/add',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default DeliveryManManagement;
