import React from 'react'
import "./cards.css"
import {assets}  from '../../assets/assets.js'
import ProfileCards from "../Card/ProfileCards";



const Cards = () => {
  return (
    <div className='cards'>
        <div className='cards-all'>
            <ProfileCards name = "html"  img = {assets.html} />
            <ProfileCards name = "Css"   img = {assets.css}/>
            <ProfileCards name = "Js"  img = {assets.js}/>
            <ProfileCards name = "React"  img = {assets.react}/>
            <ProfileCards name = "Bootstrap"  img = {assets.bootstrap}/>
            <ProfileCards name = "Tailwind"  img = {assets.tailwind}/>
            <ProfileCards name = "Node.js"   img = {assets.nodejs}/>
            <ProfileCards name = "Figma"   img = {assets.figma}/>
            <ProfileCards name = "Sql"   img = {assets.mysql}/>
            <ProfileCards name = "Mongodb"   img = {assets.mongodb}/>
            <ProfileCards name = "Express"  img = {assets.express}/>
        
        </div>

    </div>
  )
}

export default Cards