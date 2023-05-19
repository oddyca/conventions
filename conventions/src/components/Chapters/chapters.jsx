export default function Chapters(props) {

  const { treaty, chapterNum } = props;

  console.log(`/${treaty}/chapter-${chapterNum}`)
  const renderContent = (data) => {
    return data.map()
  }

  return (
    <div>{treaty} {chapterNum}</div>
  )
}
