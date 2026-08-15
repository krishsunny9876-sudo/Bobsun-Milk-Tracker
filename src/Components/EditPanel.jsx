import React, { useEffect, useState } from 'react'

export default function EditPanel({ obj, setObj, editEntry }) {

    const [quant, setQuant] = useState(0)
    const [seller, setSeller] = useState('')

    useEffect(() => {
        if (obj) {
            setQuant(obj.quantity)
            setSeller(obj.sellerName)
        }
    }, [obj])

    function handleSubmit(e) {
        e.preventDefault();

        const newObj = {
            id: obj.id,
            quantity: quant,
            sellerName: seller,
            date: obj.date
        }
        editEntry(obj.id, newObj)
    }

    return (
        <>
            {obj && <div className='panel'>
                <div className='panelDiv' style={{ position: "relative" }}>
                    <button className='deleteBtn' onClick={() => (setObj(null))} style={{ position: "absolute", top: "5%", right: "5%" }}>x</button>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="quant">Quantity</label>
                            <input className='inptEdit' type="number" id="qant" placeholder='For eg:1'
                                value={quant}
                                onChange={(e) => (setQuant(e.target.value))}
                                required />
                        </div>
                        <div style={{ marginTop: "10px" }}>
                            <label htmlFor="name">Seller Name</label>
                            <input className='inptEdit2' type="text" id="name" placeholder='Name'
                                value={seller}
                                onChange={(e) => (setSeller(e.target.value))}
                                required />
                        </div>
                        <button className='editBtn' style={{ marginTop: "30px" }}><strong>Save</strong></button>
                    </form>
                </div>
            </div>}
        </>
    )
}
