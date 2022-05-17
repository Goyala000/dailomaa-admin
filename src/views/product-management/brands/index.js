import SearchSection from 'layout/MainLayout/Header/SearchSection';
import MainCard from 'ui-component/cards/MainCard';
import TableComponent from 'ui-component/TableComponent';

export default function BrandListView() {
    return (
        <MainCard title={<SearchSection />}>
            <TableComponent />
        </MainCard>
    );
}
