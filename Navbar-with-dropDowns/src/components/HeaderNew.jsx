import { useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
// import logo from "../Assets/hamdardlogo.png";
// import "./headerNew.css";
import { useMediaQuery } from "react-responsive";


export const HeaderNew = () => {
  // const location = useLocation();

  const [show, setShow] = useState(true);
  const [showTwo, setShowTwo] = useState(false);
  const [showThree, setShowThree] = useState(false);
  const [showFour, setShowFour] = useState(false);

  const [expanded, setExpanded] = useState(false);

  // const [path, setpath] = useState("");
  // const [Navbar,setNavbar] = useState()

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 992px)" });
  // const isTablet = useMediaQuery({ query: "(max-width: 768px)" });
  // const isMobileMd = useMediaQuery({ query: "(max-width: 475px)" });

  // useEffect(() => {
  //   setpath(location.pathname);
  // }, [location]);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     window.addEventListener("scroll", () =>
  //       setNavbar(window.pageYOffset > 5),
  //     );
  //   }

  // const handlOnMouseLeave = debounce(() => setShow(false), 1000)

  // const debouncedHandleMouseEnter = () => {
  //   setShow(true)
  //   debouncedHandleMouseEnter.cancel()
  // }

  const items = () => {
    return <div></div>;
  };

  return (
    <div>
      <Navbar expanded={expanded} bg="light" expand="lg">
        <div className={isTabletOrMobile ? "d-flex w-100 p-3" : "container"}>
          <div className="navbar_main">
            <div className="first_section">
              <Navbar.Brand href="#">
                {/* <img width={100} src={logo} alt="logo" /> */}
              </Navbar.Brand>
            </div>

            <div className="second_section">
              <Navbar.Toggle
                aria-controls="navbarScroll"
                onClick={() => setExpanded(expanded ? false : "expanded")}
              />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "max-content" }}
                  navbarScroll
                >
                  {!isTabletOrMobile ? (
                    <NavDropdown
                      title="ABOUT"
                      id="collasible-nav-dropdown"
                      show={show}
                      onMouseEnter={() => setShow(true)}
                      onMouseLeave={() => setShow(false)}
                      onClick={() => setShow(!show)}
                    >
                      <NavDropdown.Item
                        href="#action3"
                        onClick={() => setExpanded(false)}
                      >
                        About Hamdard
                      </NavDropdown.Item>

                      <NavDropdown
                        title="Our Leadership"
                        id="nested_dropdown"
                        className="NavText"
                        show={showTwo}
                        onMouseEnter={() => setShowTwo(true)}
                        onMouseLeave={() => setShowTwo(false)}
                        onClick={() => setShowTwo(!showTwo)}
                      >
                        <NavDropdown.Item href="#action3">
                          Shaheed Hakim Mohammed Said
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                          Ms Sadia Rashid
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                          Ms Fatema Munir Ahmed
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                          Dr. Arshad Saleem
                        </NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown.Item href="#action4">
                        Well Being
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Mutawallis
                      </NavDropdown.Item>
                    </NavDropdown>
                  ) : (
                    <NavDropdown title="ABOUT">
                      <NavDropdown.Item
                        href="#action3"
                        onClick={() => setExpanded(false)}
                      >
                        About Hamdard
                      </NavDropdown.Item>

                      <NavDropdown.Item
                        href="#action4"
                        onClick={() => setExpanded(false)}
                      >
                        Well Being
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action4"
                        onClick={() => setExpanded(false)}
                      >
                        Mutawallis
                      </NavDropdown.Item>
                      <NavDropdown
                        title="Our Leadership2"
                        id="nested_dropdown"
                        className="NavText"
                        tabIndex={4}
                      >
                        <NavDropdown.Item
                          href="#action3"
                          onClick={() => setExpanded(false)}
                        >
                          Shaheed Hakim Mohammed Said
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          href="#action4"
                          onClick={() => setExpanded(false)}
                        >
                          Ms Sadia Rashid
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          href="#action4"
                          onClick={() => setExpanded(false)}
                        >
                          Ms Fatema Munir Ahmed
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          href="#action4"
                          onClick={() => setExpanded(false)}
                        >
                          Dr. Arshad Saleem
                        </NavDropdown.Item>
                      </NavDropdown>
                    </NavDropdown>
                  )}

                  {/* =========================    SECOND DROP DOWN WHAT WE OFFER ============================== */}

                  {!isTabletOrMobile ? (
                    <NavDropdown
                      id="collasible-nav-dropdown"
                      title="WHAT WE OFFER"
                      show={showThree}
                      onMouseOver={() => setShowThree(true)}
                      onMouseLeave={() => setShowThree(false)}
                      onClick={() => setShowThree(!showThree)}
                    >
                      <NavDropdown.Item href="#action1123">
                        Services
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action1">
                        Products
                      </NavDropdown.Item>
                    </NavDropdown>
                  ) : (
                    <NavDropdown title="WHAT WE OFFER">
                      <NavDropdown.Item
                        href="#action1123"
                        onClick={() => setExpanded(false)}
                      >
                        Services
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action1"
                        onClick={() => setExpanded(false)}
                      >
                        Products
                      </NavDropdown.Item>
                    </NavDropdown>
                  )}

                  <Nav.Link href="#action1" onClick={() => setExpanded(false)}>
                    HAMDARD FOUNDATION
                  </Nav.Link>
                  <Nav.Link href="#action2" onClick={() => setExpanded(false)}>
                    OUR RESPONSIBILITY
                  </Nav.Link>
                  <Nav.Link href="#action2" onClick={() => setExpanded(false)}>
                    PUBLICATIONS & EVENTS
                  </Nav.Link>
                  <Nav.Link href="#action2" onClick={() => setExpanded(false)}>
                    GLOBAL PRESENCE
                  </Nav.Link>

                  {/* =================== Last dropdown work with us  =============================================== */}

                  {!isTabletOrMobile ? (
                    <NavDropdown
                      id="collasible-nav-dropdown"
                      title="WORK WITH US"
                      show={showFour}
                      onMouseOver={() => setShowFour(true)}
                      onMouseLeave={() => setShowFour(false)}
                      onClick={() => setShowFour(!showFour)}
                    >
                      <NavDropdown.Item href="#action1">
                        Life at Hamdard
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action1">
                        Opportunities & Openings
                      </NavDropdown.Item>
                    </NavDropdown>
                  ) : (
                    <NavDropdown title="WORK WITH US">
                      <NavDropdown.Item
                        href="#action1"
                        onClick={() => setExpanded(false)}
                      >
                        Life at Hamdard
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action1"
                        onClick={() => setExpanded(false)}
                      >
                        Opportunities & Openings
                      </NavDropdown.Item>
                    </NavDropdown>
                  )}
                </Nav>
              </Navbar.Collapse>
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
};
