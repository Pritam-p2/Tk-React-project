import React from 'react'


const Home = ({slice,loadMore}) => {


  return (
    <section className='py-4 container'>
      <div className='row justify-content-center'>


      {slice.map((item,index)=>{
        return(
          <div className='col-11 col-md col-lg-3 mx-0 mb-4' key={index}>
          <div className='card p-0 overflow-hidden h-100 shadow'>
            <img src={item.image} className='card-img-top'/>
            <div className='card-body'>
              <h5 className='card-title'>{item.name}</h5>
              <p className='card-text'>{item.description}</p>

            </div>
          </div>
        </div>
        )
      })}
     
      </div>
      <button className='btn btn-dark d-block w-100' onClick={()=>loadMore()}>
          Load More
      </button>
    </section>

  )
}

export default Home