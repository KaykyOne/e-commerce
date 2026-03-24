
export default async function page() {
  await new Promise(resolve => setTimeout(resolve, 2000))

  return (
    <div>page</div>
  )
}
 