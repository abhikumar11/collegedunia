import logo from './logo.svg';
import './App.css';
import CollegeList from './components/CollegeList';
import { useEffect, useState } from 'react';
import data from './CollegeData';

function App() {
  const[selectedOption,setSelectedOption] = useState("");
  const [collegeData,setCollegeData]=useState([]);

  useEffect(()=>{
    setCollegeData(data);
  },[setSelectedOption,setCollegeData]);

  function handleSort(e) {
  setSelectedOption(e.target.value);
  console.log(e.target.value);
   if(e.target.value==="Popularity"){
    const temp=data.sort((a,b)=>{
      if(a.rank<b.rank){
        return -1;
      }
      if(a.rank>b.rank){
        return 1;
      }
      return 0;
    })
    setCollegeData(temp);
   }
   else if(e.target.value==="Rating"){
    const temp=data.sort((a,b)=>{
          return b.review-a.review;
    })
    setCollegeData(temp);
   }
 
}
  return (
    <div className="App">
      <div>
        <form>
          <p>Sort By</p>
          <input type="radio" name="pop" value="Popularity" checked={selectedOption === 'Popularity'} onChange={handleSort}/>
          <label for="pop">Popularity</label>
          <input type="radio" name="pop" value="Rating" checked={selectedOption === 'Rating'} onChange={handleSort}/>
          <label for="rating">Rating</label>
          <input type="radio" name="pop" value="Highest Fees" checked={selectedOption === 'Highest Fees'} onChange={handleSort}/>
          <label for="pop">Highest Fees</label>
          <input type="radio" name="pop" value="Lowest Fees" checked={selectedOption === 'Lowest Fees'} onChange={handleSort}/>
          <label for="rating">Lowest Fees</label>
        </form>
      </div>
      <CollegeList data={collegeData}/>
    </div>
  );
}

export default App;
