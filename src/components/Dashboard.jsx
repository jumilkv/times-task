import react, { useEffect, useState } from 'react'
import './scss/Dashboard.scss'
import Footer from './Footer'
import Header from './Header'
import CircularProgress from '@mui/material/CircularProgress';


export default function Dahboard() {

    const [state, setState] = useState([])
    const [stateCopy, setStateCopy] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const handleFilter = (region) => {
        if (region === "All") {
            setState(stateCopy)
        } else {
            setState(() => stateCopy.filter(item => item.region === region))
        }
    }

    useEffect(() => {
        setIsLoading(true)
        fetch('https://restcountries.com/v2/all?fields=name,region,flag')
            .then(res => res.json())
            .then(result => {
                setState(result)
                setStateCopy(result)
                setIsLoading(false)
            }).catch(err => {
                setIsLoading(false)
            })
    }, [])

    return (
        <div>
            <Header handleFilter={handleFilter} />
            {isLoading ? <CircularProgress className='loading' /> :
                <div className='dashboard'>
                    {state.length > 0 ? state.map((data, index) => (
                        <div key={index} className='card'>
                            <div>
                                <img src={data.flag} width={100} height={70} />
                            </div>
                            <div>
                                <h4>{data.name}</h4>
                                <p>{data.region}</p>
                            </div>
                        </div>
                    )) : <p>No Data Found</p>}
                </div>}
            <Footer />
        </div>
    )
}