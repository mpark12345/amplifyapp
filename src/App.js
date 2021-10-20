import logo from './logo.svg';

import helmMap from './Jade_helm_15.jpg';

import './App.css';
import './css/bootstrap.min.css';	// add bootstrap css



function App() {
  return (
    <main>
	  <div class="container py-4">
		<header class="pb-3 mb-4 border-bottom">
			<span class="fs-4">Silly ideas - M Park CSCE 3420.002 Fall 2021</span>
		</header>

		<div class="p-5 mb-4 bg-light rounded-3" id="block1">
		  <div class="container-fluid py-5">
			<h1 class="display-5 fw-bold">COVID Army</h1>
			<p class="col-md-8 fs-4">Is the COVID virus amassing an army to occupy the United States?</p>
		  </div>
		</div>

		<div class="row align-items-md-stretch">
		  <div class="col-md-6" id="block2">
			<div class="h-100 p-5 text-white bg-dark rounded-3">
			  <h2>Winter-pocolipse 2022</h2>
			  <p>Will you be ready when Abbott turns off the power for good plunging Texas into the dark ages?</p>
			</div>
		  </div>
		  <div class="col-md-6">
			<div class="h-100 p-5 bg-light border rounded-3" id="block3">
				  <h2>Jade Helm</h2>
				  <p>Will you be ready when the radical democrats declare Texas a hostile state?</p>
			</div>
		  </div>
		</div>

		<footer class="pt-3 mt-4 text-muted border-top">
		  &copy; 2021
		</footer>
	  </div>
	</main>
  );
}

export default App;


//<img src={logo} className="App-logo" alt="logo" />
// <img src={helmMap} alt="logo" id="block3Image" />