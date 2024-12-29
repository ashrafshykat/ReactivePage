import React from 'react'
import { useParams } from 'react-router-dom'
export default function () {
    const { id } = useParams();
  return (
    <div>
        I am a user and my name is {id}
    </div>
  )
}
