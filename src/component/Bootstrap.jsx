import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, ButtonToolbar, Stack } from 'react-bootstrap';

const Bootstrap = () => {
  return (
    <div>
      <div>Bootstrap</div>
      <ButtonToolbar>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="info">Info</Button>
        <Button variant="light">Light</Button>
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>
      </ButtonToolbar>
      <Stack direction='horizontal' gap={3}>
        <div className="bg-light border">
          fir
        </div>
        <div style={{backgroundColor: '#00ffff'}}>
          sec
        </div>
        <div style={{backgroundColor: '#00ffff'}}>
          thr
        </div>
      </Stack>
    </div>
  )
}

export default Bootstrap