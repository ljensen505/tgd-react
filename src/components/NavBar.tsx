import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";
import ContactModal from "./Modals/ContactModal";
import MailChimpModal from "./Modals/MailChimpModal";
import { useState } from "react";
import { User } from "@auth0/auth0-react";
import AdminDropdown from "./AdminDropdown";

interface NavBarProps {
  user: User | undefined;
  isAuthenticated: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ user, isAuthenticated }) => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showMCModal, setShowMCModal] = useState(false);

  const handleShowContactModal = () => {
    setShowContactModal(true);
  };

  const handleShowNewsletterModal = () => {
    setShowMCModal(true);
  };

  return (
    <Navbar expand="lg" id="home">
      <Container>
        <Navbar.Brand href="#home">TGD</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#musicians">Musicians</Nav.Link>
            <Nav.Link onClick={handleShowContactModal}>Contact</Nav.Link>
            <Nav.Link onClick={handleShowNewsletterModal}>Newsletter</Nav.Link>
            <AdminDropdown
              user={user}
              isAuthenticated={isAuthenticated}
            ></AdminDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <ContactModal
        showModal={showContactModal}
        setShowModal={setShowContactModal}
      />
      <MailChimpModal
        showModal={showMCModal}
        setShowModal={setShowMCModal}
      ></MailChimpModal>
    </Navbar>
  );
};

export default NavBar;
