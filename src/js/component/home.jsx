import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Footer from "./footer.jsx";
import Navbar from "./navbar.jsx";
import Jobotrom from "./jobotrom.jsx";
import Card from "./card.jsx";


//create your first component

const Home = (props) => {
    return (<div>
		<Navbar/>
		<Jobotrom/>
		<Card buttom = {"Find"} title = {"Card title"} text = {" blablabla blablabla blablabla blablablablablablablablabla blablabla blablabla blablabla blablabla blablabla"}/>

		<Footer/>
		</div>)
};


export default Home;


// import React from "react";
// import Jumbotron from "./Jumbotron.jsx";
// import CardsContainer from "./CardsContainer.jsx";
// import NavBar from "./NavBar.jsx";
// import Footer from "./Footer.jsx";

// //create your first component
// const Home = () => {
// 	const bodyStyle={
// 		minHeight:"calc(100vh - 56px - 3em)"
// 	}
//     return (
// 		<div >
// 			<NavBar/>
// 			 <div style={bodyStyle} className="container-fluid p-4">
// 				<Jumbotron />
// 				<CardsContainer />
// 			</div>
// 			 <Footer/> 
// 		</div>
//     );
// };

// export default Home;