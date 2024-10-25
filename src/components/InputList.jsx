

import React from 'react'
import { useState } from 'react'

import './inputList.css'

import ListItem from './ListItem'
import DeleteAll from './DeleteAll'

function InputList(){

    const [ items, setItems] = useState([])
    const [ text, setText ] = useState("")
    const [ complete, setComplete ] = useState(false)


    function click(event){
        event.preventDefault()

        if(text.trim()){
            setItems([...items, text])
            setText("")
        }
    }

    function deleteAll(){
        setItems([])
    }
    
    function deleteByTarget(item){
        const newItem = items.filter( i => i !== item)
        setItems(newItem)
    }

    function hasCompleted(){
        setComplete(props => !props)
    }

    return(
    <div className='divForm'>
        <form className='inputList' onSubmit={click}>
            <input type="text"
             placeholder='Adicione uma tarefa'
             value={text} 
             onChange={(event) => {setText(event.target.value)}}
             />

            <button type='submit'>add</button>
        </form> 

            {items.map((item, index) => {
                return <ListItem key={index} text={item} deleteItem = {() => deleteByTarget(item)}/>
            })}

            {items.length > 1 ? <DeleteAll onClick={deleteAll}  /> : ""}
       


    </div>
    )
}

export default InputList



