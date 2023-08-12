import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { Button, Form, Modal } from "react-bootstrap";

interface FormData {
  FNAME: string;
  LNAME: string;
  EMAIL: string;
}

interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const MailChimpModal: React.FC<ModalProps> = ({ showModal, setShowModal }) => {
  const [formData, setFormData] = useState<FormData>({
    FNAME: "",
    LNAME: "",
    EMAIL: "",
  });

  const handleClose = () => {
    setFormData({ FNAME: "", LNAME: "", EMAIL: "" });
    setShowModal(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/newsletter`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          },
        }
      );

      console.log(response);

      // Clear form data after successful submission
      setFormData({
        FNAME: "",
        LNAME: "",
        EMAIL: "",
      });
      handleClose();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Newsletter Signup</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              id="firstName"
              name="FNAME"
              value={formData.FNAME}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              id="lastName"
              name="LNAME"
              value={formData.LNAME}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Email <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="email"
              id="email"
              name="EMAIL"
              value={formData.EMAIL}
              onChange={handleChange}
              required
            ></Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default MailChimpModal;
