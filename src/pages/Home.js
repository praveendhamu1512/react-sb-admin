import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCalendar, faClipboard, faComment, faDollarSign, faDownload, faEnvelope, faSearch } from '@fortawesome/free-solid-svg-icons'
import './css/Home.css';
import user from "./user.jpg";
import LineChart from "./charts/Linechart";
import Pie from "./charts/Piechart";

const Home = () => {
    return (
        <div>
            <nav class="navbar navbar-expand navbar-light bg-white shadow">
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav mr-auto hori">
						<li class="nav-item active">
							<div class="input-group">
						<input type="text" class="form-control" placeholder="Search for...."/>
						<div class="input-group-append">
							<button class="btn btn-primary" type="button">
							<FontAwesomeIcon icon={faSearch} className="fontawesome-search"/>
							</button>
						</div>
						</div>
						</li>
					</ul>
					<ul class="navbar-nav">
						<li class="nav-item active">
							<FontAwesomeIcon icon={faBell} className="fontawesome"/>
							<span className="alert-msg alert-msg-align">3+</span>
						</li>
						<li className="nav-item">
							<FontAwesomeIcon icon={faEnvelope} className="fontawesome"/>
							<span className="alert-msg alert-env-align">7+</span>
						</li>
						<li className="nav-item  dropdown no-arrow">
							<Link className="nav-link dropdown-toggle profile-dropdown" as={Link} id="navbarDropdown" to={"/contact"} 
								role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<span>Douglas McGee</span>
								<img className="userPic"src={user} alt="user"/>

							</Link>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<Link className="dropdown-item" as={Link} to={"/blogs"}>Action</Link>
								<Link className="dropdown-item" as={Link} to={"/contact"}>Another action</Link>
								<Link className="dropdown-item" as={Link} to={"/contact"}>Something else here</Link>
							</div>
								
						</li>
					</ul>				
				</div>
			</nav>
			<div className="container mt-4">
				<div className="dashboard ">
					<div>
						<h1 className="das-design">Dashboard</h1>
					</div>
					<div>
						<Link className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"  as={Link} to={"/blogs"}>
							<FontAwesomeIcon icon={faDownload} className="fontawesome"/>
							Generate Report
						</Link>
					</div>
				</div>
			</div>

			<div className="container mt-3">
				<div className="row">

					<div className="col-3">
						<div className="card card-design-blue">
							<div className="card-body d-flex align-content-center flex-wrap">
								<div className="row">
								<div className="col-9">
									<h6>EARNINGS (MONTHLY)</h6>	
									<h4>$40,000</h4>	
								</div>
								<div className="col-3">
								<FontAwesomeIcon icon={faCalendar} className="fontdas"/>
								</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-3">
					<div className="card card-design-green">
							<div className="card-body d-flex align-content-center flex-wrap">
								<div className="row">
								<div className="col-9">
									<h6 className="annual-salary">EARNINGS (ANNUAL)</h6>	
									<h4>$2,50,000</h4>	
								</div>
								<div className="col-3">
								<FontAwesomeIcon icon={faDollarSign} className="fontdas"/>
								</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-3">
					<div className="card card-design-blue">
							<div className="card-body d-flex align-content-center flex-wrap">
								<div className="row">
									<div className="col-auto">
										<h6 className="annual-salary">TASKS</h6>	
										<h4>50%</h4>	
									</div>
									<div className="col-auto">

									</div>
									<div className="col-auto">
									<FontAwesomeIcon icon={faClipboard} className="fontdas"/>
								</div>
								</div>
								{/* <div className="row no-gutters align-items-center">
								<div className="col-3">
									<h6>TASKS</h6>	
									<h4>50%</h4>	
								</div>
								 <div className="col-7">
								 <div class="progress progress-sm mr-2">
  									<div class="progress-bar w-50" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
								</div>	
								</div> 
								<div className="col-2">
								<FontAwesomeIcon icon={faCalendar} className="fontdas"/>
								
								</div>
								</div> */}
							</div>
						</div>		
					</div>
					<div className="col-3">
					<div className="card card-design-orange">
							<div className="card-body d-flex align-content-center flex-wrap">
								<div className="row">
								<div className="col-9">
									<h6 className="pending-req">PENDING REQUESTS</h6>	
									<h4>18</h4>	
								</div>
								<div className="col-3">
								<FontAwesomeIcon icon={faComment} className="fontdas"/>
								</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container mt-3">
				
				<div className="row">
					<div className="col-8">
						<div className="card">
							<div className="card-header d-flex justify-content-between">
								<h4 style={{color:"#587FDF",fontSize:"1.2rem"}}>Earnings Overview</h4>
								{/* <FontAwesomeIcon icon={faell} className="fontdas"/> */}
								<i class="fa fa-ellipsis-v" aria-hidden="true" style={{color:"#D1D3E2"}}></i>
							</div>
							<div className="card-body">
							<LineChart/>
							</div>
						</div>
					</div>
					<div className="col-4">
						<div className="card">
							<div className="card-header d-flex justify-content-between">
								<h4 style={{color:"#587FDF",fontSize:"1.2rem"}}>Revenue Sources</h4>								
								{/* <FontAwesomeIcon icon={faComment} className="fontdas"/> */}
								<i class="fa fa-ellipsis-v" aria-hidden="true" style={{color:"#D1D3E2"}}></i>
							</div>
							<div className="card-body">
							<Pie/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>    
    )
    
    
  };
  
  export default Home;