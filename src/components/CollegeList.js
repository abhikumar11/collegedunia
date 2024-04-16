import React from 'react'
import "./style.css";
const CollegeList = ({data}) => {
  return (
    <div>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">CD Rank</th>
      <th scope="col">Colleges</th>
      <th scope="col">Course Fees</th>
      <th scope="col">Placement</th>
      <th scope="col">User Reviews</th>
      <th scope="col">Ranking</th>
    </tr>
  </thead>
  <tbody>
    {
      data.map((data, i) =>(
        <tr>
          
      <th scope="row">{data.rank}</th>
      <td>
        <div>
          <img className="college-name" src={data.image} style={{width:43, height:43}} alt="logo"/>
          <p className="college-name" >{data.collegename}</p>
        </div>
        <div>
        <p className="college-name" >{data.address.city},{data.address.state}</p>
       <span><p>{data.course.exam}: {data.course.cutoff}</p></span>
        </div>
        <div>
        <a href="#" className="ap-link">Apply Now</a>
        <a href="#" className="ap-link">Download Brochuer</a>
        <input type="checkbox" name="comp"value="Add To Compare"/>
        <label for="comp">Add To Compare</label>
        </div>
        </td>
      <td>
        <div>
        <p>{data.course.fee}</p>
        <p>BE/B.Tech</p>
        <p>- 1st Year Fees</p>
        <a href="#" className="ap-link">Compare Fees</a>
        </div>
        </td>
      <td>
        <div>
        <p>{data.avg}</p>
        <p>Average Package</p>
        <p>{data.highest}</p>
        <p>Highest Package</p>
        <a href="#" className="ap-link">Compare Placement</a>
        </div>
        </td>
      <td>{data.review}/10</td>
      <td>{data.ranking}</td>
    </tr>
      ))
    }
  </tbody>
</table>
    </div>
  )
}

export default CollegeList