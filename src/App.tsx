import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './index.css';

import { HomePage } from "./HomePage.tsx";
import { Converter } from "./components/Converter/Converter.tsx";
import { Steps } from "./components/Steps/Steps.tsx";

function App() {

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/converter" element={<Converter />} />
					<Route path="/steps" element={<Steps />} />
				</Routes>
			</BrowserRouter>

		</div>
	)
}

export default App
