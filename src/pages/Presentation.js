import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faExternalLinkAlt, faCalendarAlt, faCodeBranch, faShoppingCart, faChartLine, faFolder, faMapMarkedAlt, faPager, faFileCode, faCheck, faBalanceScale, faDownload } from "@fortawesome/free-solid-svg-icons";
import { faBootstrap, faJs, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Card, Image, Button, Container, ListGroup, Tooltip, OverlayTrigger, Form, Navbar, Nav, Badge } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Code from "../components/CodeEditor";
import GitHubButton from 'react-github-btn';

import { Routes } from "../routes";
import ThemesbergLogoIcon from "../assets/img/themesberg.svg";
import ThemesbergLogo from "../assets/img/themesberg-logo.svg";
import MockupPresentation from "../assets/img/mockup-presentation.png";
import ReactHero from "../assets/img/technologies/react-hero-logo.svg";
import MapboxImg from "../assets/img/mockup-map-presentation.png";
import CalendarImg from "../assets/img/mockup-calendar-presentation.png";
import ReactMockupImg from "../assets/img/react-mockup.png";
import BS5IllustrationsImg from "../assets/img/illustrations/bs5-illustrations.svg";
import BS5Logo from "../assets/img/technologies/bootstrap-5-logo.svg";
import ReactLogo from "../assets/img/technologies/react-logo.svg";

import pages from "../data/pages";
import features from "../data/features";

