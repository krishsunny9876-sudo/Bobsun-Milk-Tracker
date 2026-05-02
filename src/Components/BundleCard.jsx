import React from 'react'

export default function BundleCard({
    bundleName,
    data,
    openBundle,
    deletes
}) {

    const totalMilk = data.reduce((acc, curr) => {
        return acc + Number(curr.quantity)
    }, 0)

    return (
        <div style={{margin:"10px",borderRadius:"20px"}}>
            <div
                className='bundleCard'
                onClick={openBundle}
                style={{borderBottomLeftRadius:"0px",borderBottomRightRadius:"0px"}}
            >

                <h2>{bundleName}</h2>

                <p>{data.length} Entries</p>

                <h3>
                    Total : {totalMilk} Liters
                </h3>
            </div>
            <button className='btn_colors' style={{ width: "100%", height: "50px"}} onClick={() => deletes(bundleName)}>Delete</button>
        </div>
    )
}
