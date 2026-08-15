import React, { useEffect, useState } from 'react'
import BundleCard from '../Components/BundleCard'
import CreateBundle from '../Components/CreateBundle'
import BundlePage from '../Components/BundlePage'

export default function Main() {

  const [bundles, setBundles] = useState({})
  const [showCreate, setShowCreate] = useState(false)
  const [selectedBundle, setSelectedBundle] = useState(null)

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("milkBundles")) || {}

    setBundles(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem(
      "milkBundles",
      JSON.stringify(bundles)
    )
  }, [bundles])

  function createBundle(bundleName) {

    if (!bundleName) return

    if (bundles[bundleName]) {
      alert("Bundle already exists")
      return
    }

    setBundles({
      ...bundles,
      [bundleName]: []
    })

    setShowCreate(false)
  }

  function deleteBundle(ids) {
    const { [ids]: deletes, ...newBundle } = bundles

    setBundles(newBundle);
    localStorage.removeItem(`milkprice${ids}`)

    console.log(bundles)
  }

  if (selectedBundle) {
    return (
      <BundlePage
        bundleName={selectedBundle}
        bundles={bundles}
        setBundles={setBundles}
        goBack={() => setSelectedBundle(null)}
      />
    )
  }

  return (
    <div className='MainBG'>
      <div className='mainContainer'>

        <div className='bundleTop'>

          <div>
            <h1>My Milk Bundles</h1>
            <p>Select a bundle to view records</p>
          </div>

          <button
            className='btn_desi'
            onClick={() => setShowCreate(true)}
          >
            + Add New Bundle
          </button>

        </div>

        <div className='bundleGrid' style={{
         
          display: "flex", flexDirection: "row", flexWrap: "wrap",
          justifyContent: "center", overflowY: "auto"
        }}>

          {
            Object.keys(bundles).map((bundleName) => (

              <BundleCard
                key={bundleName}
                bundleName={bundleName}
                data={bundles[bundleName]}
                openBundle={() =>
                  setSelectedBundle(bundleName)
                }
                deletes={deleteBundle}
              />

            ))
          }

        </div>

        {
          showCreate &&
          <CreateBundle
            close={() => setShowCreate(false)}
            createBundle={createBundle}
          />
        }
      </div>
    </div>
  )
}