import { useState } from "react";
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../Assets/logo.png";
import "../styles/Header.css";

import { useMediaQuery } from "react-responsive";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";

const Header = () => {
  const [show, setShow] = useState(false);
  const [showTwo, setShowTwo] = useState(false);

  //   const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1200px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });
  const isMobileMd = useMediaQuery({ query: "(max-width: 475px)" });
  //   const isMobileSm = useMediaQuery({ query: '(max-width: 320px)' })

  return (
    <Navbar bg="dark" className="Navbar" expand="xl">
      <Container>
        <div className="navbar_main">
          <div className="header_sec_1">
            <Navbar.Brand href="#">
              <img width={35} src={logo} alt="logo" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll">
              <GiHamburgerMenu style={{ color: "white", fontSize: "1.3rem" }} />
            </Navbar.Toggle>
          </div>

          <div className="header_sec_2">
            <div className="navbar_collapse">
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0 "
                  style={{
                    maxHeight: isTabletOrMobile ? "max-content" : "150px",
                  }}
                >
                  {!isTabletOrMobile ? (
                    <NavDropdown
                      title="Home"
                      id="navbarScrollingDropdown"
                      show={show}
                      onMouseEnter={() => setShow(true)}
                      onMouseLeave={() => setShow(false)}
                    >
                      <NavDropdown.Item href="#action3">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>

                      <NavDropdown
                        className="NavText"
                        title="scroll"
                        id="nested_dropdown"
                        show={showTwo}
                        onMouseEnter={() => setShowTwo(true)}
                        onMouseLeave={() => setShowTwo(false)}
                      >
                        <NavDropdown.Item href="#action4">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                          Another action
                        </NavDropdown.Item>
                      </NavDropdown>
                    </NavDropdown>
                  ) : (
                    <NavDropdown title="Home2" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="#action3">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>

                      <NavDropdown
                        className="NavText"
                        title="scroll"
                        id="nested_dropdown"
                      >
                        <NavDropdown.Item href="#action4">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                          Another action
                        </NavDropdown.Item>
                      </NavDropdown>
                    </NavDropdown>
                  )}

                  <Nav.Link href="#action2">About</Nav.Link>
                  <Nav.Link href="#action2">Services</Nav.Link>

                  <NavDropdown title="Pages" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="Blog Pages" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </div>

            <div className="">
              <span>
                {" "}
                <FaSearch
                  className={isMobileMd ? "header_icon_sm" : "header_icons"}
                />
              </span>
              {isTabletOrMobile ? (
                ""
              ) : (
                <>
                  <span>
                    {" "}
                    <FaFacebookF className="header_icons" />
                  </span>
                  <span>
                    {" "}
                    <BsTwitter className="header_icons" />
                  </span>
                </>
              )}
            </div>

            <div>
              <button
                className={
                  isTablet ? "nav_btn_Without_text" : "nav_btn_With_text"
                }
              >
                <IoIosSend fontSize="1.4rem" />
                {isTablet ? "" : "Contact Us"}
              </button>
            </div>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
