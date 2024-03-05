import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../screens/HomePage'
import About from '../screens/About'
import Root from '../screens/Root'
import Details from '../screens/Details'


const MainRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Root />} >
                    <Route path='' element={<HomePage />} />
                    <Route path=':id' element={<Details />} />
                    <Route path='/about' element={<About />} />
                </Route>

            </Routes>

        </>
    )
}

export default MainRoutes
