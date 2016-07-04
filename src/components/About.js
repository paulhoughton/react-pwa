import React from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import { hashHistory } from 'react-router';

export default () => (
  <Card shadow={0} style={{ textAlign: 'center' }}>
    <CardTitle style={{ margin: 'auto' }}>PWA</CardTitle>
    <CardText>
      About this Application
    </CardText>
    <CardActions border>
      <Button colored onClick={() => hashHistory.push('/') } >OK</Button>
    </CardActions>
  </Card>
);