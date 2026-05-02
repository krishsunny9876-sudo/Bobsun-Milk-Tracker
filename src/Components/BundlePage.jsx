import React, { useEffect, useRef, useState } from 'react'

export default function BundlePage({
    bundleName,
    bundles,
    setBundles,
    goBack
}) {

    const [price, setPrice] = useState(localStorage.getItem(`milkprice${bundleName}`) ? localStorage.getItem(`milkprice${bundleName}`) : '');
    const [quantity, setQuantity] = useState('')
    const [sellerName, setSellerName] = useState('')

    const inputRef = useRef()

    const bundleData = bundles[bundleName]

    const totalMilk = bundleData.reduce((acc, curr) => {
        return acc + Number(curr.quantity)
    }, 0)

    function addEntry() {

        if (!quantity || !sellerName) {
            alert("Fill all fields")
            return
        }

        const today = new Date()

        const formattedDate =
            `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`

        const newEntry = {
            quantity,
            sellerName,
            date: formattedDate
        }

        const updatedBundle = [
            ...bundleData,
            newEntry
        ]

        setBundles({
            ...bundles,
            [bundleName]: updatedBundle
        })

        setQuantity('')
        setSellerName('')

        inputRef.current.focus()
    }

    function deleteEntry(index) {

        const updated = bundleData.filter(
            (_, i) => i !== index
        )

        setBundles({
            ...bundles,
            [bundleName]: updated
        })
    }

    useEffect(() => {
        localStorage.setItem(
            `milkprice${bundleName}`,
            price
        )
    }, [price])

    return (
        <div className='MainBG'>
            <div className='bundlePage'>

                <button
                    className='btn_desi'
                    onClick={goBack}
                >
                    ← Back To Bundles
                </button>

                <div className='bundleHeader' style={{ flexWrap: "wrap" }}>

                    <div>
                        <h1>{bundleName}</h1>
                        <p>{bundleData.length} Entries</p>
                    </div>

                    <div style={{ display: "flex" }}>

                        <div className='totalBox' style={{ marginRight: "10px" }}>
                            <h2>{totalMilk} Liters</h2>
                            <p>Total Milk</p>
                        </div>
                        <div className='totalBox'>
                            <h2>{totalMilk * Number(price)} Rupees</h2>
                            <p>Total Milk Price</p>
                        </div>
                    </div>
                </div>

                <div className='entryInputs'>

                    <input
                        type='text'
                        placeholder='Price Of 1L Milk'
                        value={price}
                        onChange={(e) => { setPrice(e.target.value) }
                        }
                    />

                    <input
                        type='number'
                        placeholder='Quantity'
                        value={quantity}
                        ref={inputRef}
                        onChange={(e) =>
                            setQuantity(e.target.value)
                        }
                    />

                    <input
                        type='text'
                        placeholder='Seller Name'
                        value={sellerName}
                        onChange={(e) =>
                            setSellerName(e.target.value)
                        }
                    />

                    <button
                        className='btn_desi2'
                        onClick={addEntry}
                    >
                        Add Entry
                    </button>

                </div>

                <div className='table_div' style={{}}>

                    <table>

                        <thead>
                            <tr>
                                <th>Sr No.</th>
                                <th>Quantity</th>
                                <th>Seller</th>
                                <th>Date</th>
                                <th>Delete</th>
                            </tr>
                        </thead>

                        <tbody className='table_color'>

                            {
                                bundleData.map((data, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>
                                            {data.quantity} L
                                        </td>
                                        <td>
                                            {data.sellerName}
                                        </td>
                                        <td>{data.date}</td>
                                        <td>
                                            <button
                                                className='deleteBtn'
                                                onClick={() =>
                                                    deleteEntry(index)
                                                }
                                            >
                                                X
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                </div>

            </div>
        </div>
    )
}
