import React from 'react';

import './App.css';
import PageHeader from './components/PageHeader';
import SideMenu from './components/SideMenu';
import SearchData from './components/SearchData';

function App() {

  const [data, setData] = React.useState({});
  
  // console.log("Data", data);
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center">
        <PageHeader/>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-4 mb-3">
          <SideMenu setData={setData}/>
        </div>
        
        <div className="col-sm-12 col-md-12 col-lg-8 mb-3">
          <SearchData data={data}/>
        </div>
      </div>
    </div>
  );
}

export default App;
