import React from 'react'
import zeppelin from '../../images/OpenZeppelin.png'
import oracle from '../../images/oracle.png'
import monday from '../../images/monday.png'
import morpheus from '../../images/morpheus.png'
import protonet from '../../images/protonet.png'
import segment from '../../images/segment.png'
import samsung from '../../images/samsung.png'
import './Clients.css'

export default function Clients() {
    return (
        <section className="clients">
            <h1 className="title">Trusted By Over 100+ Startups and freelance business</h1>
            <div className="clients-logos">
                <div className="zeppellin C-logo">
                    <img src={zeppelin} alt=" zeppelin-logo" />
                </div>
                <div className="oracle C-logo">
                    <img src={oracle} alt=" oracle-logo" />
                </div>
                <div className="morpheus C-logo">
                    <img src={morpheus} alt=" morpheus-logo" />
                </div>
                <div className="samsung C-logo">
                    <img src={samsung} alt=" samsung-logo" />
                </div>
                <div className="monday C-logo">
                    <img src={monday} alt=" monday-logo" />
                </div>
                <div className="segment C-logo">
                    <img src={segment} alt=" segment-logo" />
                </div>
                <div className="protonet C-logo">
                    <img src={protonet} alt=" protonet-logo" />
                </div>
            </div>
        </section>
    )
}
