export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug: code } = await params
  return (
    <>
      <h1>Country: {code}</h1>
    </>
  )
}
