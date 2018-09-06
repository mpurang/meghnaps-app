import {AppBar, Toolbar, Typography} from '@material-ui/core/';
import * as React from 'react';
import { Link } from 'react-router-dom';
// import MenuIcon from '@material-ui/icons/Menu';

export const Header: React.StatelessComponent<{}> = () => {
    return (
        <AppBar position="static" style={{backgroundColor:"#E5E4E2"}}>
            <Toolbar>
              <Typography variant="display2" color="inherit" aria-label="Menu" align="center" style={{ fontSize: '20px' }}>
                <Link to="/" className="toolB">MSA 2018</Link>
              </Typography>
            </Toolbar>
          </AppBar>
               
    );
}