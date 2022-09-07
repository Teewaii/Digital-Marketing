import React from 'react'
import hero2 from '../../images/Followers.png'
import './Users.css'

export default function Users() {
  return (
    <section id='users' className=" container users">
      <div className="leftSide">
        <div className="desc">
          <h1 className="head">Get thousands of active followers</h1>
          <p className="body">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.</p>
        </div>
        <button className='btn'>Start Free</button>
      </div>
      <div className="rightSide">
        <img src={hero2} alt="header image" />
      </div>
    </section>
  )
}
