import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux/action/auth";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Loadpage from '../other/Loadpage';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: '#FFFFFF'
  },
  rightToolbar: {
    marginLeft: 'auto',
    marginRight: -12,
    color: '#FFFFFF'
  },
}));

const Navbar2 = ({ auth: { user }, logout }) => {
  const classes = useStyles();

  return user == null ? (
    <Loadpage/>
  ) : (

    <div className={classes.root}>
    <AppBar position="static" style={{ backgroundColor: '#ec008c' }}>
      <Toolbar>
        <Link to="/home">
          <Typography variant="h6"  className={classes.title}>
          {user.name}
          </Typography>
        </Link>
  <section className={classes.rightToolbar}>
         {/* <Link to="/addknow"><Button color="inherit">Add Knowledge</Button></Link> */}
         <Button component={Link} to="/myknowledge" color="inherit">My Knowledge</Button>
         <Button component={Link} to='/addknow' color="inherit">Add Knowledge</Button>
        <Button component={Link} to="/" onClick={logout}  color="inherit">Logout</Button>
  </section>
       </Toolbar>
     </AppBar>
   </div>

//   <div className={classes.root}>
//   <AppBar position="static">
//     <Toolbar>
//       <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        
//       </IconButton>
//       <Typography variant="h6" className={classes.title}>
//         News
//       </Typography>
//       <Link to="/" onClick={logout}>
//       <Button color="inherit"> <span>Logout</span></Button>
//       </Link>
//     </Toolbar>
//   </AppBar>
// </div>

    // <div>
    //   <Navbar color="primary" dark expand="md">
    //     <NavbarBrand href="/"></NavbarBrand>
    //     <NavbarToggler onClick={toggle} />
    //     <Collapse isOpen={isOpen} navbar>
    //       <Nav className="mr-auto" navbar>
    //         <NavItem>
    //           <Link to="/home">
    //             <NavLink>Home</NavLink>
    //           </Link>
    //         </NavItem>
    //         <NavItem>
    //           <Link to="/addknow">
    //             <NavLink>Add Knowledge</NavLink>
    //           </Link>
    //         </NavItem>
    //       </Nav>
    //       <Nav className="ml-auto" navbar>
    //         <Link to="/" onClick={logout}>
    //           <NavItem>
    //             <NavLink>Logout</NavLink>
    //           </NavItem>
    //         </Link>
    //       </Nav>
    //     </Collapse>
    //   </Navbar>
    // </div>
  );
};

Navbar2.propTypes = {
  logout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  user: state.user
});

export default connect(mapStateToProps, { logout })(Navbar2);
