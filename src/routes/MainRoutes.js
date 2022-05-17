import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// Orders Management routing
const AllOrders = Loadable(lazy(() => import('views/order-management')));
const PendingOrders = Loadable(lazy(() => import('views/order-management/PendingOrders')));
const ConfirmedOrders = Loadable(lazy(() => import('views/order-management/ConfirmedOrders')));
const ProcessingOrders = Loadable(lazy(() => import('views/order-management/ProcessingOrders')));
const OutForDeliveryOrders = Loadable(lazy(() => import('views/order-management/OutForDeliveryOrders')));
const DeliveredOrders = Loadable(lazy(() => import('views/order-management/DeliveredOrders')));
const ReturnedOrders = Loadable(lazy(() => import('views/order-management/ReturnedOrders')));
const FailedOrders = Loadable(lazy(() => import('views/order-management/FailedOrders')));
const CanceledOrders = Loadable(lazy(() => import('views/order-management/CanceledOrders')));

// Product Management routing
const AddNewBrandView = Loadable(lazy(() => import('views/product-management/brands/add')));
const BrandListView = Loadable(lazy(() => import('views/product-management/brands')));
const CategoryView = Loadable(lazy(() => import('views/product-management/categories')));
const SubCategoryView = Loadable(lazy(() => import('views/product-management/categories/subCategory')));
const SubSubCategoryView = Loadable(lazy(() => import('views/product-management/categories/subSubCategory')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: '/dashboard/default',
            element: <DashboardDefault />
        },
        {
            path: '/utils/util-typography',
            element: <UtilsTypography />
        },
        {
            path: '/utils/util-color',
            element: <UtilsColor />
        },
        {
            path: '/utils/util-shadow',
            element: <UtilsShadow />
        },
        {
            path: '/icons/tabler-icons',
            element: <UtilsTablerIcons />
        },
        {
            path: '/icons/material-icons',
            element: <UtilsMaterialIcons />
        },
        {
            path: '/sample-page',
            element: <SamplePage />
        },
        {
            path: '/orders/list/all',
            element: <AllOrders />
        },
        {
            path: '/orders/list/pending',
            element: <PendingOrders />
        },
        {
            path: '/orders/list/confirmed',
            element: <ConfirmedOrders />
        },
        {
            path: '/orders/list/processing',
            element: <ProcessingOrders />
        },
        {
            path: '/orders/list/out_for_delivery',
            element: <OutForDeliveryOrders />
        },
        {
            path: '/orders/list/delivered',
            element: <DeliveredOrders />
        },
        {
            path: '/orders/list/returned',
            element: <ReturnedOrders />
        },
        {
            path: '/orders/list/failed',
            element: <FailedOrders />
        },
        {
            path: '/orders/list/canceled',
            element: <CanceledOrders />
        },
        {
            path: '/brand/add-new',
            element: <AddNewBrandView />
        },
        {
            path: '/brand/list',
            element: <BrandListView />
        },
        {
            path: '/category/view',
            element: <CategoryView />
        },
        {
            path: '/sub-category/view',
            element: <SubCategoryView />
        },
        {
            path: '/sub-sub-category/view',
            element: <SubSubCategoryView />
        }
    ]
};

export default MainRoutes;
