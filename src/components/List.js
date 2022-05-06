import React from 'react'

 function List({employees}) {
  return (
    <div>
        {
            employees.map( (employee) => {
                const {id,name,age,image} = employee;
                    return(
                        <article key={id} className='person'>
                            <img src={image} alt={name}></img>
                            <div>
                                <h4>{name}</h4>
                                <p>{age} years old.</p>
                            </div>
                        </article>
                    )
            })
        }
    </div>
  )
}

export default List;