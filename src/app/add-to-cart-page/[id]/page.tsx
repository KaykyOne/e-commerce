type Props = {
    params: {
        id: string
    }
}

export default function page({ params }: Props) {
    console.log(params.id)
    return (
        <div>page</div>
    )
}
