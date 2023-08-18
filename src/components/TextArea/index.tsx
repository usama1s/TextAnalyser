import React, { useState } from 'react';
import './index.scss'

interface props {
  data: string;
  setData: Function
}

const TextArea: React.FC<props> = ({data, setData}) => {

  return <textarea className="text-area" placeholder="Paste your text here..." onChange={(e)=> setData(e.target.value)}/>
}

export default TextArea
