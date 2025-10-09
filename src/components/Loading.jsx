import React from 'react'
import { ClipLoader } from 'react-spinners'

function Loading() {
    return (
        <div className='h-[500px] w-full flex justify-center items-center'>
            <ClipLoader className='z-30' />
        </div>

    )
}

export default Loading
