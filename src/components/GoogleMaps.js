import React,{Component} from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow, useJsApiLoader } from '@react-google-maps/api';
import MapStyles from '../MapStyles';

const libraries = ["places"];
const mapContainerStyle ={
    width: '300px',
    height: '300px',
}
const center ={
    lat:37.774929,
    lng: -122.419418,
}

const options ={
    styles: MapStyles,
    disableDefaultUI: true,
    // zoomControl: true,
}
const state ={
    lname: localStorage.getItem('lname'),
    fname:localStorage.getItem('fname'),
    title:localStorage.getItem('title'),
    heightinch:localStorage.getItem('heightinch'),
    heightfeet:localStorage.getItem('heightfeet'),
    pnumber:localStorage.getItem('pnumber'),
    addcity:localStorage.getItem('addcity'),
    addstate:localStorage.getItem('addstate'),
    addzip:localStorage.getItem('addzip'),
    email:localStorage.getItem('email'),
  }



  
export function Google(){
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: 'AIzaSyCKpHxuTD87SuiNqWf6Q-B5PIeWOuKuXT0',
        libraries,
    })

    if(loadError) return "Error loading maps";
    if(!isLoaded) return "Loading Maps";
    

    // <div className ="container">
    // <div className="app-wrapper">
    return<div className ="app-wrapper">
        
        
        <div className="showaddress">
        {localStorage.getItem('addcity')},{localStorage.getItem('addstate')},{localStorage.getItem('addzip')}
        <GoogleMap 
        className = "Test"
        mapContainerStyle={mapContainerStyle} 
        zoom={13} 
        center = {center}
        options = {options}
        ></GoogleMap>
        </div></div>
        
}

