import React, { useState } from 'react';
 // Import useNavigate from react-router-dom
import './index.css';
import './index.css';
import axios from 'axios';
import Detail from './Detail';

const App = () => {
  let [state, setState] = useState({
    search: '',
    results: [],
    selected:{}
  });

   // Initialize useNavigate

  let handlesubmit = (event) => {
    let search = event.target.value;
    setState((prevState) => {
      return { ...prevState, search: search };
    });
  };

  let openDetails = (id) => {
    
    axios.get('http://www.omdbapi.com/?i='+id+'&apikey=37956eb7')
    .then(({data})=>{
      setState((prevState)=>{return { ...prevState, selected:data}})
    })
    .catch((error) => {
      console.error(error);
    })
  }
  let searchResult = (event) => {
    if (event.key === "Enter") {
      axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=37956eb7' + "&s=" + state.search)
        .then(res => {
          setState(prevState => {
            return { ...prevState, results: res.data.Search };
          });
          console.log(res.data.Search);
        })
        .catch(err => console.log(err));
    }
  };

  return (
  <div className="">
      <div className='main'>
        {typeof state.selected.Title !== "undefined" ? <Detail selected={state.selected} /> : 
        <div>
           <div className="search">
             <h2>Movie Search </h2>
             <input type='text' name='movie' placeholder='Enter Movie Name' onChange={handlesubmit} onKeyDown={searchResult} />
           </div>
            <div className="input-two">
              <div className="input">
                  {
                   state.results.map((result, i) => {
                     return (
                       <div key={i} className="" onClick={() => openDetails(result.imdbID)}>
                         <img src={result.Poster} alt={result.Title} />
                         <h4>{result.Title}</h4>
                         <p>{result.Year}</p>
                       </div>
                     );
                   })
                  }
              </div>
            </div>
        </div>    
        } 
    <div className="main-two">
           {/* Additional content can go here */}
           {/* Additional content can go here */}
    </div>
  </div>
  </div>
    
  );
};

export default App;
