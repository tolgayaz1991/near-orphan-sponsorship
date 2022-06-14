import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

const SponsoringForm = ({submit_form}) => {

  const [orphanId, setOrphanId] = useState("0");
  const [daysToSponsor, setDaysToSponsor] = useState("");

  
  return (
    <>
    <Row  className="mb-2 justify-content-md-center">
      <Col className="col-md-auto">
        <h1 style={{textAlign:"center"}} className="justify-content-center">Sponsorship Form</h1>
      </Col>
    </Row>
    <Form>
      <Row className="mb-3 justify-content-md-center">
        <Form.Group md={4}>
          <Form.Label className="row justify-content-center" style = {{textAlign:"center"}}><span style = {{fontWeight: 500, fontSize: 17}}>Enter An Orphan Id To Sponsor<br />(Observe The Orphan Table Below, Enter 0 for General Support)<br />(If there happens a problem in reaching an orphan, the support is used for other orphans.)</span></Form.Label>
          <Form.Control
            required
            autoFocus
            type="text"
            placeholder="Orphan Id"
            onChange={(e) => {
              setOrphanId(e.target.value);
            }}
            defaultValue = "0"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group md={4}>
          <Form.Label className="row justify-content-center mt-3" style = {{textAlign:"center"}}><span style = {{fontWeight: 500, fontSize: 17}}>Enter Days To Sponsor <br /> (0.2 Near is Taken per Day)</span></Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Day(s) To Sponsor"
            onChange={(e) => {
              setDaysToSponsor(e.target.value);
            }}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>
          <Row className="justify-content-center" xs={3} md={2}>
            <Button  className="btn btn-lg" size="lg" onClick={() => submit_form({orphanId,daysToSponsor})}>Submit The Form</Button>
          </Row>
          <p className="row justify-content-center mt-1" style = {{textAlign:"center"}}><span style = {{fontWeight: 500, fontSize: 17}}>To get to the approval page</span></p>
      </Form> 
      </>
  );
};

export default SponsoringForm;