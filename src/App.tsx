import { Login, Users, UserDetails } from './pages/index.ts';
import { Routes, Route } from 'react-router';
import Layout from './components/layout/Layout.tsx';

const App = () => {
    return (
        <Routes>
            <Route>
                <Route path="/" element={<Login />} />
            </Route>

            <Route path="/dashboard" element={<Layout />}>
                <Route index element={<Users />} />
                <Route
                    path="/dashboard/user-details"
                    element={<UserDetails />}
                />
            </Route>
        </Routes>
    );
};

export default App;
