import React from 'react'
import "./Filtre.css"
const Filtre = () => {
    let data = [{ name: 'Naruto', img: 'https://logo-marque.com/wp-content/uploads/2021/08/Akatsuki-Logo.png' }, { name: 'Fairy tail', img: 'https://i.pinimg.com/originals/10/38/88/1038884cdeb330c2ad1064c5b82c7e9b.png' }, { name: 'SNK', img: 'https://files.cults3d.com/uploaders/16984949/illustration-file/e06db534-497d-4301-a738-86b19edf3a59/pngwing.com.png' }, { name: 'DBZ', img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9822a358-cf7a-4e2a-b89b-5e5514ec4bc5/d5alfww-7e050137-0dd5-4f67-81f8-0c36258c6171.png/v1/fill/w_1024,h_804/dragonball_z_logo_png_by_cmorigins_d5alfww-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODA0IiwicGF0aCI6IlwvZlwvOTgyMmEzNTgtY2Y3YS00ZTJhLWI4OWItNWU1NTE0ZWM0YmM1XC9kNWFsZnd3LTdlMDUwMTM3LTBkZDUtNGY2Ny04MWY4LTBjMzYyNThjNjE3MS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.aZhgjAA2STDQ2pH179c-ygJCGCCJ7OW0k0GrFevtjMU' }]
    return (

        data.map((el, i) =>
            <div className='filtre'>
                <img className='imgFilter' src={el.img} />
            </div>
        )

    )
}

export default Filtre