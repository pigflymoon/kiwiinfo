import React from 'react';

import '../styles/cardItem.css'

function CardItem(props) {
    return (
        <div className="c-flex">
            <a target="_blank" href=""
               className="c-flex__item is--moqups w-inline-block">
                <div className="c-tool-logo"><img src="https://digitaldesign.tools/images/moqups.png" width="40"/></div>
                <h3 className="c-tool-title">Moqups</h3>
                <p>A streamlined web app that helps you create and collaborate on.</p>
                <div className="c-tool-link">
                    <img src="https://digitaldesign.tools/images/tail-right.svg" width="20"/></div>
                <div className="c-newkidintown">
                    <img src="https://digitaldesign.tools/images/energy.svg" width="15" className="c-brandnew__icon"/>
                    <div>brand new</div>
                </div>
            </a>
        </div>

    );
}

export default  CardItem;