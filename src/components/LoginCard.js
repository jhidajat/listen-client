import React, { Component } from 'react';

import Card from 'material-ui/Card';
import CardText from 'material-ui/Card/CardText';
import RaisedButton from 'material-ui/RaisedButton';
import SvgIcon from 'material-ui/SvgIcon';
import { Grid, Row, Col } from 'react-material-responsive-grid';

class LoginCard extends Component {

  _handleLogIn() {
    this.props.logIn();
  }

  render() {

    const SpotifyIcon = (props) => (
      <SvgIcon 
        {...props} 
        color="#1DB954" 
        style={{ 
          width: props.size, 
          height: props.size 
        }}
      >
        <path fill="#IDB952" d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z" />
      </SvgIcon>
    );

    return (
      <Card
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          width: '300px',
          height: '250px',
          marginLeft: '-150px',
          marginTop: '-100px',
          padding: '5px',
          background: 'rgba(0,0,0, 0.6)',
          borderRadius: '15px'
        }}
      >
        <CardText>
          <Grid style={{ textAlign: 'center' }}>
            <Row>
              <Col lg={12}>
                <SpotifyIcon size={150} />
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <RaisedButton
                  label={
                    <strong 
                      style={{ 
                        color: "#ffffff", 
                        fontSize: "12px" 
                      }}
                    >
                      Log in To Spotify
                    </strong>
                  }
                  backgroundColor="#1db954"
                  fullWidth={true}
                  buttonStyle={{ 
                    borderRadius: '20px' 
                  }}
                  style={{
                    marginTop: '20px',
                    borderRadius: '20px'
                  }}
                  onClick={this._handleLogIn}
                />
              </Col>
            </Row>
          </Grid>
        </CardText>
      </Card>
    )
  }
}

export default LoginCard;