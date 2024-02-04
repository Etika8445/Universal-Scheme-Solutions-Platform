import React from 'react'
// import Body from './Body';
const Homecard = ({key, name,scheme, img}) => {
  // const [name1,setname]= useState("cat");
    // let ctage="hi";
  // let bool= false;
  //  const update=(name)=>{
        // bool=true;
        // console.log(name);
        // setname(name);
  //  }
  // console.log(name1);

  return (
    <div className='card-homecard' id ={key}>
        <p className='topic-homecard'>{name}</p>
        <img  className='img-homecard' src={img} alt="category"/>
        <div className='scheme-homecard'>
            <p className='p-homecard'>{scheme}</p>
            <p className='sub-homecard'>+ schemes</p>
        </div>
        <button  className='more-homecard'>See more</button>
        {/* <button  className='more-homecard' onClick={()=>update({name})}>See more</button>  */}
        {/* {bool && <Body name2={name}/>}    */}
    </div>
  )
}

export default Homecard