import React, {useState, useEffect } from 'react';
import Header from '../componets/Header'
import Search from '../componets/Search'
import Categories from '../componets/Categories'
import Carousel from '../componets/Carousel'
import CarouselItem from '../componets/CarouselItem'
import Footer from '../componets/Footer'
import useInitialState from '../hooks/useInitialState'
import '../assets/styles/App.scss'

const API = 'http://localhost:3000/initialState'

const App = () => {
    const initialState = useInitialState(API)
    return (
        <div className="App">
            <Header />
            <Search />
            {initialState.mylist.length > 0 && (
                <Categories title="Mi Lista">
                    <Carousel>
                    {initialState.mylist.map(item =>
                        <CarouselItem key={item.id} {...item}/>
                    )}
                    </Carousel>
                </Categories>
            )}

            <Categories title="Tendencias">
                <Carousel>
                    {initialState.trends.map(item =>
                        <CarouselItem key={item.id} {...item}/>
                    )}
                </Carousel>
            </Categories>

            <Categories title="Originales de Plazi Video">
                <Carousel>
                    {initialState.originals.map(item => 
                        <CarouselItem key={item.id} {...item}/>
                    )}
                </Carousel>
            </Categories>

            <Footer />
        </div>
    );
}

export default App;