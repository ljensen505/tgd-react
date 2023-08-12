import { NavDropdown } from "react-bootstrap";
import ContactModal from "./ContactModal";
import { useState } from "react";

const ContactDropdown: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };
  return (
    <NavDropdown title="Contact">
      <NavDropdown.Item onClick={handleShowModal}>Contact Us</NavDropdown.Item>
      <NavDropdown.Item>Newsletter</NavDropdown.Item>
      <ContactModal showModal={showModal} setShowModal={setShowModal} />
    </NavDropdown>
  );
};

export default ContactDropdown;
