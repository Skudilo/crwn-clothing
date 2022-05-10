import Home from "./pages/Home";
import {Route, Routes } from "react-router-dom";
import Navigations from "./pages/Navigations";
import SignIn from "./pages/SignIn";
import Shop from "./pages/Shop";


const App = () => (
	<Routes >
		<Route path='/' element={<Navigations/>}>
			<Route index element={<Home/>}/>
			<Route path='shop' element={<Shop/>}/>
			<Route path='sign-in' element={<SignIn/>}/>
		</Route>
	</Routes >
);


export default App;
