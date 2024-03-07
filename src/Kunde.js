import React from 'react';

const Kunde = (props) => {
    return (
        <div className="kunde">
            <p>ID: {props.id}</p>
            <p>Name: {props.vorname} {props.nachname}</p>
            <p>E-Mail: {props.email}</p>
            <p>Telefon: {props.tel}</p>
            {/* {props.bemerkung && <p>Bemerkung: {props.bemerkung}</p>} */}
            <p>Bemerkung: {props.bemerkung}</p>
        </div>
    );
};

export default Kunde;
