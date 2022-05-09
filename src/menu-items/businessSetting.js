// assets
import { IconReceiptRefund, IconUser, IconCashBanknote, IconSocial } from '@tabler/icons';

// constant
const icons = {
    IconReceiptRefund,
    IconUser,
    IconCashBanknote,
    IconSocial
};

const businessSetting = {
    id: 'business-settings',
    title: 'Business Settings',
    type: 'group',
    children: [
        {
            id: 'refund-request-list',
            title: 'Refund Request List',
            type: 'collapse',
            icon: icons.IconReceiptRefund,
            children: [
                {
                    id: 'pending',
                    title: 'Pending',
                    type: 'item',
                    url: '/business-settings/refund/list/pending',
                    breadcrumbs: false
                },
                {
                    id: 'approved',
                    title: 'Approved',
                    type: 'item',
                    url: '/business-settings/refund/list/approved',
                    breadcrumbs: false
                },
                {
                    id: 'refunded',
                    title: 'Refunded',
                    type: 'item',
                    url: '/business-settings/refund/list/refunded',
                    breadcrumbs: false
                },
                {
                    id: 'rejected',
                    title: 'Rejected',
                    type: 'item',
                    url: '/business-settings/refund/list/rejected',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'seller-settings',
            title: 'Seller settings',
            type: 'item',
            url: '/business-settings/seller-settings',
            icon: icons.IconUser,
            breadcrumbs: false
        },
        {
            id: 'payment-method',
            title: 'Payment Method',
            type: 'item',
            url: '/business-settings/payment-method',
            icon: icons.IconCashBanknote,
            breadcrumbs: false
        },
        {
            id: 'social-login',
            title: 'Social Login',
            type: 'item',
            url: '/social-login/view',
            icon: icons.IconSocial,
            breadcrumbs: false
        }
    ]
};

export default businessSetting;
