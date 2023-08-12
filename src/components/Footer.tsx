import { Container } from "react-bootstrap";

const Footer: React.FC = () => {
  return (
    <footer className="text-center">
      <Container>
        <a
          className="link-dark me-4"
          target="_blank"
          href="https://www.instagram.com/thegrapefruitsduo/"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          className="link-dark me-4"
          target="_blank"
          href="https://www.facebook.com/thegrapefruitsduo"
        >
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a
          className="link-dark me-4"
          target="_blank"
          href="https://www.youtube.com/channel/UCzc-ds_awbx3RpGmLWEetKw"
        >
          <i className="fa-brands fa-youtube"></i>
        </a>
        <a
          className="link-dark me-4"
          target="_blank"
          href="https://github.com/ljensen505"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </Container>
      <div className="text-center p-3">
        {"© 2023 Copyright: "}
        <a className="text-dark" href="/">
          {"The Grapefruits Duo"}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
