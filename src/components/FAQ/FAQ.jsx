import React, { useState } from 'react';
import { HiArrowSmRight } from 'react-icons/hi';
import { LoremIpsum } from 'react-lorem-ipsum';

import './FAQ.css';
export default function FAQ() {
  const [accord, setAccord] = useState(true);
  function toggle(event) {
    setAccord({})
    // setAccord(prev => (
    //   !prev)
    // )
    // console.log(event.target)
  }
  return (

    < section className="container faq" >
      <div className="leftSide">
        <h1 className='head'>Any questions?
          We got you.</h1>
        <p className="body">Yet bed any for  assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.</p>
        <div className="more">
          <span className="more">More</span>
          < HiArrowSmRight />
        </div>
      </div>

      <div className="rightSide">
        <div className="accord">
          <div className="head">
            <h1>How this work?</h1>
            <span className='toggle' onClick={toggle}>-</span>
          </div>
          <p className={accord ? "body show" : "body"}>Yet bed any for  assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.</p>
        </div>

        <div className="accord">
          <div className="head">
            <h1>Are there any additional fee?</h1>
            <span className='toggle' onClick={toggle}>-</span>
          </div>
          <p className={accord ? "body show" : "body"}> Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
            dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
            Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat.</p>
        </div>
      </div>
    </section >
  )
}
