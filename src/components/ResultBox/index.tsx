import './index.scss'

interface Props{
  words?: number;
  characters?: number
}

const ResultBox: React.FC<Props> = ({words, characters}) => {
  const resultBar = [
    {
      title: 'Words',
      value: words,
    },
    {
      title: 'Characters',
      value: characters,
    },
    {
      title: 'Sentences',
      value: 0,
    },
    {
      title: 'Paragraphs ',
      value: 0,
    },
    {
      title: 'Pronouns',
      value: 0,
    },
  ]

  return (
    <div className="result-bar">
      {resultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default ResultBox
