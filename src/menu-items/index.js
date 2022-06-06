import dashboard from './dashboard';
import pages from './pages';
import utilities from './utilities';
import other from './other';
import productManagement from './productManagement';
import marketingSection from './marketingSection';
import businessSection from './businessSection';
import businessSetting from './businessSetting';
import orderManagement from './orderManagement';
import userSection from './userSection';
import DeliveryManManagement from './deliveryManManagement';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
    items: [
        dashboard,
        pages,
        utilities,
        orderManagement,
        productManagement,
        marketingSection,
        businessSection,
        userSection,
        businessSetting,
        DeliveryManManagement,
        other
    ]
};

export default menuItems;
