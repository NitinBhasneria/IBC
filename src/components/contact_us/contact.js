import { Container, Col, Row } from 'react-bootstrap';
import './Contact.css';
import contactI from './../../static/ContactImage.png'
import Icon from './../../static/mapIcon.svg';
import Courousel from './corousel';
import Footer from './../footer_desktop/footer.js';
import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MapSection from './../map/map.js';

const UseStyles = makeStyles({
  list: {
    width: (window.innerWidth<=568)?window.innerWidth : (window.innerWidth-(window.innerWidth)/10),
  },
  fullList: {
    width: 'auto',
  },
});
const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
}
export default function Contact() {
    const classes = UseStyles();
    console.log((window.innerWidth-200));
    const [state, setState] = useState({
        right: false,
    });
  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}classes
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <MapSection location={location} zoomLevel={13} />
    </div>
  );

  return (
    <div>
            <div className="contact">
                <Container fluid="sm" className = "contain h-100">
                    <Row className = "h-100 w-100">
                        <Col sm={5} className = "h-100" >
                            <img src={contactI}
                                class="image"/></Col>
                        <Col sm className="h-100 info pr-0">
                            <Row className="coperate h-50 p-xl-5 p-lg-4 p-md-3 p-sm-2 info">Corporate<br></br>Headquarters</Row>
                            <Row className="h-50 p-xl-5 p-lg-4 p-md-3 p-sm-2 info">
                                <Col sm={5} className="pt-xl-5 pt-lg-4 pt-md-3 pt-sm-2 pl-0 h-100 info_content2">ABC road, X street <br></br>Bangalore.<br></br>India</Col>
                                <Col sm={7} className="pt-xl-5 pt-lg-4 pt-md-3 pt-sm-2 pl-0 h-100 info_content2" >
                                    <b>Email :</b> yashsrivastava326@gmail.com<br></br><br></br>
                                    <b>Phone number :</b> 7579252284<br></br><br></br>
                                    
                                        <React.Fragment key={'right'}>
                                            <div><b  className="pointer_cursor" onClick={toggleDrawer('right', true)} >Map</b><img onClick={toggleDrawer('right', true)} className="pl-3 pointer_cursor" src={Icon} /></div>
                                          <SwipeableDrawer
                                            anchor={'right'}
                                            open={state['right']}
                                            onClose={toggleDrawer('right', false)}
                                            onOpen={toggleDrawer('right', true)}
                                          >
                                            {list('right')}
                                          </SwipeableDrawer>
                                        </React.Fragment>
                                    </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* <div className="mid fz pt-xl-5 pt-md-5 pt-sm-4">
                <Container fluid="sm" className = "contain h-100">
                    <Row className="pt-xl-5 pt-md-5 pt-sm-3 w-100">
                        <Col xl={8} lg={8} md={7} sm={7} className="pt-xl-5 pt-md-5 pt-sm-4">
                            <h3 className="head_project">Project offices<br></br></h3>
                            <p className='info_content cl-grey l_h'>ABC road, X street<br></br>Bangalore.<br></br>India</p>
                        </Col>
                        <Col xl={4} lg={4} md={5} sm={5} className="pt-xl-5 pt-md-5 pt-sm-4">
                            <h3 className="head_project">Marketing<br></br></h3>
                            <p className='info_content cl-grey'>
                                <b>Name :</b> Yash Srivastava<br></br>
                                <b>Email :</b> yashsrivastava326@gmail.com<br></br>
                                <b>Phone number :</b> 7579252284<br></br></p>
                        </Col>
                    </Row>
                </Container>
            </div> */}
            <Courousel />
        </div>
  );
}