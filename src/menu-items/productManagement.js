// assets
import { IconHome, IconBrandApple, IconLayoutList, IconBrandProducthunt } from '@tabler/icons';

// constant
const icons = {
    IconHome,
    IconBrandApple,
    IconLayoutList,
    IconBrandProducthunt
};

const productManagement = {
    id: 'pManagement',
    title: 'Product Management',
    type: 'group',
    children: [
        {
            id: 'inhouse-products',
            title: 'InHouse Products',
            type: 'collapse',
            icon: icons.IconHome,
            children: [
                {
                    id: 'products',
                    title: 'Products',
                    type: 'item',
                    url: '/product/list/in_house',
                    breadcrumbs: false
                },
                {
                    id: 'stock-limit-products',
                    title: 'Stock limit products',
                    type: 'item',
                    url: '/product/stock-limit-list/in_house',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'brands',
            title: 'Brands',
            type: 'collapse',
            icon: icons.IconBrandApple,
            children: [
                {
                    id: 'add-new',
                    title: 'Add New',
                    type: 'item',
                    url: '/brand/add-new',
                    breadcrumbs: false
                },
                {
                    id: 'list',
                    title: 'List',
                    type: 'item',
                    url: '/brand/list',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'Categories',
            title: 'Categories',
            type: 'collapse',
            icon: icons.IconLayoutList,
            children: [
                {
                    id: 'category',
                    title: 'Category',
                    type: 'item',
                    url: '/category/view',
                    breadcrumbs: false
                },
                {
                    id: 'sub-category',
                    title: 'Sub category',
                    type: 'item',
                    url: '/sub-category/view',
                    breadcrumbs: false
                },
                {
                    id: 'sub-sub-category',
                    title: 'Sub sub category',
                    type: 'item',
                    url: '/sub-sub-category/view',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'seller-products',
            title: 'Seller Products',
            type: 'collapse',
            icon: icons.IconBrandProducthunt,
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
        }
    ]
};

export default productManagement;
