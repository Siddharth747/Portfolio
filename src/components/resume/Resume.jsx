import React from 'react'
import "./resume.css";
import Data from './Data';
import Card from './Card';

const chunkArray = (arr, chunkSize)=>{
    const chunks = [];
    for(let i=0;i<arr.length; i += chunkSize){
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
}

const Resume = () => {
  const chunks = chunkArray(Data, 4);
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Experience</h2>

      <div className="resume__container grid">
        {chunks.map((chunk, colIndex) => (
          <div className="timeline grid" key={colIndex}>
            {chunk.map((val, id)=>{
              return (
                <Card key={id} icon={val.icon} title={val.title} year={val.year} desc={val.desc}/>
              )
          })}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Resume
