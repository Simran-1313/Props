import React,{useState} from 'react'
import Child from './Child'
import './Parent.css'

const Parent = ({className}) => {
    const [childColor,setChildColor]= useState('gray')
    const [color,setColor]= useState('black')
    function updateColor(color){
        setColor(color);

    }
    const changeChildColor = () =>{
        const colors = ['maroon','olive','silver','lime','navy']
        const randomColor = colors[Math.floor(Math.random()*colors.length)]
        setChildColor(randomColor)
    }
  return (
    <div className={` text-white flex-col flex-wrap ${className}`} style={{backgroundColor: color}} >Parent 
        <button className=' ml-[2rem] bg-white text-blue-600 font-bold w-16 rounded-lg ' onClick={changeChildColor}>Button</button>
        <Child  className='child' childColor={childColor} updateColor={updateColor} ></Child>
        <Child  className='child' childColor={childColor} updateColor={updateColor} ></Child>
        <Child  className='child' childColor={childColor} updateColor={updateColor} ></Child>
        <Child  className='child' childColor={childColor} updateColor={updateColor} ></Child>
    </div>
  )
}

export default Parent