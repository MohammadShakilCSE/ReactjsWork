import React, { Component, Fragment } from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import '../../asset/css/custom.css';
import'../../asset/css/bootstrap.min.css';
import {NavLink} from "react-router-dom";

class TopNavigation extends Component {
    constructor(props){
        super(props);
        this.state={
            navTitle:"NavBrand",
            NavGround:"NavBackground",
            NavMenu:"NavItem",
            NabVariant:"dark",
            PageTitle:props.title
        }
    }

    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({
                navTitle:"NavBrandScroll",NavGround:"NavBackgroundScroll",NavMenu:"NavItemScroll",NabVariant:"light"
            })

        }else if(window.scrollY<100){
                this.setState({
                    navTitle:"NavBrand",NavGround:"NavBackground",NavMenu:"NavItem", NabVariant:"dark"
                })
        }
    }
    componentDidMount(){
        window.addEventListener('scroll',this.onScroll);
        window.scrollTo(0, 0);
    }
    ScrollHandler=()=>{
     window.scrollTo(0, 0);
    }
    render() {
        return (
            <Fragment>
                <title>{this.state.PageTitle}</title>
                <Navbar fixed="top" collapseOnSelect expand="lg"  className={this.state.NavGround} variant={this.state.NabVariant}>
                    <Navbar.Brand ><NavLink className={this.state.navTitle} to="/">Brandname</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto"></Nav>
                        <Nav className="text-uppercase" >
                            <NavLink exact onClick={this.ScrollHandler} activeStyle={{color:'#00a8ee'}} className={this.state.NavMenu} to="/">Home</NavLink>
                            <NavLink exact onClick={this.ScrollHandler} activeStyle={{color:'#00a8ee'}} className={this.state.NavMenu} to="/service">Services</NavLink>
                            <NavLink exact onClick={this.ScrollHandler} activeStyle={{color:'#00a8ee'}} className={this.state.NavMenu} to="/course">Courses</NavLink>
                            <NavLink exact onClick={this.ScrollHandler} activeStyle={{color:'#00a8ee'}} className={this.state.NavMenu} to="/project">Portfolio</NavLink>
                            <NavLink exact onClick={this.ScrollHandler} activeStyle={{color:'#00a8ee'}} className={this.state.NavMenu} to="/contact">Contact</NavLink>
                            <NavLink exact onClick={this.ScrollHandler} activeStyle={{color:'#00a8ee'}} className={this.state.NavMenu} to="/about">About</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
         );
    }
}

export default TopNavigation;