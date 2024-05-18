import React from 'react';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import './App.css';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className="App">
            <Header />
            <RecipeList />
            <Footer />
        </div>
    );
};

export default App;
