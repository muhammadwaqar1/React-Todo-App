import React from 'react'
import { useState } from 'react'
function Todo() {
  const [text, setText] = useState("")
  const [name, setName] = useState([])

  const add = () => {
    if (text === "") {
      alert("Please filesd input field")
    }
    else {
      setName([...name, text])
      setText("")
      console.log(name)
    }
  }
  const edit = (value) => {
    setText(value)
    console.log(name)
  }
  const update = (_, index) => {
    if (text === "") {
      alert("Pleade update value")
    }
    else {
      name.splice(index, 1, text)
      setText("")
      console.log(name)
    }

  }
  const delet = (id) => {
    let a = name.filter((_, index) => {
      return index !== id;
    })
    console.log(a)
    setName(a)
  }

  return (
    <div className='m-auto mt-4' >
      <div>
        <input className=" my-5 mr-3 rounded-lg" type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={add}>Add Task</button>
      </div>

      {name.map((value, index) => {
        return (
          <>
            <div key={index} className="w-3/12 rounded-lg flex flex-col m-auto   lg:shadow-md  mt-1">
              <div className='text-left m-4'>
                <li className='list-none'>{value}</li>
              </div>
              <div className='mt-12 flex justify-end mb-2'>
                <button className='text-black bg-blue-300 border-black rounded-lg w-16 mx-1  ' onClick={() => {
                  edit(value)
                }}>Edit</button>
                <button className='text-black bg-blue-300 border-black rounded-lg w-16 mx-1' onClick={() => {
                  update(value, index)
                }}>Update</button>
                <button className='text-black bg-blue-300 border-black rounded-lg w-16 mx-1' onClick={() => {
                  delet(index)
                }}>Delet</button>
              </div>

            </div>

          </>
        )
      })
      }
    </div>
  )
}

export default Todo