import React from 'react';
import Header from '../MainComponent/Header/StorefrontHeader'
const MainComponent: React.FC = ({children}) => {
  return (
    <div className="d-flex flex-column sticky-footer-wrapper">
      <Header />

      <div className="container flex-fill">
          { children}
      </div>
    </div>
  )
}
export default MainComponent;