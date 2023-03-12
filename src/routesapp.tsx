
import { Route, Routes } from 'react-router-dom';

import SearchView from './views/search/SearchView';
import NotFoundView from './views/notfound/NotFoundView';
export default function RoutesApp() {
    return (
        <Routes>
            <Route path='/' element={<SearchView />} />
            <Route path='*' element={<NotFoundView />} />
        </Routes>
    )
}