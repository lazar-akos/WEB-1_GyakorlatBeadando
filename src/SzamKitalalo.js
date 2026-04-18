const { useState } = React;
const e = React.createElement;

function SzamKitalalo() {
    const [celszam, setCelszam] = useState(Math.floor(Math.random() * 100) + 1);
    const [tipp, setTipp] = useState('');
    const [uzenet, setUzenet] = useState('');
    const [probalkozasok, setProbalkozasok] = useState(0);

    const ellenorzes = (ev) => {
        ev.preventDefault();
        const tippeltSzam = parseInt(tipp);
        setProbalkozasok(probalkozasok + 1);

        if (tippeltSzam === celszam) {
            setUzenet(`Gratulálok, eltaláltad ${probalkozasok + 1} próbálkozásból!`);
        } else if (tippeltSzam < celszam) {
            setUzenet('Nagyobb számra gondoltam.');
        } else {
            setUzenet('Kisebb számra gondoltam.');
        }
        setTipp('');
    };

    const ujJatek = () => {
        setCelszam(Math.floor(Math.random() * 100) + 1);
        setTipp('');
        setUzenet('');
        setProbalkozasok(0);
    };

    return e('div', { style: { padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fff' } },
        e('h2', null, 'Gondoltam egy számra (1-100)'),
        e('form', { onSubmit: ellenorzes, style: { display: 'flex', gap: '10px', alignItems: 'center' } },
            e('input', { 
                type: 'number', 
                value: tipp, 
                onChange: (ev) => setTipp(ev.target.value), 
                placeholder: 'Tipped...',
                min: '1', max: '100', required: true,
                style: { margin: '0', width: 'auto' }
            }),
            e('button', { type: 'submit', style: { margin: '0' } }, 'Tippelek')
        ),
        e('p', { style: { fontWeight: 'bold', margin: '15px 0' } }, uzenet),
        e('p', null, `Próbálkozások száma: ${probalkozasok}`),
        uzenet.includes('Gratulálok') && e('button', { onClick: ujJatek, style: { backgroundColor: '#f1c40f', color: '#000' } }, 'Új játék')
    );
}

export default SzamKitalalo;