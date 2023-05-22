import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Products from './Products';

const Tabss = () => {
    const [Key,SetKey] =useState('home')
  return (
    
      <Tabs
      activeKey={Key}
      onSelect={(k)=>SetKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Products">
      <Products />
      </Tab>
      <Tab eventKey="profile" title="Users">
      <Products />
      </Tab>
      <Tab eventKey="contact" title="Posts" >
        How are you ?
      </Tab>
    </Tabs>
    
  )
}

export default Tabss
