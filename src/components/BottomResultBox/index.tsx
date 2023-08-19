import './index.scss'

interface Props{
  readingTime?: number;
  longestWord?: string;
}

const BottomResultBox: React.FC<Props> = ({readingTime, longestWord}) => {
  const bottomResultBar = [
    {
      title: 'Average Reading Time:',
      value: "~" + readingTime + " minute",
    },
    {
      title: 'Longest word:',
      value: longestWord,
    },
  ]

  return (
    <div className="bottom-result-bar">
      {bottomResultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default BottomResultBox
