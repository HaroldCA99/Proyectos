import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({pacientes, setPacientes}) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintoma, setSintoma] = useState('');

  const [error, setError] = useState(false);

// generar id unico para cada objeto
  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    // validacion del formulario
    if([nombre, propietario, email, fecha, sintoma].includes('')){
      setError(true);
      return;
    }
    setError(false)
    // construimos objeto de paciente
    const objetoPaciente={
        nombre, propietario, email, fecha, sintoma, id: generarId()
    }

    setPacientes([...pacientes, objetoPaciente]);
    // reiniciar el form
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintoma('')
    }

  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <div className="">
        <h1 className='font-black text-2xl text-center'>Seguimiento de pacientes</h1>
        <p className='font-bold mt-2 text-center'>Añade pacientes y 
        <span className='text-indigo-400 text-1.5xl'>{''} Administralos</span> </p>
      </div>

      <form onSubmit={handleSubmit} action="" className="bg-white mt-5 ">
        { error && <Error mensaje="Todos los campos son obligatorios"/>
        }
        <div className="font-medium p-2" >
            <label htmlFor="mascota" className="uppercase block pb-2 font-bold">
              Nombre mascota </label>
            <input type="text" id="mascota" placeholder="Nombre de la mascota" 
            className=" text-center w-full border-2 rounded-md placeholder-slate-500"
            value={nombre} onChange={ (e) => setNombre(e.target.value)}/>
        </div>
        <div className="font-medium p-2" >
            <label htmlFor="propietario" className="uppercase block pb-2 font-bold">
              Nombre propietario </label>
            <input type="text" id="propietario" placeholder="Nombre de la propietario" 
            className=" text-center w-full border-2 rounded-md placeholder-slate-500"
            value={propietario} onChange={ (e) => setPropietario(e.target.value)}/>
        </div>
        <div className="font-medium p-2" >
            <label htmlFor="email" className="uppercase block pb-2 font-bold">
              Email </label>
            <input type="text" id="email" placeholder="Nombre del email" 
            className=" text-center w-full border-2 rounded-md placeholder-slate-500"
            value={email} onChange={ (e) => setEmail(e.target.value)}/>
        </div>
        <div className="font-medium p-2" >
            <label htmlFor="fecha" className="uppercase block pb-2 font-bold">
              Alta </label>
            <input type="date" id="fecha" 
            className=" text-center w-full border-2 rounded-md"
            value={fecha} onChange={ (e) => setFecha(e.target.value)}/>
        </div>
        <div className="font-medium p-2" >
            <label htmlFor="sintoma" className="uppercase block pb-2 font-bold">
              Descripcion </label>
            <textarea name="" id="sintoma" cols="30" rows="5" 
            placeholder="  Describe la enfermedad" 
            className="w-full"
            value={sintoma} onChange={ (e) => setSintoma(e.target.value)}>

            </textarea>
        </div>
        <div className="font-medium p-2" >
          <button className="bg-indigo-600 w-full rounded-lg py-3 text-white font-bold
           hover:bg-indigo-500 transition-all" >Agregar paciente</button>
        </div>
       
      </form>
    </div>
  )
}

export default Formulario
