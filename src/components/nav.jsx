import { Component } from "react";
import { Link } from "react-router-dom";
import mtnLogo from "./Assets/mtn-new-logo.svg";
import Home from './home';

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  isHovering: false
		};
	  }

	  handleMouseEnter = () => {
		this.setState({ isHovering: true });
	  };
	
	  handleMouseLeave = () => {
		this.setState({ isHovering: false });
	  };

	render() {
		return (
			<nav className="bg-yellow-400 h-20 mt-10 p-0 m-0 fixed w-full z-10 top-0 ">
				<div className="container mx-auto mr-0 p-3  flex flex-wrap items-center">
					<div className="flex w-full md:w-1/2 justify-center md:justify-start text-black font-extrabold"></div>
					<div className="flex h-12 ml-10 bg-yellow-400 w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
						<img
							className="w-60 h-12 mt-0 mb-29 ml-2 max-w-3xl font-semibold capitalize"
							src={mtnLogo}
							alt="MTN logo"
						/>
						<ul className="float-right px-4 list-reset flex justify-between flex-1 md:flex-none items-center">
							{/* Add your links here */}

							<li class="mr-0.5" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
								<Link className="inline-block py-2 px-4 text-black cursor-pointer hover:text-gray-50 no-underline" to="/main">Personal</Link>

							</li>

							<li class="mr-0.5">
								<Link className="inline-block py-2 px-4 text-black hover:text-gray-50 no-underline" to="/store">Business</Link>
							</li>

							<li class="mr-0.5">
								<Link className="inline-block py-2 px-4 text-black no-underline hover:text-gray-50 " to="/device">Momo</Link>
							</li>
							<li class="mr-8 ml-0.5">
								<Link className="inline-block py-2 px-4 text-black cursor-pointer hover:text-gray-50 no-underline" to="/price">VAS</Link>
							</li>

							<li class="mr-0.5">
								<Link className="inline-block py-2 px-4 text-black no-underline hover:text-gray-50 " to="">Investors</Link>
							</li>
							<li class="m-0">
								<Link className="inline-block py-2 px-4 text-black hover:text-gray-50 no-underline" to="/recharge">Company</Link>
							</li>
							{/* <li class="mr-1 rounded-lg justify-self-end">
							
							</li> */}

							{/* <li class="mr-1 rounded-lg ">
								<Link className="text--black float-right hover:text-gray-50 rounded-lg" to="/login">Login</Link>
							</li>					 */}
							
						</ul>
						
						
						{this.state.isHovering && (
							<div>
								<Home className='ml-5' />
							</div>
						)}
					</div>
					<div className="flex justify-end mr-10 mt"> 
				<input className="justify-end  border border-black rounded-full" placeholder="Search..."/></div>

					
			</div>
			</nav>
		);
	}
}

export default NavBar;
