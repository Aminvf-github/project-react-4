import React from 'react'

const CardItem = ({data}) => {
  return <div className=' hover:scale-110 transition-all bg-gradient-to-r from-green-300 to-yellow-300 w-80 h-50 mx-auto rounded-lg cursor-pointer'>
    <img src={`https://robohash.org/${data.id}`} alt={data.name}  className='mx-auto w-60 h-60 mb-3'/>
    <b className='text-2xl text-slate-500'>{data.name}</b>
  </div>;
}

export default CardItem