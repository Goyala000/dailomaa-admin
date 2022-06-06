// assets
import { IconPhoto, IconTicket, IconBellRinging, IconCloudStorm, IconCrown, IconFlag } from '@tabler/icons';

// constant
const icons = { IconPhoto, IconTicket, IconBellRinging, IconCloudStorm, IconCrown, IconFlag };

const marketingSection = {
    id: 'marketing-section',
    title: 'Marketing Section',
    type: 'group',
    visible: 'isSuperAdmin',
    children: [
        {
            id: 'banners',
            title: 'Banners',
            type: 'item',
            url: '/banner/list',
            icon: icons.IconPhoto,
            breadcrumbs: false
        },
        {
            id: 'coupons',
            title: 'Coupons',
            type: 'item',
            url: '/coupon/add-new',
            icon: icons.IconTicket,
            breadcrumbs: false
        },
        {
            id: 'push-notifications',
            title: 'Push Notifications',
            type: 'item',
            url: '/notification/add-new',
            icon: icons.IconBellRinging,
            breadcrumbs: false
        },
        {
            id: 'flash-deals',
            title: 'Flash Deals',
            type: 'item',
            url: '/deal/flash',
            icon: icons.IconCloudStorm,
            breadcrumbs: false
        },
        {
            id: 'deal-of-the-day',
            title: 'Deal of the day',
            type: 'item',
            url: '/deal/day',
            icon: icons.IconCrown,
            breadcrumbs: false
        },
        {
            id: 'featured-deal',
            title: 'Featured Deal',
            type: 'item',
            url: '/deal/feature',
            icon: icons.IconFlag,
            breadcrumbs: false
        }
    ]
};

export default marketingSection;
