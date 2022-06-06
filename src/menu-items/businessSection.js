// assets
import { IconMaximize, IconStar, IconHeart, IconCashBanknote, IconSettings, IconReceipt } from '@tabler/icons';

// constant
const icons = { IconMaximize, IconStar, IconHeart, IconCashBanknote, IconSettings, IconReceipt };

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
            visible: 'isSuperAdmin',
            breadcrumbs: false
        },
        {
            id: 'customer-reviews',
            title: 'Customer Reviews',
            type: 'item',
            url: '/reviews/list',
            icon: icons.IconStar,
            visible: 'isSuperAdmin',
            breadcrumbs: false
        },
        {
            id: 'product-in-wish-list',
            title: 'Product In Wish List',
            type: 'item',
            url: '/stock/product-in-wish-list',
            icon: icons.IconHeart,
            visible: 'isSuperAdmin',
            breadcrumbs: false
        },
        {
            id: 'order-transactions',
            title: 'Order Transactions',
            type: 'item',
            url: '/transaction/list',
            icon: icons.IconCashBanknote,
            visible: 'isSuperAdmin',
            breadcrumbs: false
        },
        {
            id: 'refund-transactions',
            title: 'Refund Transactions',
            type: 'item',
            url: '/transaction/refund-list',
            icon: icons.IconCashBanknote,
            visible: 'isSuperAdmin',
            breadcrumbs: false
        },
        {
            id: 'shipping-method',
            title: 'Shipping Method',
            type: 'item',
            url: '/seller/business-settings/shipping-method/add',
            icon: icons.IconSettings,
            visible: 'isSeller',
            breadcrumbs: false
        },
        {
            id: 'withdraws',
            title: 'Withdraws',
            type: 'item',
            url: '/seller/business-settings/withdraw/list',
            icon: icons.IconReceipt,
            visible: 'isSeller',
            breadcrumbs: false
        }
    ]
};

export default businessSection;
