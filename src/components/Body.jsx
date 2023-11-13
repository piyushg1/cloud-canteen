import ResCard from "./ResCard"
import { d } from '../../data/config.js'

function Body() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', margin: '2rem' }}>
            {d.map((data) => {
                return (
                    <ResCard key={data.id} {...data} />
                )
            })}
        </div>
    )
}

export default Body