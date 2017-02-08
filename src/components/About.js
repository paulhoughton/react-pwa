import React from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import { Link } from 'react-router-dom';

export default () => (
  <Card shadow={0} style={{ textAlign: 'center' }}>
    <CardTitle style={{ margin: 'auto' }}>PWA</CardTitle>
    <CardText>
      About this Application
    </CardText>
    <CardActions border>
      <Link to="/"><Button colored>OK</Button></Link>
    </CardActions>
  </Card>
);