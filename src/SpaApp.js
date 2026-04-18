import KoPapirOllo from './KoPapirOllo.js';
import SzamKitalalo from './SzamKitalalo.js';

const { useState } = React;
const e = React.createElement;

function SpaApp() {
    const [aktivMenu, setAktivMenu] = useState('jatek1');

    return e('div', null,
        e('div', { style: { marginBottom: '20px', display: 'flex', gap: '10px', justifyContent: 'center' } },
            e('button', { 
                onClick: () => setAktivMenu('jatek1'),
                style: { backgroundColor: aktivMenu === 'jatek1' ? '#2c3e50' : '#bdc3c7' }
            }, 'Kő-Papír-Olló'),
            e('button', { 
                onClick: () => setAktivMenu('jatek2'),
                style: { backgroundColor: aktivMenu === 'jatek2' ? '#2c3e50' : '#bdc3c7' }
            }, 'Számkitaláló')
        ),
        aktivMenu === 'jatek1' ? e(KoPapirOllo) : e(SzamKitalalo)
    );
}

export default SpaApp;