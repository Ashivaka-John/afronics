import React from 'react'
import "./Featured.scss"
function Featured() {
  return (
      <div className='featured'>
          <div className='container'>
        <div className='left'>
          <h1>Find the perfect <i>freelance</i> services for your business</h1>
          <div className='search'>
            <div className='searchInput'>
              <img className='Search' src='/img/search.png' alt='' />
              <input type='text' placeholder='best marketplace in Kenya'/>
            </div>
            <button>search</button>
          </div>
          <div className='popular'>
            <span>Popular:</span>
            <button>Web Design</button>
            <button>Data Analysis</button>
            <button>Graphic Design</button>
            <button>Programming</button>
          </div>
        </div>
        <div className='right'></div>
           <img src='/img/pan.png' alt=''/>
          </div>
    </div>
  )
}

export default Featured