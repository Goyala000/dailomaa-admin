// assets
import { IconShoppingCart } from '@tabler/icons';

// constant
const icons = {
    IconShoppingCart
};

const orderManagement = {
    id: 'order-management',
    title: 'Order Management',
    type: 'group',
    children: [
        {
            id: 'orders',
            title: 'Orders',
            type: 'collapse',
            icon: icons.IconShoppingCart,
            visible: 'isSuperAdmin',
            children: [
                {
                    id: 'all',
                    title: 'All',
                    type: 'item',
                    url: '/orders/list/all',
                    breadcrumbs: false
                },
                {
                    id: 'pending',
                    title: 'Pending',
                    type: 'item',
                    url: '/orders/list/pending',
                    breadcrumbs: false
                },
                {
                    id: 'confirmed',
                    title: 'Confirmed',
                    type: 'item',
                    url: '/orders/list/confirmed',
                    breadcrumbs: false
                },
                {
                    id: 'processing',
                    title: 'Processing',
                    type: 'item',
                    url: '/orders/list/processing',
                    breadcrumbs: false
                },
                {
                    id: 'out-for-delivery',
                    title: 'Out For Delivery',
                    type: 'item',
                    url: '/orders/list/out_for_delivery',
                    breadcrumbs: false
                },
                {
                    id: 'delivered',
                    title: 'Delivered',
                    type: 'item',
                    url: '/orders/list/delivered',
                    breadcrumbs: false
                },
                {
                    id: 'returned',
                    title: 'Returned',
                    type: 'item',
                    url: '/orders/list/returned',
                    breadcrumbs: false
                },
                {
                    id: 'failed',
                    title: 'Failed',
                    type: 'item',
                    url: '/orders/list/failed',
                    breadcrumbs: false
                },
                {
                    id: 'canceled',
                    title: 'Canceled',
                    type: 'item',
                    url: '/orders/list/canceled',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'orders',
            title: 'Orders',
            type: 'collapse',
            icon: icons.IconShoppingCart,
            visible: 'isSeller',
            children: [
                {
                    id: 'all',
                    title: 'All',
                    type: 'item',
                    url: '/seller/orders/list/all',
                    breadcrumbs: false
                },
                {
                    id: 'pending',
                    title: 'Pending',
                    type: 'item',
                    url: '/seller/orders/list/pending',
                    breadcrumbs: false
                },
                {
                    id: 'confirmed',
                    title: 'Confirmed',
                    type: 'item',
                    url: '/seller/orders/list/confirmed',
                    breadcrumbs: false
                },
                {
                    id: 'processing',
                    title: 'Processing',
                    type: 'item',
                    url: '/seller/orders/list/processing',
                    breadcrumbs: false
                },
                {
                    id: 'out-for-delivery',
                    title: 'Out For Delivery',
                    type: 'item',
                    url: '/seller/orders/list/out_for_delivery',
                    breadcrumbs: false
                },
                {
                    id: 'delivered',
                    title: 'Delivered',
                    type: 'item',
                    url: '/seller/orders/list/delivered',
                    breadcrumbs: false
                },
                {
                    id: 'returned',
                    title: 'Returned',
                    type: 'item',
                    url: '/seller/orders/list/returned',
                    breadcrumbs: false
                },
                {
                    id: 'failed',
                    title: 'Failed',
                    type: 'item',
                    url: '/seller/orders/list/failed',
                    breadcrumbs: false
                },
                {
                    id: 'canceled',
                    title: 'Canceled',
                    type: 'item',
                    url: '/seller/orders/list/canceled',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default orderManagement;
