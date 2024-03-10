import { Link, NavLink, matchPath, useLocation } from 'react-router-dom';
import './routes.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function Routes() {

    const homeRoute = "/"
    const notesRoute = "/notes"

    const routeMatch = useRouteMatch([homeRoute, notesRoute])
    const currentPath = routeMatch?.pattern?.path

    return (
    <div id="navbar">
        <Tabs value={currentPath} variant="fullWidth">
            <Tab label="Home" value={homeRoute} to={homeRoute} component={Link}/>
            <Tab label="Notes" value={notesRoute} to={notesRoute} component={Link}/>
        </Tabs>
    </div>
    )
}

function useRouteMatch(patterns: readonly string[]) {
    const { pathname } = useLocation();
  
    for (let i = 0; i < patterns.length; i += 1) {
      const pattern = patterns[i];
      const possibleMatch = matchPath(pattern, pathname);
      if (possibleMatch !== null) {
        return possibleMatch;
      }
    }
  
    return null;
  }