import { useEffect, useState } from 'react'
import './App.scss'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'
import { log } from 'console'

const App = () => {
  const [data, setData] = useState<string>('');
  const [characters, setCharacters] = useState<number>(0)
  const [words, setWords] = useState<number>(0)

  const calculateWords = (value: string)=>{
    const numberOfCharacters = value.split(' ');
    if(numberOfCharacters.length > 0){
      const newNumberWithoutEmptyString = numberOfCharacters.filter((word: string) => word !== '');
      setWords(newNumberWithoutEmptyString.length);
    }
  }

  const calculateCharacters = (value: string)=>{
    setCharacters(value.length)
  }

  const calculateSentences = (value: string )=>{
    const containsDot =  value.split('.')
    const containsExclamationMark =  value.split('!')
    const containsQuestionMark =  value.split('?')

    if(containsDot || containsExclamationMark || containsQuestionMark){
      const newDotsArrar = containsDot.filter((word: string) => word !== '');
      console.log("=> containsDot",newDotsArrar)
      // console.log("=> containsExclamationMark",containsExclamationMark)
      // console.log("=> containsQuestionMark",containsQuestionMark)

      const newSentencesArr =[...newDotsArrar, ...containsExclamationMark, ...containsQuestionMark] 
    }

  }

  console.log("data", data)
  useEffect(()=>{
    if(data){
      calculateWords(data)
      calculateCharacters(data)
      calculateSentences(data)
    }
  },[data])

  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox characters={characters} words={words}/>
          <TextArea data={data} setData={setData}/>
          <BottomResultBox />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
