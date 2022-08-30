import React from 'react';
import { HiArrowSmRight } from 'react-icons/hi';
import './FAQ.css';
export default function FAQ() {
  return (
    <section className="faq">
        <div className="leftside">
            <h1>Any questions?
We got you.</h1>
<p className="body">Yet bed any for  assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.</p>
      <div className="more">
       <span className="more">More</span>
       < HiArrowSmRight />
       </div>
        </div>

        <div className="rightside">
            <div className="accord">
                <div className="head">
                <h1>How this work?</h1>
                <span>-</span>
                </div>
                <p className="body">Yet bed any for  assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.</p>
            </div>
        </div>
    </section>
  )
}
