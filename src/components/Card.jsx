/* eslint-disable react/prop-types */


const Card = ({firstName, lastName,age,gender}) => {
    
  return (
    <div className="card bg-base-300 w-96 shadow-xl">
    <figure>
      <img
        src="https://avatars.githubusercontent.com/u/151808307?v=4"
        alt="Shoes" />
    </figure>
    <div className="card-body">
        <div className='flex  flex-col items-center gap-4'>
        <h2 className="card-title">Name:  {firstName} {lastName}</h2>
      <h3>Age: {age}</h3>
      <h3>Gender: {gender}</h3>
        </div>
     
      <div className="card-actions justify-center gap-5 mt-4">
        <button className="btn btn-primary">Ignore</button>
        <button className="btn btn-secondary">Interested</button>
      </div>
    </div>
  </div>
  )
}



export default Card
