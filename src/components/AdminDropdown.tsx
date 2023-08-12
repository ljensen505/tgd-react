import { User, useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { NavDropdown } from "react-bootstrap";

interface DropdownProps {
  user: User | undefined;
  isAuthenticated: boolean;
}

const AdminDropdown: React.FC<DropdownProps> = ({ user, isAuthenticated }) => {
  const { logout, loginWithRedirect, getAccessTokenSilently } = useAuth0();
  const [jwt, setJWT] = useState<string>("");

  useEffect(() => {
    const getToken = async () => {
      try {
        const token = await getAccessTokenSilently();
        setJWT(token);
      } catch (error) {
        console.error(error);
      }
    };

    if (isAuthenticated) {
      getToken();
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  if (!isAuthenticated || !user) {
    return (
      <NavDropdown title="Admin">
        <NavDropdown.Item onClick={() => loginWithRedirect()}>
          Login <i className="fa-solid fa-right-from-bracket"></i>
        </NavDropdown.Item>
      </NavDropdown>
    );
  }

  // else the user is authenticated -> present them with account info
  return (
    <NavDropdown title="Account">
      <NavDropdown.ItemText>Welcome {user.name}</NavDropdown.ItemText>
      <NavDropdown.ItemText>{user.email}</NavDropdown.ItemText>
      <NavDropdown.Item
        onClick={() => {
          navigator.clipboard.writeText(jwt);
        }}
      >
        Token <i className="fa-solid fa-clone"></i>
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item
        onClick={() =>
          logout({
            logoutParams: { returnTo: window.location.origin },
          })
        }
      >
        Logout <i className="fa-solid fa-right-from-bracket "></i>
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default AdminDropdown;
