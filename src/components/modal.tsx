"use client"
import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'

type ModalProps = {
    children: React.ReactNode
    onClose: () => void
}

export default function Modal({ children, onClose }: ModalProps) {

    const modalRoot = document.getElementById('container')

    useEffect(() => {
        if (modalRoot) {
            document.body.style.overflow = 'hidden'
        }
    }, [modalRoot])

    function handleClose() {
        // sua lógica extra
        document.body.style.overflow = 'auto'

        // chama o original
        onClose?.()
    }

    if (!modalRoot) return null

    return createPortal(
        <div className='fixed w-full h-full flex justify-center items-center bg-black/30 backdrop-blur-md z-20'>
            <div className='flex flex-col justify-center items-center bg-neutral-900 rounded-lgz-50'>
                <div className='w-full flex items-end justify-end p-4'>
                    <button onClick={handleClose} className=' top-2 right-2 text-white text-xl font-bold cursor-pointer'>X</button>
                </div>
                <div className='w-full h-full'>
                    {children}
                </div>
            </div>
        </div>,
        modalRoot
    )
}
