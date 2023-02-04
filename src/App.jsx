import { useState } from 'react'



function App() {

  const [consejo, setConsejo] = useState({
    id: 0,
    advice: "Click now"
  })
  const {advice, id} = consejo;

  //CONSULTA API
  const url = "https://api.adviceslip.com/advice";
  //FUNCION ASINCRONA
  const fetchApi = async() =>{
    //AWAIT = ESPERA 
    const resp = await fetch(url);
    const {slip} = await resp.json();

    setConsejo(slip);
  }

  const handleOn = () =>{
    fetchApi()
  }


  return (

    <div className=" bg-slate-700 p-4 text-center max-w-sm  md:max-w-lg  my-60 mx-auto rounded-xl shadow-lg flex justify-evenly items-center flex-col">

      <h1 key={id} className='text-green-400 mb-5 tracking-widest font-bold uppercase'>advise #{id}</h1>

      <p className=' text-white font-semibold mb-5 text-2xl'>"{advice}"</p>

      <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" /><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3" /><rect x="14" width="6" height="16" rx="3" /></g></g></svg>

      <button
        onClick={handleOn}
        className='hover:bg-green-600 h-16 m-none p-5 cursor-pointer bg-green-400 rounded-full relative top-14 '>
        <svg  width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733" /></svg>
      </button>

    </div>

  )
}

export default App
