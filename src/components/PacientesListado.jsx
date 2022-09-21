import Paciente  from "./Paciente"

const PacientesListado = ({pacientes}) => {

  return (
    <div className='md:w-1/2 lg:w-2.5/5 ml-3 h-screen overflow-y-scroll'>
      {pacientes && pacientes.length ? (
        <>
          <h1 className='font-black text-2xl text-center'>Listado de Pacientes</h1>
          <p className='font-bold mt-2 text-center'>Administra tus 
          <span className='text-indigo-400 text-1.5lx'>{''} Pacientes y citas</span> </p>

          {pacientes.map((paciente) => {
            return  (
              <Paciente 
              key={paciente.id}
              paciente={paciente}/>
            )
          })}
        </>
      ) : (
        <>
          <h1 className='font-black text-2xl text-center'>No hay pacientes</h1>
          <p className='font-bold mt-2 text-center'> Comienza agregando pacientes
          <span className='text-indigo-400 text-1.5lx'>{''} y apareceran en este lugar</span> </p>
        </>
      )}
  </div>
  )
}

export default PacientesListado
