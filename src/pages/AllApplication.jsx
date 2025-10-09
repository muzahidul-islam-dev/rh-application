import React, { useEffect, useState } from 'react'
import TrandingApp from '../components/TrandingApp';

function AllApplication() {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/data.json').then(res => res.json()).then(response => {
            setItems(response)
            setLoading(false)
        });
    }, [])
    return (
        <div>
            <TrandingApp showTotalResults showSearch items={items} isLoading={loading} title={'Our All Applications'} content={'Explore All Apps on the Market developed by us. We code for Millions'} />
        </div>
    )
}

export default AllApplication
