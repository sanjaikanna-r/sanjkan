import React from 'react'
import './Mywork.css'
import themepattern from '../../assets/theme_pattern.svg'
import myworkdata from '../../assets/mywork_data'
import arrowicon from '../../assets/arrow_icon.svg'

const Mywork = () => {
  return (
    <div id='mywork' className='mywork'>
        <div className="mywork-title">
            <h1>My latest work</h1>
            <img src={themepattern} alt="" />
        </div>
        <div className="mywork-container">
            {myworkdata.map((work,index)=>{
                return <img key={index} src={work.w_img}/>

            })}

        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrowicon} alt="" />
        </div>
      
    </div>
  )
}

export default Mywork
