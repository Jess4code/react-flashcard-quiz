import React from 'react'
import Flashcard from './Flashcard'


export default function FlashcardList({ flashcards }) {
  return (
    <div className='flashcard-grid'>
      {flashcards.map((flashcard, idx) => {
        return <Flashcard flashcard = {flashcard} key = {idx}/>
      })}
    </div>
  )
}
