import React from 'react'
import './CardFiltred.css'

const CardFiltred = () => {
    let dataCard = [{ theme: 'naruto', name: 'Konoha', img: 'https://imgix.ranker.com/list_img_v2/17045/3077045/original/3077045' }, { theme: 'naruto', name: 'iwa', img: 'https://point-geek.fr/wp-content/uploads/2018/09/Iwa.jpg' }, { theme: 'naruto', name: 'Kiri', img: 'https://point-geek.fr/wp-content/uploads/2018/09/Kirivillage.png' }
        , { theme: 'fairy tail', name: 'Magniolia', img: 'https://img.wattpad.com/96bcb7f1c9e3de3f3feab3998683c00b49ba882a/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f56493150795577593137633932773d3d2d3334313838313637342e313438643330623633643264656133663837323236373038383331342e6a7067?s=fit&w=720&h=720' }, { theme: 'fairy tail', name: 'Extalia', img: 'https://static.wikia.nocookie.net/fairy-tail/images/1/1c/Magnolia1.png/revision/latest?cb=20130103005929&path-prefix=fr' }, { theme: 'fairy tail', name: 'crocus', img: 'https://static.wikia.nocookie.net/fairy-tail/images/f/f4/Crocus_anime.png/revision/latest?cb=20130614105854&path-prefix=fr' }, { theme: 'SNK', name: 'Shiganshina', img: 'https://m.media-amazon.com/images/M/MV5BMTEzNzdiZDktNzliZC00MTZkLWE4MDAtNDgzYTQzMTk2NjZmXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg' }, { theme: 'SNK', name: 'Trost', img: 'https://m.media-amazon.com/images/M/MV5BMzg3ZDI4MmEtMDk2ZC00OTFmLWFkYzgtMjZkNTI5YzljZjJkXkEyXkFqcGdeQXVyODc5MTI0NjU@._V1_.jpg' },
    { theme: 'SNK', name: 'Mitras', img: 'https://pm1.narvii.com/6535/f437b2e327ab9860038692e87c9ac7984dbb4d22_hq.jpg' }, { theme: 'DBZ', name: 'Kaïô', img: 'https://pbs.twimg.com/media/CgBX7kzWEAI4fSZ?format=jpg&name=small' }, { theme: 'DBZ', name: 'Namek', img: 'https://cdn.shopify.com/s/files/1/0039/8668/6063/files/planete_namek_grande.jpg?v=1539696299' }, { theme: 'DBZ', name: 'Beerus', img: '' }
    ]
    return (
        dataCard.map((el, i) =>
            <div className='cardFiltred'>
                <img className='imageVille' src={el.img} alt="" />
                <p className='nomDeLaVille'>{el.name}</p>
            </div>
        ))
}

export default CardFiltred