import React, { FormEvent, useRef, useState } from "react";
import {
  Button,
  Card,
  Col,
  Collapse,
  Container,
  FloatingLabel,
  Form,
  ListGroup,
  Nav,
  Row,
} from "react-bootstrap";
import { setTimeout } from "timers";
import "./App.css";
import {
  getWithProtoBodyAsURLParam,
  patchWithProtoBodyAsURLParam,
  post,
} from "./proto-handling";
import { assignment } from "./proto/assignment-ms-protobuf-models-es6";

function App() {
  const [openGetForm, setOpenGetForm] = useState(true);
  const [openPostForm, setOpenPostForm] = useState(false);
  const [openPatchForm, setOpenPatchForm] = useState(false);
  const [showGetResponse, setShowGetResponse] = useState({
    isshow: false,
    response: new assignment.GetResponse(),
  });
  const [showPostResponse, setShowPostResponse] = useState({
    isshow: false,
    response: new assignment.PostResponse(),
  });
  const getFormRef = useRef<HTMLFormElement | null>();
  const postFormRef = useRef<HTMLFormElement | null>();
  const patchFormRef = useRef<HTMLFormElement | null>();
  const handleSelect = (eventKey: string | null) => {
    setInputs({});
    getFormRef.current?.reset();
    postFormRef.current?.reset();
    patchFormRef.current?.reset();
    if (eventKey?.match("get")) {
      setOpenGetForm(true);
      setOpenPostForm(false);
      setOpenPatchForm(false);
    } else if (eventKey?.match("post")) {
      setOpenPostForm(true);
      setOpenGetForm(false);
      setOpenPatchForm(false);
    } else if (eventKey?.match("patch")) {
      setOpenPatchForm(true);
      setOpenGetForm(false);
      setOpenPostForm(false);
    }
  };

  const [inputs, setInputs] = useState({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleGetSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const req = assignment.GetRequest.create();
    req.UserId = Object.values(inputs)[0] as number;

    const response = await getWithProtoBodyAsURLParam(
      "http://127.0.0.1:8000/assignment/user",
      req,
      assignment.GetRequest,
      assignment.GetResponse
    );
    setShowGetResponse({ isshow: true, response: response });
    setTimeout(() => {
      setShowGetResponse({
        isshow: false,
        response: new assignment.GetResponse(),
      });
    }, 5000);
  };
  const handlePostSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const req = assignment.PostRequest.create();
    req.Firstname = Object.values(inputs)[0] as string;
    req.Lastname = Object.values(inputs)[1] as string;
    req.Email = Object.values(inputs)[2] as string;
    req.Designation = Object.values(inputs)[3] as string;
    const response = await post(
      "http://127.0.0.1:8000/assignment/user",
      req,
      assignment.PostRequest,
      assignment.PostResponse
    );
    setShowPostResponse({ isshow: true, response: response });
    setTimeout(() => {
      setShowPostResponse({
        isshow: false,
        response: new assignment.PostResponse(),
      });
    }, 5000);
  };
  const handlePatchSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const req = assignment.PatchRequest.create();
    req.UserId = Object.values(inputs)[0] as number;
    req.Email = Object.values(inputs)[1] as string;
    await patchWithProtoBodyAsURLParam(
      "http://127.0.0.1:8000/assignment/user",
      req,
      assignment.PatchRequest
    );
  };

  return (
    <div className="App">
      <div>
        <Container>
          <Card style={{ marginBottom: "20px" }}>
            <Card.Header>
              <Nav
                variant="tabs"
                defaultActiveKey={"get"}
                onSelect={handleSelect}
              >
                <Nav.Item>
                  <Nav.Link
                    eventKey={"get"}
                    aria-controls="UserId"
                    aria-expanded={openGetForm}
                  >
                    Get Request
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey={"post"}>Post Request</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey={"patch"}>Patch Request</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
              <Collapse in={openGetForm}>
                <Form
                  ref={(el: HTMLFormElement | null) =>
                    (getFormRef.current = el)
                  }
                  onSubmit={handleGetSubmit}
                >
                  <Form.Group
                    className="mb-3"
                    controlId="formUserId"
                    onChange={handleChange}
                  >
                    <FloatingLabel
                      controlId="formUserId"
                      label="UserID"
                      className="mb-3"
                      style={{ fontSize: "small" }}
                    >
                      <Form.Control
                        type="number"
                        placeholder="Enter UserId"
                        name={"userid"}
                        min={100000}
                        max={999999}
                      />
                    </FloatingLabel>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Collapse>
              <Collapse in={openPostForm}>
                <Form
                  ref={(el: HTMLFormElement | null) =>
                    (postFormRef.current = el)
                  }
                  onSubmit={handlePostSubmit}
                >
                  <Row>
                    <Col>
                      <Form.Group
                        className="mb-3"
                        controlId="formFirstName"
                        onChange={handleChange}
                      >
                        <FloatingLabel
                          controlId="formFirstName"
                          label="First Name"
                          className="mb-3"
                          style={{ fontSize: "small" }}
                        >
                          <Form.Control
                            type="text"
                            placeholder="Enter First Name"
                            name={"firstname"}
                          />
                        </FloatingLabel>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group
                        className="mb-3"
                        controlId="formLastName"
                        onChange={handleChange}
                      >
                        <FloatingLabel
                          controlId="formLastName"
                          label="Last Name"
                          className="mb-3"
                          style={{ fontSize: "small" }}
                        >
                          <Form.Control
                            type="text"
                            placeholder="Enter Last Name"
                            name={"lastname"}
                          />
                        </FloatingLabel>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group
                    className="mb-3"
                    controlId="formEmail"
                    onChange={handleChange}
                  >
                    <FloatingLabel
                      controlId="formEmail"
                      label="Email"
                      className="mb-3"
                      style={{ fontSize: "small" }}
                    >
                      <Form.Control
                        type="email"
                        placeholder="Enter Email"
                        name={"email"}
                      />
                    </FloatingLabel>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="formDesignation"
                    onChange={handleChange}
                  >
                    <FloatingLabel
                      controlId="formDesignation"
                      label="Designation"
                      className="mb-3"
                      style={{ fontSize: "small" }}
                    >
                      <Form.Control
                        type="text"
                        placeholder="Enter Designation"
                        name={"designation"}
                      />
                    </FloatingLabel>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Collapse>
              <Collapse in={openPatchForm}>
                <Form
                  ref={(el: HTMLFormElement | null) =>
                    (patchFormRef.current = el)
                  }
                  onSubmit={handlePatchSubmit}
                >
                  <Form.Group
                    className="mb-3"
                    controlId="formUserId"
                    onChange={handleChange}
                  >
                    <FloatingLabel
                      controlId="formUserId"
                      label="UserID"
                      className="mb-3"
                      style={{ fontSize: "small" }}
                    >
                      <Form.Control
                        type="number"
                        placeholder="Enter UserId"
                        name={"userid"}
                        min={100000}
                        max={999999}
                      />
                    </FloatingLabel>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="formEmail"
                    onChange={handleChange}
                  >
                    <FloatingLabel
                      controlId="formEmail"
                      label="Email"
                      className="mb-3"
                      style={{ fontSize: "small" }}
                    >
                      <Form.Control
                        type="email"
                        placeholder="Enter Email"
                        name={"email"}
                      />
                    </FloatingLabel>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Collapse>
            </Card.Body>
          </Card>

          {showGetResponse.isshow && (
            <Card>
              <Card.Header>Response</Card.Header>
              <Card.Body>
                <Card.Title>Get Response</Card.Title>
              </Card.Body>
              <ListGroup variant="flush" style={{ fontSize: "medium" }}>
                <ListGroup.Item>
                  ID: {showGetResponse.response.ID}
                </ListGroup.Item>
                <ListGroup.Item>
                  FirstName: {showGetResponse.response.Firstname}
                </ListGroup.Item>
                <ListGroup.Item>
                  LastName: {showGetResponse.response.Lastname}
                </ListGroup.Item>
                <ListGroup.Item>
                  Email: {showGetResponse.response.Email}
                </ListGroup.Item>
                <ListGroup.Item>
                  Designation: {showGetResponse.response.Designation}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          )}
          {showPostResponse.isshow && (
            <Card>
              <Card.Header>Response</Card.Header>
              <Card.Body>
                <Card.Title>Post Response</Card.Title>
              </Card.Body>
              <ListGroup variant="flush" style={{ fontSize: "medium" }}>
                <ListGroup.Item>
                  ID: {showPostResponse.response.ID}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          )}
        </Container>
      </div>
    </div>
  );
}

export default App;
