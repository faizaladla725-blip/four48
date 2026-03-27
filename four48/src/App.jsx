import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';
import './styles/App.css';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/about' component={AboutPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;