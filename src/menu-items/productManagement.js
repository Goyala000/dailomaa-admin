// assets
import {
    IconHome,
    IconBrandApple,
    IconLayoutList,
    IconBrandProducthunt,
    IconDiamond,
    IconStar,
    IconReceiptRefund,
    IconMail,
    IconBuildingBank
} from '@tabler/icons';

import { useSelector, useDispatch } from 'react-redux';
import Loader from 'ui-component/Loader';

// constant
const icons = {
    IconHome,
    IconBrandApple,
    IconLayoutList,
    IconBrandProducthunt,
    IconDiamond,
    IconStar,
    IconReceiptRefund,
    IconMail,
    IconBuildingBank
};

const productManagement = {
    id: 'pManagement',
    title: 'Product Management',
    type: 'group',
    children: [
        {
            id: 'brands',
            title: 'Brands',
            type: 'collapse',
            icon: icons.IconBrandApple,
            visible: 'isSuperAdmin',
            children: [
                {
                    id: 'add-new',
                    title: 'Add New',
                    type: 'item',
                    url: '/brand/add-new',
                    breadcrumbs: true
                },
                {
                    id: 'list',
                    title: 'Brand List',
                    type: 'item',
                    url: '/brand/list',
                    breadcrumbs: true
                }
            ]
        },
        {
            id: 'Categories',
            title: 'Categories',
            type: 'collapse',
            icon: icons.IconLayoutList,
            visible: 'isSuperAdmin',
            children: [
                {
                    id: 'category',
                    title: 'Category',
                    type: 'item',
                    url: '/category/view',
                    breadcrumbs: true
                },
                {
                    id: 'sub-category',
                    title: 'Sub Category',
                    type: 'item',
                    url: '/sub-category/view',
                    breadcrumbs: true
                },
                {
                    id: 'sub-sub-category',
                    title: 'Sub Sub Category',
                    type: 'item',
                    url: '/sub-sub-category/view',
                    breadcrumbs: true
                }
            ]
        },
        {
            id: 'inhouse-products',
            title: 'InHouse Products',
            type: 'collapse',
            icon: icons.IconHome,
            visible: 'isSuperAdmin',

            children: [
                {
                    id: 'products',
                    title: 'Products',
                    type: 'item',
                    url: '/product/list/in_house',
                    breadcrumbs: true
                },
                {
                    id: 'stock-limit-products',
                    title: 'Stock limit products',
                    type: 'item',
                    url: '/product/stock-limit-list/in_house',
                    breadcrumbs: true
                }
            ]
        },
        {
            id: 'seller-products',
            title: 'Seller Products',
            type: 'collapse',
            icon: icons.IconBrandProducthunt,
            visible: 'isSuperAdmin',

            children: [
                {
                    id: 'new-products',
                    title: 'New Products',
                    type: 'item',
                    url: '/product/list/seller',
                    breadcrumbs: false
                },
                {
                    id: 'approved-products',
                    title: 'Approved Products',
                    type: 'item',
                    url: '/product/list/seller',
                    breadcrumbs: false
                },
                {
                    id: 'denied-products',
                    title: 'Denied Products',
                    type: 'item',
                    url: '/product/list/seller',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'products',
            title: 'Products',
            type: 'collapse',
            icon: icons.IconDiamond,
            visible: 'isSeller',
            children: [
                {
                    id: 'products',
                    title: 'Products',
                    type: 'item',
                    url: '/seller/product/list',
                    breadcrumbs: false
                },
                {
                    id: 'stock-limit-products',
                    title: 'Stock Limit Products',
                    type: 'item',
                    url: '/seller/product/stock-limit-list/in-house',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'product-reviews',
            title: 'Product Reviews',
            type: 'item',
            url: '/seller/reviews/list',
            icon: icons.IconStar,
            visible: 'isSeller'
        },
        {
            id: 'refund-request-list',
            title: 'Refund Request List',
            type: 'collapse',
            icon: icons.IconReceiptRefund,
            visible: 'isSeller',
            children: [
                {
                    id: 'pending',
                    title: 'Pending',
                    type: 'item',
                    url: '/seller/refund/list/pending',
                    breadcrumbs: false
                },
                {
                    id: 'approved',
                    title: 'Approved',
                    type: 'item',
                    url: '/seller/refund/list/approved',
                    breadcrumbs: false
                },
                {
                    id: 'refunded',
                    title: 'Refunded',
                    type: 'item',
                    url: '/seller/refund/list/refunded',
                    breadcrumbs: false
                },
                {
                    id: 'rejected',
                    title: 'Rejected',
                    type: 'item',
                    url: '/seller/refund/list/rejected',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'messages',
            title: 'Messages',
            type: 'item',
            url: '/seller/messages/chat',
            icon: icons.IconMail,
            visible: 'isSeller'
        },
        {
            id: 'my-bank-info',
            title: 'My Bank Info',
            type: 'item',
            url: '/seller/profile/view',
            icon: icons.IconBuildingBank,
            visible: 'isSeller'
        },
        {
            id: 'my-shop',
            title: 'My Shop',
            type: 'item',
            url: '/seller/shop/view',
            icon: icons.IconHome,
            visible: 'isSeller'
        }
    ]
};

export default productManagement;
