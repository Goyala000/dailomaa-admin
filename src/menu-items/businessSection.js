// assets
import { IconMaximize, IconStar, IconHeart, IconCashBanknote } from '@tabler/icons';

// constant
const icons = { IconMaximize, IconStar, IconHeart, IconCashBanknote };

const businessSection = {
    id: 'business-section',
    title: 'Business Section',
    type: 'group',
    children: [
        {
            id: 'product-stock',
            title: 'Product Stock',
            type: 'item',
            url: '/stock/product-stock',
            icon: icons.IconMaximize,
            breadcrumbs: false
        },
        {
            id: 'customer-reviews',
            title: 'Customer Reviews',
            type: 'item',
            url: '/reviews/list',
            icon: icons.IconStar,
            breadcrumbs: false
        },
        {
            id: 'product-in-wish-list',
            title: 'Product In Wish List',
            type: 'item',
            url: '/stock/product-in-wish-list',
            icon: icons.IconHeart,
            breadcrumbs: false
        },
        {
            id: 'order-transactions',
            title: 'Order Transactions',
            type: 'item',
            url: '/transaction/list',
            icon: icons.IconCashBanknote,
            breadcrumbs: false
        },
        {
            id: 'refund-transactions',
            title: 'Refund Transactions',
            type: 'item',
            url: '/transaction/refund-list',
            icon: icons.IconCashBanknote,
            breadcrumbs: false
        }
    ]
};

export default businessSection;
