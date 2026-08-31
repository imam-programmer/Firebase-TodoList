import React, { useEffect, useState } from 'react'
import { ref, set,push,onValue  } from "firebase/database";
import { db } from '../firebase.config';
const TodoList = () => {
    const [inputval, setinputval] = useState("")
    const [list, setlist] = useState([])
function writeUserData() {
  set(push(ref(db, 'shoplist/')), {
    list:inputval
  });
  setinputval("")
}
useEffect(() => {

const starCountRef = ref(db, 'shoplist/');
onValue(starCountRef, (snapshot) => {
    let arr=[]
snapshot.forEach((item)=>{
   arr.push(item.val())
})
setlist(arr)
});

}, [])

console.log(list)
    return (
        <center className='mt-5 '>
            <div className='w-66.25 rounded-full pl-2 border-2 border-green-500 flex'>

                <input value={inputval} type="text" placeholder='write your tasks...' className='outline-none pb-1' onChange={(e) => setinputval(e.target.value)} />
                <button onClick={writeUserData} className='border-x-2 border-green-500 bg-green-500 pb-1 px-5 rounded-full cursor-pointer hover:text-green-500 hover:bg-white duration-300 active:scale-75'>Add</button>
            </div>

            {list.map((item)=>(
                <p>{item.list}</p>
            ))}
        </center>
    )
}

export default TodoList