import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contactData from './contactData';
import './Contact.css'

export default function Contact() {
    return (
        <div className="icon container">
            {
                contactData.map((item, i) => {
                    const { icon, href } = item;
                    return (
                        <a href={href} target='_blank' key={`${href}-${i}`}>
                            <FontAwesomeIcon icon={ icon } size="6x" />
                        </a>
                    );
                })
            }
            
        </div>
    )
}
