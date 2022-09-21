const Paciente = ({paciente}) => {
  return (
    <div className="bg-white mt-5 rounded-md p-3 shadow-md">
        <p className='font-bold uppercase'>Nombre: <span className='font-normal normal-case'>{paciente.nombre}</span></p>
        <p className='font-bold uppercase'>Propietario: <span className='font-normal normal-case'>{paciente.propietario}</span></p>
        <p className='font-bold uppercase'>Email: <span className='font-normal normal-case'>{paciente.email}</span></p>
        <p className='font-bold uppercase'>Fecha alta: <span className='font-normal normal-case'>{paciente.fecha}</span></p>
        <p className='font-bold uppercase'>Sintomas <span className='font-normal normal-case'>{paciente.sintoma}</span></p>
        <div className="flex justify-between">
          <button type="button" className="bg-indigo-500 hover:bg-indigo-400 rounded-xl px-4 py-1 text-white font-bold my-4">EDITAR</button>
          <button type="button" className="bg-red-500 hover:bg-red-400 rounded-xl px-4 py-1  text-white font-bold my-4">ELIMINAR</button>
        </div>
    </div>
  )
}

export default Paciente
