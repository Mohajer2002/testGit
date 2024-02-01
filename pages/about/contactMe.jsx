import React, { useEffect, useState } from 'react'

function ContactMe({message}) {
  return (
    <div>
      <h1>{message.title}</h1>
    </div>
  )
}
export async function getServerSideProps(){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await res.json();

  return {
    props:{
      message : data
    }
  }
}
export default ContactMe;

// export async function getStaticProps() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//   const data = await res.json();
  
//   return {
//     props:{
//       message:data
//     }
//   }
// }



// function ContactMe () {
//   const [message , setMessage] = useState([]);
//   useEffect(()=>{
//     const fetchData= async ()=>{
//       try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//         const data = await res.json();
//         setMessage(data);
//       } catch (error) {
//         throw error('Not found');
//       }
//     }
//     fetchData();
//   },[])
//   if(message.length === 0){
//     return <div>loading...</div>
//   }
//   return (
//     <div>
//       <h1>{message.title}</h1>
//     </div>
//   )
// }

// export default ContactMe;