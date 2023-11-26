import ResCard from "./ResCard"
import { d } from '../../data/config.js'
import { useState } from "react"

function Body() {
    const [inp, setInp] = useState('')

    const filteredData = d.filter((e) => {
        return e.name.toLowerCase().includes(inp.toLowerCase());
    });

    const handleChange = (e) => {
        setInp(e.target.value)
    }

    return (
        <>
            <input type="text" value={inp} onChange={(e) => handleChange(e)} placeholder="search" style={{
                padding: '10px', borderRadius: '4px', border: '1px solid #ccc', marginTop: '4.2rem', marginLeft: '5rem'
            }} />

            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', margin: '2rem' }}>
                {filteredData.map((data) => {
                    return (
                        <ResCard key={data.id} {...data} />
                    )
                })}
            </div>
        </>
    )
}

export default Body