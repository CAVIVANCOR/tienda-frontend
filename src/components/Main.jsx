import React from 'react';
import { View } from 'react-native';
import {Routes, Route} from 'react-router-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import LogInPage from '../pages/LogIn';

const Main = () =>{
    return (
        <View style={{flex:1}}>
            <AppBar/>
            <Routes>
                <Route path='/' element={<RepositoryList/>}></Route>
                <Route path='/signin' element={<LogInPage/>}></Route>
            </Routes>
        </View>
    )
};
export default Main;