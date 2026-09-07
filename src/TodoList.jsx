import React, { useEffect, useState } from 'react'
import { ref, set,push,onValue,remove  } from "firebase/database";
import { db } from '../firebase.config';
const TodoList = () => {
    const [inputval, setinputval] = useState("")
    const [list, setlist] = useState([])

    // this is the condition for not push data on firebase if input is empty=================
    function abc(){
        if(inputval!="")return inputval
    }
    const o=abc()

    // this is the condition for not push data on firebase if input is empty=================

function writeUserData() {
  set(push(ref(db, 'shoplist/')), {
    list:o   //this is the conditioning variable======================
  });
  setinputval("")
}
useEffect(() => {

const starCountRef = ref(db, 'shoplist/');
onValue(starCountRef, (snapshot) => {
    let arr=[]
snapshot.forEach((item)=>{
    let h=item.key
   arr.push({...item.val(),h})
})
setlist(arr)
});

}, [])



function handleDelete(delet){
    console.log(delet)
    remove(ref(db, 'shoplist/'+delet.h))

}

    return (
        <center className='mt-5 '>
            <div className='w-66.25 rounded-full pl-2 border-2 border-green-500 flex'>

                <input value={inputval} type="text" placeholder='write your tasks...' className='outline-none pb-1' onChange={(e) => setinputval(e.target.value)} />
                <button onClick={writeUserData} className='border-x-2 border-green-500 bg-green-500 pb-1 px-5 rounded-full cursor-pointer hover:text-green-500 hover:bg-white duration-300 active:scale-75'>Add</button>
            </div>

            <div className='shadow bg-[#fefef0] shadow-cyan-500/50 w-80 p-5 mt-3 rounded-3xl'>
            {list.map((item)=>(
                    <div key={item.h} className='flex justify-between w-full bg-black text-white border-5 border-[#bebebe] mb-1 rounded-2xl px-2 items-center'>

                        <p >{item.list}</p>
                         <button className='cursor-pointer text-red-600' onClick={()=>handleDelete(item)}>X</button>
                    </div>

                    ))}
                    </div>
        </center>
    )
}

export default TodoList