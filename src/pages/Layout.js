// import { Outlet} from "react-router-dom";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar, faCog, faFolder, faLaughWink, faTable, faTachometer, faWrench } from '@fortawesome/free-solid-svg-icons'
import Home from "./Home";
import Blogs from "./Blogs";
import Contact from "./Contact";
import NoPage from "./NoPage";


import './layout.css';

const Layout = () => {
  return (
    <>
		<BrowserRouter>
		
			<div className="row">
			<div className="col-2">
		
				<nav className="navbar navbar-expand-lg navbar-light bg-light bg-gradient-primary">
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto vertical-nav">
						<li className="nav-item">
							<Link className="nav-link sb" to={"/"}>
							<FontAwesomeIcon icon={faLaughWink} className="fontawesome-wink"/>
							SB-Admin
							<sub>2</sub>
							</Link>			
						</li>
						<li className="nav-item">
							<Link className="nav-link" to={"/"}>
							<FontAwesomeIcon icon={faTachometer} className="fontawesome"/>
							Dashboard</Link>
						</li>
						<div className="sidebar-heading">
								Interface
							</div>
						<li className="nav-item  dropdown">
							<Link className="nav-link dropdown-toggle" as={Link} id="navbarDropdown" to={"/contact"} 
							role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<FontAwesomeIcon icon={faCog} className="fontawesome"/>
								Components
							</Link>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
							<Link className="dropdown-item" as={Link} to={"/blogs"}>Action</Link>
							<Link className="dropdown-item" as={Link} to={"/contact"}>Another action</Link>
							<div classNames="dropdown-divider"></div>
							<Link className="dropdown-item" as={Link} to={"/contact"}>Something else here</Link>
							</div>
						</li>
						<li className="nav-item  dropdown">
							<Link className="nav-link dropdown-toggle" as={Link} id="navbarDropdown" to={"/blogs"} 
							role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<FontAwesomeIcon icon={faWrench} className="fontawesome"/>
								Utilites
							</Link>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
							<Link className="dropdown-item" as={Link} to={"/blogs"}>Action</Link>
							<Link className="dropdown-item" as={Link} to={"/contact"}>Another action</Link>
							<div classNames="dropdown-divider"></div>
							<Link className="dropdown-item" as={Link} to={"/contact"}>Something else here</Link>
							</div>
						</li>
					<div className="sidebar-heading">
						Addons
					</div>
					<li className="nav-item  dropdown">
							<Link className="nav-link dropdown-toggle" as={Link} id="navbarDropdown" to={"/blogs"} 
							role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							<FontAwesomeIcon icon={faFolder} className="fontawesome"/>  	Pages
								
							</Link>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
							<Link className="dropdown-item" as={Link} to={"/blogs"}>Action</Link>
							<Link className="dropdown-item" as={Link} to={"/contact"}>Another action</Link>
							<div classNames="dropdown-divider"></div>
							<Link className="dropdown-item" as={Link} to={"/contact"}>Something else here</Link>
							</div>
						</li>
					<li className="nav-item">

						<Link className="nav-link" to={"/blogs"}>
						<FontAwesomeIcon icon={faChartBar} className="fontawesome"/>
							Charts</Link>
					</li>
						<li className="nav-item">
							<Link className="nav-link" to={"/contact"}>
							<FontAwesomeIcon icon={faTable} className="fontawesome"/>
							Tables</Link>
						</li>
					</ul>
				</div>
			</nav>
			</div>
			<div className="col-10">
				<Routes>
				<Route>
				<Route index path="/" element={<Home />} />
				<Route path="blogs" element={<Blogs />} />
				<Route path="contact" element={<Contact />} />
				<Route path="*" element={<NoPage />} />
				</Route>
				</Routes>
			</div>
		
			
			
		</div>
		</BrowserRouter>
    </>
  )
};

export default Layout;

// import React from 'react';
// import './layout.css';
// import { Link } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Navbar,  NavDropdown, Nav } from 'react-bootstrap';
// import Home from "./Home";
// import Blogs from "./Blogs";
// import Contact from "./Contact";
// import NoPage from "./NoPage";



// const Layout = () =>{
//     return (
//       <BrowserRouter>
//      <div className='App tc f3'>
//         <Navbar bg='light' expand='lg'>
          
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className='mr-auto'>
//             <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
//             <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>  
//               <Nav.Link as={Link} to={"/blogs"}>Blogs</Nav.Link>
//               <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//           </Navbar.Collapse>
//         </Navbar>
//         <div>
//         <Routes>
//         <Route>
//           <Route index path="/" element={<Home />} />
//           <Route path="blogs" element={<Blogs />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>
//         </div>
//       </div>
//       </BrowserRouter>
//     );
// }

// export default Layout;