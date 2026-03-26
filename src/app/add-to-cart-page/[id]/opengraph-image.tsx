import { ImageResponse } from 'next/og'
import UseProduct from "@/hooks/useProduct"
import { env } from '@/env'

type Props = {
    params: Promise<{ id: string }>
}

// Image metadata
export const alt = 'About Acme'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'



// Image generation
export default async function OgImage({ params }: Props) {

    const { id } = await params

    const { getProduct } = UseProduct()

    const product = await getProduct(id)

    const url = new URL(product?.image || env.NEXT_PUBLIC_API_BASE_URL).toString()

    new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 128,
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <img src={url} alt="Product" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
            </div>
        ),
        {
            ...size,
        }
    )
}
