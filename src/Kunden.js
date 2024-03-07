import React, { useState } from 'react';
import Kunde from './Kunde';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const Kunden = () => {
    const [showOnlyWithBemerkung, setShowOnlyWithBemerkung] = useState(false);
    const [mySearch, setMySearch] = useState("");

    const Kundenliste = [
        {
            id: 1,
            vorname: 'Petra',
            nachname: 'Musterfrau',
            email: 'pm@gibts.net',
            tel: '123456789',
            bemerkung: 'Ein Beispiel-Kunden-Datensatz'
        },
        {
            id: 2,
            vorname: 'Hans',
            nachname: 'Mustermann',
            email: 'hm@localho.st',
            tel: '123456789',
            bemerkung: ''
        },
        {
            id: 3,
            vorname: 'Bärbel',
            nachname: 'Brotkrümel',
            email: 'bb@brotkrüm.el',
            tel: '987654321',
            bemerkung: ''
        },
        {
            id: 4,
            vorname: 'Gundel',
            nachname: 'Gaukelei',
            email: 'gk@entenhaus.en',
            tel: '123456789',
            bemerkung: 'Ohne Worte :)'
        },
        {
            id: 5,
            vorname: 'Mir gehen langsam',
            nachname: 'die Namen aus',
            email: 'blabla@sonst.wo',
            tel: '123456789',
            bemerkung: ''
        },
        {
            id: 6,
            vorname: 'Baba',
            nachname: 'Jaga',
            email: 'bj@maerchengesta.lt',
            tel: '121454',
            bemerkung: ''
        },
    ];

    const filteredKunden = Kundenliste.filter((kunde) => {
        if (showOnlyWithBemerkung) {
            return kunde.bemerkung !== '' && (kunde.vorname.toLowerCase().includes(mySearch.toLowerCase()) || kunde.nachname.toLowerCase().includes(mySearch.toLowerCase()));
        } else {
            return kunde.vorname.toLowerCase().includes(mySearch.toLowerCase()) || kunde.nachname.toLowerCase().includes(mySearch.toLowerCase());
        }
    });

    return (
        <div>
            <p>
                Suche: <input type="text" value={mySearch} onChange={(e) => setMySearch(e.target.value)} />
            </p>
            <p>
                <ToggleButtonGroup value={showOnlyWithBemerkung} exclusive onChange={() => setShowOnlyWithBemerkung(!showOnlyWithBemerkung)} aria-label="text alignment">
                    <ToggleButton value={true}>Nur Kunden mit Bemerkung anzeigen</ToggleButton>
                    <ToggleButton value={false}>Alle Kunden anzeigen</ToggleButton>
                </ToggleButtonGroup>
            </p>
            {filteredKunden.map((kunde) => (
                <Kunde
                    key={kunde.id}
                    id={kunde.id}
                    vorname={kunde.vorname}
                    nachname={kunde.nachname}
                    email={kunde.email}
                    tel={kunde.tel}
                    bemerkung={kunde.bemerkung}
                />
            ))}
        </div>
    );
};

export default Kunden;