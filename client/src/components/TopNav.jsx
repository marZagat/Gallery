import React from 'react';

function TopNav() {
  return (
    <div id="top-nav" style={{ height: 60, background: 'white' }}>
      <div id="logo">
        <img src="http://res.cloudinary.com/madlicorice/image/upload/v1520454562/small_logo.png" alt="" className="logo" style={{height:'50px', float:'left', padding:'5px 10px 0px 10px' }} />
      </div>
      <div className="search-container" style={{
        borderRight:'1px solid grey', 
        borderLeft:'1px solid grey', 
        float:'left'
        }}>
        <form style={{
            padding:'25px 25px 0px 10px',
            fontSize:'14px',
            border:'none',
            letterSpacing:'0.3px',
            color:'#656666',
            fontWeight:'200',
            width:'200px'
          }}>
          <input type="text" placeholder="Find a great place near you" name="search" style={{
            padding:'25px 25px 0px 10px',
            fontSize:'14px',
            border:'none',
            letterSpacing:'0.3px',
            color:'#656666',
            fontWeight:'200',
            width:'200px'
          }}/>
          <button type="submit"><i className="fa fa-search" style={{
            float:'left',
            padding:'25px 0 15px 20px',
            background:'white',
            fontSize:'16px',
            border:'none',
            color:'grey'
          }}/></button>
        </form>
      </div>
      <div id="nav-buttons">
        <button className="nav-button" style={{
          background:'none', 
          color:'#656666', 
          border:'none', 
          fontSize:'16px', 
          float:'right', 
          padding:'25px 25px 0 0', 
          letterSpacing:'0.2px'
          }}>NEW & HOT</button>
        <button className="nav-button" style={{
          background:'none', 
          color:'#656666', 
          border:'none', 
          fontSize:'16px', 
          float:'right', 
          padding:'25px 25px 0 0', 
          letterSpacing:'0.2px'
          }}>CITY'S BEST</button>
        <button className="nav-button" style={{
          background:'none', 
          color:'#656666', 
          border:'none', 
          fontSize:'16px', 
          float:'right', 
          padding:'25px 25px 0 0', 
          letterSpacing:'0.2px'
          }}>SAN FRANCISCO</button>
      </div>
    </div>
  );
}

export default TopNav;
