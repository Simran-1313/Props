import React,{useState} from 'react'

const Child = ({childColor,updateColor,className}) => {
   
    
    const changeColor = ()=>{
        const colors = ['red','blue', 'green','orange','purple'];
        const randomColor = colors[Math.floor(Math.random()*colors.length)];
        updateColor(randomColor);
    }

  return (
    <div className={`${className}`} style={{backgroundColor:childColor}}>Child
       
        <button className=' ml-[2.5rem] bg-white text-blue-600 font-bold w-16 rounded-lg '  onClick={changeColor}>Button</button>
        
    </div>
  )
}

export default Child