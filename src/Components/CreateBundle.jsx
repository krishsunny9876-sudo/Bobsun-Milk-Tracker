import React, { useRef, useState } from 'react'

export default function CreateBundle({
    close,
    createBundle
}) {

    const [bundleName, setBundleName] = useState('')

    const inputRef = useRef()

    function handleCreate() {
        createBundle(bundleName)
    }

    return (
        <div className='modalOverlay'>

            <div className='modalBox'>

                <h2>Create New Bundle</h2>

                <input
                    type='text'
                    placeholder='Enter bundle name'
                    value={bundleName}
                    ref={inputRef}
                    onChange={(e) =>
                        setBundleName(e.target.value)
                    }
                />

                <div className='modalButtons'>

                    <button
                        className='btn_desi2'
                        onClick={close}
                    >
                        Cancel
                    </button>

                    <button
                        className='btn_desi'
                        onClick={handleCreate}
                    >
                        Create Bundle
                    </button>

                </div>

            </div>

        </div>
    )
}
