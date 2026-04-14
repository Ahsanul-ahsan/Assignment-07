import React, { use } from 'react';
import { useParams } from 'react-router';

const cardPromise = fetch("/data.json").then(res => res.json());

const CardDetails = () => {
    const { id } = useParams();
    const cards = use(cardPromise)
    const expectCard = cards.find((card) => card.id === Number(id));

    const { name, days_since_contact, tags, status, picture } = expectCard;
  
    return (

        <div>
            <h2>this is details</h2>
        </div>
       
    );
};

export default CardDetails;