import React from 'react'

const Cards = ({titles}) => {
  const renderedTitles = titles.map((title)=>{
    return(
      <div key={title.id} className="card-body">
        <h1 className="card-title">{title.title}</h1>
        <p className="card-text">{title.content}</p>
        <a href="#" className="btn btn-primary">{title.btn}</a>
      </div>
    );
  })
  return (
    <div className="card">
      {renderedTitles}
    </div>
  )
}

export default Cards
