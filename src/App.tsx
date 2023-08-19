import { useEffect, useState } from 'react'
import './App.scss'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'


const App = () => {
  const [data, setData] = useState<string>('');
  const [characters, setCharacters] = useState<number>(0)
  const [words, setWords] = useState<number>(0)
  const [sentences, setSentences] = useState<number>(0)
  const [paragraphs, setParagraphs] = useState<number>(0)
  const [readingTime, setReadingTime] = useState<number>(0)
  const [longestWord, setLongestWord] = useState<string>("")

  const calculateWords = (value: string)=>{
    const numberOfCharacters = value.split(' ');
    if(numberOfCharacters.length > 0){
      const newNumberWithoutEmptyString = numberOfCharacters.filter((word: string) => word !== '');
      setWords(newNumberWithoutEmptyString.length);
    }
  }

  const calculateCharactersReacingTime = (value: string)=>{
    setCharacters(value.length)
    setReadingTime(Math.ceil(value.length/225))

    
  }

  const calculateSentences = (value: string )=>{
    value = value.replace(/ /g, '');
    setSentences(value.replace(/[^.&&!&&?]/g, "").length)
  }

  const calculateParagraphs = (value: string )=>{

    const numParagraphs = value.replace(/\n$/gm, '').split(/\n/).length;
    setParagraphs(numParagraphs)
  }

  const findLongestWord = (value: string )=>{

    const test=value.split(' ');

    console.log(test);
 
  }

  
  useEffect(()=>{
    if(data){
      calculateWords(data)
      calculateCharactersReacingTime(data)
      calculateSentences(data)
      calculateParagraphs(data)
      findLongestWord(data)
    }
  },[data])

  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox characters={characters} words={words} sentences={sentences} paragraphs={paragraphs}/>
          <TextArea data={data} setData={setData}/>
          <BottomResultBox readingTime={readingTime} longestWord={longestWord}/>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
