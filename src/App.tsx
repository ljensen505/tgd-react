import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Title from "./components/Title";
import MusicianBios from "./components/Bios";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import CarouselComponent from "./components/Carousel";
import Footer from "./components/Footer";
import Events from "./components/Events";
import { useAuth0 } from "@auth0/auth0-react";

const App: React.FC = () => {
  const [groupTitle, setTitle] = useState("");
  const [groupBio, setBio] = useState("");
  const [errState, setErr] = useState(false);

  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/group`)
      .then((res) => {
        setErr(false);
        setTitle(res.data.name);
        setBio(res.data.bio);
      })
      .catch((e) => {
        setErr(true);
        console.error(e);
      });
  }, []);

  if (errState) {
    return (
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal.Dialog>
          <Modal.Header className="modal-error">
            <Modal.Title>Axios Error</Modal.Title>
          </Modal.Header>

          <Modal.Body className="modal-error">
            <p>Could not fetch data from API</p>
            <hr />
            <p>Contact Lucas and tell him he messed up.</p>
          </Modal.Body>
        </Modal.Dialog>
      </div>
    );
  }

  return (
    <>
      <NavBar user={user} isAuthenticated={isAuthenticated} />
      <CarouselComponent />
      <Title name={groupTitle} bio={groupBio} />
      <MusicianBios />
      <Events />
      <Footer />
    </>
  );
};

export default App;