export default () => {
  const PagePreview = (props) => {
    const { name, image, link } = props;

    return (
      <Col xs={6} className="mb-5">
        <Card.Link as={Link} to={link} className="page-preview page-preview-lg scale-up-hover-2">
          <Image src={image} className="shadow-lg rounded scale" alt="Dashboard page preview" />

          <div className="text-center show-on-hover">
            <h6 className="m-0 text-center text-white">
              {name} <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-2" />
            </h6>
          </div>
        </Card.Link>
      </Col>
    );
  };

  const Feature = (props) => {
    const { title, description, icon } = props;

    return (
      <Col xs={12} sm={6} lg={3}>
        <Card className="bg-white shadow-soft text-primary rounded mb-4">
          <div className="px-3 px-lg-4 py-5 text-center">
            <span className="icon icon-lg mb-4">
              <FontAwesomeIcon icon={icon} />
            </span>
            <h5 className="fw-bold text-primary">{title}</h5>
            <p>{description}</p>
          </div>
        </Card>
      </Col>
    );
  };

  const FolderItem = (props) => {
    const { name, icon, tooltip, iconColor } = props;
    const color = iconColor ? `text-${iconColor}` : "";

    return (
      <OverlayTrigger
        trigger={['hover', 'focus']}
        placement="left"
        overlay={<Tooltip>{tooltip}</Tooltip>}
      >
        <li data-toggle="tooltip" data-placement="left" title="Main folder that you will be working with">
          <FontAwesomeIcon icon={icon ? icon : faFolder} className={`${color} me-2`} /> {name}
        </li>
      </OverlayTrigger>
    );
  };

  return (
    <>
      <Navbar variant="dark" expand="lg" bg="dark" className="navbar-transparent navbar-theme-primary sticky-top">
        <Container className="position-relative justify-content-between px-3">
          <Navbar.Brand as={HashLink} to="#home" className="me-lg-3 d-flex align-items-center">
            <Image src={ReactHero} />
            <span className="ms-2 brand-text">Volt React</span>
          </Navbar.Brand>

          <div className="d-flex align-items-center">
            <Navbar.Collapse id="navbar-default-primary">
              <Nav className="navbar-nav-hover align-items-lg-center">
                <Nav.Link as={HashLink} to="#features">Features</Nav.Link>
                <Nav.Link as={HashLink} to="#pages">Pages</Nav.Link>
                <Nav.Link as={HashLink} to="#folder" className="d-sm-none d-xl-inline">Folder Structure</Nav.Link>
                <Nav.Link as={HashLink} to="#getting-started">Getting Started</Nav.Link>
                <Nav.Link as={HashLink} to="#upgrade-to-pro">Upgrade to Pro</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Button as={Link} to={Routes.DashboardOverview.path} variant="secondary" className="ms-3" target="_blank">Live Demo <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-1" /></Button>
            <Button as={HashLink} to="#pricing" variant="outline-white" className="ms-3 d-none d-sm-inline"><FontAwesomeIcon icon={faDownload} className="me-1" /> Download</Button>
          </div>
        </Container>
      </Navbar>
      <section className="section-header pt-lg-7 pb-9 pb-lg-12 bg-primary text-white" id="home">
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              <h1 className="fw-bolder text-secondary">Volt React Dashboard</h1>
              <p className="text-muted fw-light mb-5 h5 px-lg-12">Open source powered by React.js and Bootstrap 5</p>
              <div className="d-flex justify-content-center align-items-center mb-6">
                <Button variant="secondary" as={Link} to={Routes.DashboardOverview.path} className="text-dark me-3">
                  <FontAwesomeIcon icon={faChartLine} className="d-none d-sm-inline me-2" /> Dashboard Demo
                </Button>
                <GitHubButton href="https://github.com/themesberg/volt-react-dashboard" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star themesberg/volt-react-dashboard on GitHub">Star</GitHubButton>
              </div>
              <div className="d-flex justify-content-center flex-column mb-6">
                <Card.Link href="https://themesberg.com" target="_blank">
                  <Image src={ThemesbergLogoIcon} height={25} width={25} className="d-block mx-auto mb-3" alt="Themesberg Logo" />
                  <span className="text-muted font-small">
                    A Themesberg production
                  </span>
                </Card.Link>
              </div>
            </Col>
          </Row>
          <figure className="position-absolute bottom-0 left-0 w-100 d-none d-md-block mb-n2">
            <svg className="fill-soft" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 185.4">
              <path d="M3000,0v185.4H0V0c496.4,115.6,996.4,173.4,1500,173.4S2503.6,115.6,3000,0z" />
            </svg>
          </figure>
        </Container>
      </section>
      <div className="section pt-0">
        <Container className="mt-n10 mt-lg-n12 z-2">
          <Row className="justify-content-center">
            <Col xs={12}>
              <Image src={MockupPresentation} alt="Mockup presentation" />
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mt-lg-6">
            <Col xs={6} md={3} className="text-center mb-4">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <FontAwesomeIcon icon={faPager} className="text-secondary" />
              </div>
              <h3 className="fw-bolder">10</h3>
              <p className="text-gray">Example Pages</p>
            </Col>
            <Col xs={6} md={3} className="text-center mb-4">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <FontAwesomeIcon icon={faReact} className="text-secondary" />
              </div>
              <h3 className="fw-bolder">200+</h3>
              <p className="text-gray">React Components</p>
            </Col>
            <Col xs={6} md={3} className="text-center">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <FontAwesomeIcon icon={faSass} className="text-secondary" />
              </div>
              <h3 className="fw-bolder">Workflow</h3>
              <p className="text-gray">Sass & react-app</p>
            </Col>
            <Col xs={6} md={3} className="text-center">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <FontAwesomeIcon color="secondary" icon={faBootstrap} className="text-secondary" />
              </div>
              <h3 className="fw-bolder">Bootstrap 5</h3>
              <p className="text-gray">CSS Framework</p>
            </Col>
          </Row>
        </Container>
      </div>
      <section className="section section-md bg-soft pt-lg-3" id="features">
        <Container>
          <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
            <Col lg={5} className="order-lg-2 mb-5 mb-lg-0">
              <h2>Powered by React.js</h2>
              <p className="mb-3 lead fw-bold">The most popular front-end library in the world</p>
              <p className="mb-4">Volt React is an admin dashboard template that is built using React.js components using react hooks and a data-driven structure that can kick-start your app in no time.</p>
              <Button as={Link} to={Routes.DashboardOverview.path} variant="secondary" target="_blank">Live Demo <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-1" /></Button>
              <Button as={HashLink} to="#pricing" variant="outline-primary" className="ms-3"><FontAwesomeIcon icon={faShoppingCart} className="me-1" /> Download</Button>
            </Col>
            <Col lg={6} className="order-lg-1">
              <Image src={ReactMockupImg} alt="Calendar Preview" />
            </Col>
          </Row>
          <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
            <Col lg={5}>
              <h2>React.js Components</h2>
              <p className="mb-3 lead fw-bold">200+ premium UI elements based on Bootstrap 5</p>
              <p className="mb-4">We've built over 200 React.js powered components to be used throughout your application saving you time kickstarting your project.</p>
              <p className="mb-4">Check out the components and use our live React.js component editor to try the code.</p>
              <Button as={Link} to={Routes.Forms.path} variant="secondary" className="mb-5 mb-lg-0" target="_blank"><FontAwesomeIcon icon={faReact} className="me-1" /> Components examples</Button>
            </Col>
            <Col lg={6} className="rounded shadow pt-3">
              <Code scope={{ Form, Button }} code={`<Form>
  <Form.Group id="frameworks" className="mb-3">
    <Form.Label>Example select</Form.Label>
    <Form.Select>
      <option defaultValue>Open this select menu</option>
      <option>One</option>
      <option>Two</option>
      <option>Three</option>
    </Form.Select>
  </Form.Group>
  <Button variant="primary" className="m-1">Primary</Button>
</Form>`} language="jsx" />
            </Col>
          </Row>
          <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
            <Col lg={5} className="order-lg-2 mb-5 mb-lg-0">
              <h2 className="d-flex align-items-center">Mapbox <Badge pill bg='secondary' text="dark" className="badge-md ms-3 mb-0 fs-6">Pro</Badge></h2>
              <p className="mb-3 lead fw-bold">Markers and cards integration with Leaflet.js</p>
              <p className="mb-4">You can use this map to add markers with custom cards and show them on a map using our custom MapBox integration with Leaflet.js</p>
              <Button href="https://demo.themesberg.com/volt-pro-react/#/map" className="me-3" variant="secondary" target="_blank"><FontAwesomeIcon icon={faMapMarkedAlt} className="me-2" /> Demo Map</Button>
              <Button href="https://demo.themesberg.com/volt-pro-react/#/plugins/map" variant="outline-primary" target="_blank"><FontAwesomeIcon icon={faBook} className="me-2" /> Guide</Button>
            </Col>
            <Col lg={6} className="order-lg-1">
              <Image src={MapboxImg} alt="MapBox Leaflet.js Custom Integration Mockup" />
            </Col>
          </Row>
          <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
            <Col lg={5}>
              <h2 className="d-flex align-items-center">Calendar <Badge pill bg='secondary' text="dark" className="badge-md ms-3 mb-0 fs-6">Pro</Badge></h2>
              <p className="mb-3 lead fw-bold">
                Advanced FullCalendar.js integration
              </p>
              <p className="mb-4">
                We created a fully editable calendar where you can add, edit and delete events for your admin dashboard.
              </p>
              <Button href="https://demo.themesberg.com/volt-pro-react/#/calendar" className="me-3" variant="secondary" target="_blank"><FontAwesomeIcon icon={faCalendarAlt} className="me-2" /> Demo Calendar</Button>
              <Button href="https://demo.themesberg.com/volt-pro-react/#/plugins/calendar" variant="outline-primary" target="_blank"><FontAwesomeIcon icon={faBook} className="me-2" /> Guide</Button>
            </Col>
            <Col lg={6}>
              <Image src={CalendarImg} alt="Calendar Preview" />
            </Col>
          </Row>
          <Row className="justify-content-between align-items-center">
            <Col lg={5} className="order-lg-2 mb-5 mb-lg-0">
              <h2>Bootstrap 5</h2>
              <p className="mb-3 lead fw-bold">
                Latest version of Bootstrap 5
              </p>
              <p className="mb-4">
                Volt React is built using the latest version of Bootstrap 5 and we only used Vanilla Javascript for everything including the plugins
              </p>
            </Col>
            <Col lg={6} className="col-lg-6 order-lg-1">
              <Image src={BS5IllustrationsImg} alt="Front pages overview" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section section-sm pt-0" id="pages">
        <Container>
          <Row className="justify-content-center mb-5 mb-lg-6">
            <Col xs={12} className="text-center">
              <h2 className="px-lg-5">
                10 hand-crafted pages
              </h2>
              <p className="lead px-lg-10">
                Every page from Volt has been carefully built to provide all the necessary pages your startup will require
              </p>
            </Col>
          </Row>
          <Row className="mb-5">
            {pages.map(page => <PagePreview key={`page-${page.id}`} {...page} />)}
          </Row>
        </Container>
      </section>
      <section className="section section-lg bg-primary text-white">
        <Container>
          <Row className="justify-content-center mb-5 mb-lg-6">
            <Col xs={12} className="text-center">
              <h2 className="px-lg-5">Awesome Features</h2>
              <p className="lead px-lg-8">You get all React.js components fully customized. Besides, you receive numerous plugins out of the box and ready to use.</p>
            </Col>
          </Row>
          <Row>
            {features.map(feature => <Feature key={`features-${feature.id}`} {...feature} />)}
          </Row>
        </Container>
      </section>
      <section className="section section-lg line-bottom-soft" id="folder">
        <Container>
          <Row className="justify-content-center mb-5 mb-lg-6">
            <Col xs={12} className="text-center">
              <h2 className="px-lg-5">What's inside?</h2>
              <p className="lead px-lg-8">We have carefully crafted the perfect folder structure to ensure that finding the files you're looking for are easily reachable and well organized.</p>
            </Col>
          </Row>
          <Row className="d-flex align-items-center">
            <Col xs={12} lg={6} className="mb-4">
              <div className="d-none d-lg-block mt-5">
                <h4>The perfect folder structure for your project</h4>
                <p className="lead mb-4">The folder structure is based on the popular <code>create-react-app</code> repository using Sass source files for CSS preprocessing.</p>
                <Button as={Link} variant="secondary" size="md" to={Routes.DocsFolderStructure.path} target="_blank" className="text-dark">
                  <FontAwesomeIcon icon={faCodeBranch} className="me-2" /> Folder Structure
                </Button>
              </div>
            </Col>
            <Col xs={12} lg={6} className="order-lg-first d-flex justify-content-center">
              <ListGroup className="d-block fmw-100 list-style-none folder-structure">
                <FolderItem name="src" tooltip="Main folder that you will be working with" />

                <ListGroup className="list-style-none ps-4">
                  <FolderItem name="assets" tooltip="CSS, Images, Fonts and Javascript" />
                  <FolderItem name="components" tooltip="Custom React.js components on top of react-bootstrap" />
                  <FolderItem name="data" tooltip="Data source for the dashboard and components" />
                  <FolderItem name="pages" tooltip="React.js admin dashboard pages" />
                  <FolderItem name="scss" tooltip="Sass source files" />
                  <FolderItem name="index.js" tooltip="Main React.js file that wraps the project" icon={faJs} iconColor="secondary" />
                  <FolderItem name="routes.js" tooltip="The file where the routes are registered at" icon={faJs} iconColor="secondary" />
                </ListGroup>

                <FolderItem name="build" tooltip="The production build of the project" />
                <FolderItem name="node_modules" tooltip="Project dependencies from package.json" />

                <FolderItem name="package.json" tooltip="Project details and dependencies." icon={faFileCode} iconColor="tertiary" />
                <FolderItem name="README.md" tooltip="No project can miss a README :)" icon={faFileCode} iconColor="tertiary" />
                <FolderItem name=".gitignore" tooltip="This file ensures that generated files and folder are ignored by Git. (eg. node_modules)" icon={faFileCode} iconColor="tertiary" />
              </ListGroup>
            </Col>
            <Col xs={12} className="mt-5 d-lg-none">
              <h5>The perfect folder structure for your project</h5>
              <p className="lead mb-4">The folder structure is based on the popular <code>create-react-app</code> repository using Sass source files for CSS preprocessing.</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section section-lg bg-primary" id="getting-started">
        <Container>
          <Row className="justify-content-center text-center text-white mb-5">
            <Col xs={12}>
              <h2 className="fw-light mb-3">
                Less <span className="fw-bold">work</span>, more <span className="fw-bold">flow</span>.
              </h2>
              <p className="lead px-lg-8">
                Boost productivity with BrowserSync. Sass changes are reflected instantly and pages scroll and refresh on devices as you work.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={10} xl={9}>
              <div className="position-relative">
                <div className="rounded bg-white p-4 text-dark mb-2">
                  <div className="mb-3">
                    <div className="fw-bold">&gt; $ yarn install <span className="text-gray-600">(or npm install)</span></div>
                    <div className="text-gray">Everything’s installed!</div>
                  </div>
                  <div className="mb-3">
                    <div className="fw-bold">&gt; $ yarn start <span className="text-gray-600">(or npm run start)</span></div>
                    <div className="text-gray">SCSS watching</div>
                    <div className="text-gray">Opening localhost:3000</div>
                  </div>
                  <div>
                    <div className="fw-bold">&gt; $ that's it?</div>
                    <div className="text-gray">It's that simple!</div>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-white text-center mb-0">
                Looks unfamiliar? Don’t worry! Our <Link to={Routes.DocsQuickStart.path} className="text-white text-underline fw-bold" target="_blank">documentation</Link> has got you covered.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section bg-white">
        <Container id="pricing">
          <Row className="justify-content-center mb-6">
            <Col xs={12} lg={9} className="text-center">
              <h2 className="display-3 fw-light mb-4">Choose the right plan for your business</h2>
              <p className="lead">You have at least <span className="fw-bold text-primary">Free 6 Months of Updates</span> and <span className="fw-bold text-primary">Premium Support</span> on each package. You also have 30 days to request a refund if you're not happy with your purchase.</p>
            </Col>
          </Row>
          <Row className="mb-4 mb-lg-5">
            <Col xs={12} lg={6} xl={4} className="mb-5">
              <Card border="light" className="rounded-md mb-3 px-2">
                <Card.Header className="bg-white border-light p-4">
                  <div className="d-flex mb-3"> <span className="h5 mb-0">$</span> <span className="price display-2 mb-0 text-primary">89</span> </div>
                  <h4 className="mb-3 text-black">Freelancer</h4>
                  <p className="fw-normal font-small mb-0">
                    Great for personal use and for your side projects.
                    </p>
                </Card.Header>
                <Card.Body className="py-4">
                  <ListGroup className="simple-list">
                    <ListGroup.Item className="fw-normal border-0">
                      <FontAwesomeIcon icon={faCheck} className="text-success me-2" /> Full documentation
                      </ListGroup.Item>
                    <ListGroup.Item className="fw-normal border-0">
                      <FontAwesomeIcon icon={faCheck} className="text-success me-2" /> Domains: <strong>1</strong>
                    </ListGroup.Item>
                    <ListGroup.Item className="fw-normal border-0">
                      <FontAwesomeIcon icon={faCheck} className="text-success me-2" /> Team size: <strong>1 developer</strong>
                    </ListGroup.Item>
                    <ListGroup.Item className="fw-normal border-0">
                      <FontAwesomeIcon icon={faCheck} className="text-success me-2" /> Premium support: <strong>6 months</strong>
                    </ListGroup.Item>
                    <ListGroup.Item className="fw-normal border-0">
                      <FontAwesomeIcon icon={faCheck} className="text-success me-2" /> Free updates: <strong>6 months</strong>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
                <Card.Footer className="bg-white border-0 pt-0 px-4 pb-4">
                  <Card.Link as={Button} variant="secondary" href="https://themesberg.com/product/dashboard/volt-pro-react#pricing" target="_blank" className="w-100 text-dark rounded animate-up-2">
                    Buy now <span className="icon icon-xs ms-3" />
                  </Card.Link>
                </Card.Footer>
              </Card>
              <OverlayTrigger
                placement="bottom"
                trigger={['hover', 'focus']}
                overlay={<Tooltip>Something unclear? Click to read the full Freelancer License.</Tooltip>}
              >
                <Card.Link href="https://themesberg.com/licensing#freelancer" target="_blank" className="font-small text-gray text-center d-block mt-4">
                  <FontAwesomeIcon icon={faBalanceScale} className="me-2" /> Freelancer License
                  </Card.Link>
              </OverlayTrigger>
            </Col>
            <Col xs={12} lg={6} xl={4} className="mb-5">
              <Card border="light" className="rounded-md mb-3 px-2">
                <Card.Header className="bg-white border-light p-4">
                  <div className="d-flex mb-3"> <span className="h5 mb-0">$</span> <span className="price display-2 mb-0 text-primary">189</span> </div>
                  <h4 className="mb-3 text-black">Company</h4>
                  <p className="fw-normal font-small mb-0">
                    Relevant for multiple users and extended support.
                    </p>
                </Card.Header>
                <Card.Body className="py-4">
                  <ListGroup className="list-group simple-list">
                    <ListGroup.Item className="fw-normal border-0">
                      <FontAwesomeIcon icon={faCheck} className="text-success me-2" /> Full documentation
                      </ListGroup.Item>
                    <ListGroup.Item className="fw-normal border-0">
                      <FontAwesomeIcon icon={faCheck} className="text-success me-2" /> Domains: <strong>Unlimited</strong>
                    </ListGroup.Item>
                    <ListGroup.Item className="fw-normal border-0">
                      <FontAwesomeIcon icon={faCheck} className="text-success me-2" /> Team size: <strong>1-5 developers</strong>
                    </ListGroup.Item>
                    <ListGroup.Item className="fw-normal border-0">
                      <FontAwesomeIcon icon={faCheck} className="text-success me-2" /> Premium support: <strong>12 months</strong>
                    </ListGroup.Item>
                    <ListGroup.Item className="fw-normal border-0">
                      <FontAwesomeIcon icon={faCheck} className="text-success me-2" /> Free updates: <strong>12 months</strong>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
                <Card.Footer className="bg-white border-0 pt-0 px-4 pb-4">
                  <Card.Link as={Button} variant="primary" href="https://themesberg.com/product/dashboard/volt-pro-react#pricing" target="_blank" className="w-100 rounded animate-up-2">
                    Buy now <span className="icon icon-xs ms-3" />
                  </Card.Link>
                </Card.Footer>
              </Card>
              <OverlayTrigger
                placement="bottom"
                trigger={['hover', 'focus']}
                overlay={<Tooltip>Something unclear? Click to read the full Company License.</Tooltip>}
              >
                <Card.Link href="https://themesberg.com/licensing#company" target="_blank" className="font-small text-gray text-center d-block mt-4">
                  <FontAwesomeIcon icon={faBalanceScale} className="me-2" /> Company License
                  </Card.Link>
              </OverlayTrigger>
            </Col>
            <Col xs={12} lg={6} xl={4} className="mb-5">
              <Card border="light" className="rounded-md mb-3 px-2">
                <Card.Header className="card-header bg-white border-light p-4">
                  <div className="d-flex mb-3"> <span className="h5 mb-0">$</span> <span className="price display-2 mb-0 text-primary">799</span></div>
                  <h3 className="h4 mb-3 text-black">Enterprise</h3>
                  <p className="fw-normal font-small mb-0">
                    Best for large scale uses and extended redistribution rights.
                    </p>
                </Card.Header>
                <Card.Body className="py-4">
                  <ListGroup className="simple-list">
                    <ListGroup.Item className="fw-normal border-0">
                      <FontAwesomeIcon icon={faCheck} className="text-success me-2" /> Full documentation
                        </ListGroup.Item>
                    <ListGroup.Item className="fw-normal border-0">
                      <FontAwesomeIcon icon={faCheck} className="text-success me-2" /> Domains: <strong>Unlimited</strong>
                    </ListGroup.Item>
                    <ListGroup.Item className="fw-normal border-0">
                      <FontAwesomeIcon icon={faCheck} className="text-success me-2" /> Team size: <strong>5-15</strong>
                    </ListGroup.Item>
                    <ListGroup.Item className="fw-normal border-0">
                      <FontAwesomeIcon icon={faCheck} className="text-success me-2" /> Premium support: <strong>24 months</strong>
                    </ListGroup.Item>
                    <ListGroup.Item className="fw-normal border-0">
                      <FontAwesomeIcon icon={faCheck} className="text-success me-2" /> Free updates: <strong>12 months</strong>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
                <Card.Footer className="bg-white border-0 pt-0 px-4 pb-4">
                  <Card.Link as={Button} variant="primary" href="https://themesberg.com/product/dashboard/volt-pro-react#pricing" target="_blank" className="w-100 rounded animate-up-2">
                    Buy now <span className="icon icon-xs ms-3" />
                  </Card.Link>
                </Card.Footer>
              </Card>
              <OverlayTrigger
                placement="bottom"
                trigger={['hover', 'focus']}
                overlay={<Tooltip>Something unclear? Click to read the full Enterprise License.</Tooltip>}
              >
                <Card.Link href="https://themesberg.com/licensing#enterprise" target="_blank" className="font-small text-gray text-center d-block mt-4">
                  <FontAwesomeIcon icon={faBalanceScale} className="me-2" /> Enterprise License
                  </Card.Link>
              </OverlayTrigger>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="text-center">
              <h2 className="h5 text-gray fw-normal mb-4">Available in the following technologies:</h2>
              <div>
                <Card.Link href="https://themesberg.com/product/admin-dashboard/volt-bootstrap-5-dashboard" target="_blank" className="me-3">
                  <OverlayTrigger placement="top" trigger={['hover', 'focus']} overlay={<Tooltip>Bootstrap 5 · The most popular HTML, CSS, and JS library in the world.</Tooltip>}>
                    <Image src={BS5Logo} className="image image-sm" />
                  </OverlayTrigger>
                </Card.Link>

                <Card.Link href="https://themesberg.com/product/dashboard/volt-react" target="_blank" className="me-3">
                  <OverlayTrigger placement="top" trigger={['hover', 'focus']} overlay={<Tooltip>React · A JavaScript library for building user interfaces.</Tooltip>}>
                    <Image src={ReactLogo} className="image image-sm" />
                  </OverlayTrigger>
                </Card.Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <footer className="footer py-6 bg-dark text-white">
        <Container>
          <Row>
            <Col md={4}>
              <Navbar.Brand as={HashLink} to="#home" className="me-lg-3 mb-3 d-flex align-items-center">
                <Image src={ReactHero} />
                <span className="ms-2 brand-text">Volt React</span>
              </Navbar.Brand>
              <p>Volt React is a free and open source admin dashboard template powered by React.js and Bootstrap 5.</p>
            </Col>
            <Col xs={6} md={2} className="mb-5 mb-lg-0">
              <span className="h5">Themesberg</span>
              <ul className="links-vertical mt-2">
                <li><Card.Link target="_blank" href="https://themesberg.com/blog">Blog</Card.Link></li>
                <li><Card.Link target="_blank" href="https://themesberg.com/products">Products</Card.Link></li>
                <li><Card.Link target="_blank" href="https://themesberg.com/about">About Us</Card.Link></li>
                <li><Card.Link target="_blank" href="https://themesberg.com/contact">Contact Us</Card.Link></li>
              </ul>
            </Col>
            <Col xs={6} md={2} className="mb-5 mb-lg-0">
              <span className="h5">Other</span>
              <ul className="links-vertical mt-2">
                <li>
                  <Card.Link as={Link} to={Routes.DocsQuickStart.path} target="_blank">Getting started</Card.Link>
                </li>
                <li><Card.Link as={Link} to={Routes.DocsChangelog.path} target="_blank">Changelog</Card.Link></li>
                <li><Card.Link target="_blank" href="https://themesberg.com/licensing">License</Card.Link></li>
              </ul>
            </Col>
            <Col xs={12} md={4} className="mb-5 mb-lg-0">
              <span className="h5 mb-3 d-block">Subscribe</span>
              <form action="#">
                <div className="form-row mb-2">
                  <div className="col-12">
                    <input type="email" className="form-control mb-2" placeholder="example@company.com" name="email" aria-label="Subscribe form" required />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-secondary text-dark shadow-soft btn-block" data-loading-text="Sending">
                      <span>Subscribe</span>
                    </button>
                  </div>
                </div>
              </form>
              <p className="text-muted font-small m-0">We’ll never share your details. See our <Card.Link className="text-white" href="#">Privacy Policy</Card.Link></p>
            </Col>
          </Row>
          <hr className="bg-gray my-5" />
          <Row>
            <Col className="mb-md-2">
              <Card.Link href="https://themesberg.com" target="_blank" className="d-flex justify-content-center">
                <Image src={ThemesbergLogo} height={35} className="d-block mx-auto mb-3" alt="Themesberg Logo" />
              </Card.Link>
              <div className="d-flex text-center justify-content-center align-items-center" role="contentinfo">
                <p className="font-weight-normal font-small mb-0">Copyright © Themesberg 2019-<span className="current-year">2021</span>. All rights reserved.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
