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

// In House Products routing
const InHouseProductListView = Loadable(lazy(() => import('views/product-management/in-house-products')));
const StockLimitProductsView = Loadable(lazy(() => import('views/product-management/in-house-products/StockLimitProducts')));

// Seller Orders Routing
const SellerAllOrders = Loadable(lazy(() => import('views/seller-order-management')));
const SellerPendingOrders = Loadable(lazy(() => import('views/seller-order-management/SellerPendingOrders')));
const SellerConfirmedOrders = Loadable(lazy(() => import('views/seller-order-management/SellerConfirmedOrders')));
const SellerProcessingOrders = Loadable(lazy(() => import('views/seller-order-management/SellerProcessingOrders')));
const SellerOutForDeliveryOrders = Loadable(lazy(() => import('views/seller-order-management/SellerOutForDeliveryOrders')));
const SellerDeliveredOrders = Loadable(lazy(() => import('views/seller-order-management/SellerDeliveredOrders')));
const SellerReturnedOrders = Loadable(lazy(() => import('views/seller-order-management/SellerReturnedOrders')));
const SellerFailedOrders = Loadable(lazy(() => import('views/seller-order-management/SellerFailedOrders')));
const SellerCanceledOrders = Loadable(lazy(() => import('views/seller-order-management/SellerCanceledOrders')));

// Seller Product Management Routing
const SellerProductsView = Loadable(lazy(() => import('views/product-management/seller/products')));
const SellerStockLimitProduct = Loadable(lazy(() => import('views/product-management/seller/products/SellerStockLimitProduct')));
const SellerProductReviewView = Loadable(lazy(() => import('views/product-management/seller/productReviewView')));
const SellerPendingRefund = Loadable(lazy(() => import('views/product-management/seller/seller-refund-request-list/SellerPendingRefund')));
const SellerApprovedRefund = Loadable(
    lazy(() => import('views/product-management/seller/seller-refund-request-list/SellerApprovedRefund'))
);
const SellerRefundedRefund = Loadable(
    lazy(() => import('views/product-management/seller/seller-refund-request-list/SellerRefundedRefund'))
);

const SellerRejectedRefund = Loadable(
    lazy(() => import('views/product-management/seller/seller-refund-request-list/SellerRejectedRefund'))
);
const SellerMessageView = Loadable(lazy(() => import('views/product-management/seller/MessageView')));
const SellerShopView = Loadable(lazy(() => import('views/product-management/seller/SellerShopView')));
const SellerBankView = Loadable(lazy(() => import('views/product-management/seller/SellerBankView')));

// Seller Products routing
const SellerProductListView = Loadable(lazy(() => import('views/product-management/seller-products')));
const ApprovedProductListView = Loadable(lazy(() => import('views/product-management/seller-products/ApprovedProduct')));
const DeniedProductListView = Loadable(lazy(() => import('views/product-management/seller-products/DeniedProduct')));

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
        },
        {
            path: '/product/list/in_house',
            element: <InHouseProductListView />
        },
        {
            path: '/product/stock-limit-list/in_house',
            element: <StockLimitProductsView />
        },

        // Seller
        {
            path: '/seller/orders/list/all',
            element: <SellerAllOrders />
        },
        {
            path: '/seller/orders/list/pending',
            element: <SellerPendingOrders />
        },
        {
            path: '/seller/orders/list/confirmed',
            element: <SellerConfirmedOrders />
        },
        {
            path: '/seller/orders/list/processing',
            element: <SellerProcessingOrders />
        },
        {
            path: '/seller/orders/list/out_for_delivery',
            element: <SellerOutForDeliveryOrders />
        },
        {
            path: '/seller/orders/list/delivered',
            element: <SellerDeliveredOrders />
        },
        {
            path: '/seller/orders/list/returned',
            element: <SellerReturnedOrders />
        },
        {
            path: '/seller/orders/list/failed',
            element: <SellerFailedOrders />
        },
        {
            path: '/seller/orders/list/canceled',
            element: <SellerCanceledOrders />
        },
        {
            path: '/seller/product/list',
            element: <SellerProductsView />
        },
        {
            path: '/seller/product/stock-limit-list/in-house',
            element: <SellerStockLimitProduct />
        },
        {
            path: '/seller/reviews/list',
            element: <SellerProductReviewView />
        },
        {
            path: '/seller/refund/list/pending',
            element: <SellerPendingRefund />
        },
        {
            path: '/seller/refund/list/approved',
            element: <SellerApprovedRefund />
        },
        {
            path: '/seller/refund/list/refunded',
            element: <SellerRefundedRefund />
        },
        {
            path: '/seller/refund/list/rejected',
            element: <SellerRejectedRefund />
        },
        {
            path: '/seller/messages/chat',
            element: <SellerMessageView />
        },
        {
            path: '/seller/profile/view',
            element: <SellerBankView />
        },
        {
            path: '/seller/shop/view',
            element: <SellerShopView />
        }
    ]
};

export default MainRoutes;
