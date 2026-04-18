const { useState } = React;
const e = React.createElement;

const valasztasok = ['Kő', 'Papír', 'Olló'];

function KoPapirOllo() {
    const [felhasznaloValasztas, setFelhasznaloValasztas] = useState(null);
    const [gepValasztas, setGepValasztas] = useState(null);
    const [eredmeny, setEredmeny] = useState('');

    const jatek = (valasztas) => {
        const gep = valasztasok[Math.floor(Math.random() * valasztasok.length)];
        setFelhasznaloValasztas(valasztas);
        setGepValasztas(gep);

        if (valasztas === gep) {
            setEredmeny('Döntetlen!');
        } else if (
            (valasztas === 'Kő' && gep === 'Olló') ||
            (valasztas === 'Papír' && gep === 'Kő') ||
            (valasztas === 'Olló' && gep === 'Papír')
        ) {
            setEredmeny('Te nyertél!');
        } else {
            setEredmeny('A gép nyert!');
        }
    };

    return e('div', { style: { padding: '20px', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '20px', backgroundColor: '#fff' } },
        e('h2', null, 'Kő-Papír-Olló'),
        e('div', { style: { marginBottom: '15px' } },
            valasztasok.map(v => e('button', { 
                key: v, 
                onClick: () => jatek(v),
                style: { marginRight: '10px', backgroundColor: '#3498db' }
            }, v))
        ),
        felhasznaloValasztas && e('div', null,
            e('p', null, `Te választásod: ${felhasznaloValasztas}`),
            e('p', null, `Gép választása: ${gepValasztas}`),
            e('h3', { style: { color: eredmeny === 'Te nyertél!' ? '#27ae60' : eredmeny === 'A gép nyert!' ? '#e74c3c' : '#f39c12' } }, eredmeny)
        )
    );
}

export default KoPapirOllo;