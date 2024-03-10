import { NavLink } from 'react-router-dom';
import './routes.css';

export default function Routes() {

    return (
    <div id="navbar">
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/notes">Notes</NavLink>
        </nav>
    </div>
    )
}