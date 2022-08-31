import React, { useState } from 'react';
import './style.css';
let bucket = [
  'Mango',
  'Apple',
  'Pine Apple',
  'Orange',
  'Grapes',
  'strawberry',
  'Banana',
  'Green Apple',
  'Guava',
];

export default function App() {
  let [stateData, update] = useState('');
  let [addData, change] = useState('');
  return (
    <div>
      <div className="react-container">
        <input
          type="text"
          onInput={(e) => {
            update(e.target.value);
          }}
          placeholder="Search the Items"
          className="searchBar"
        />
        <div
          className="btn"
          onClick={(e) => {
            bucket.push(e.target.parentNode.children[0].value);
            change(e.target.parentNode.children[0].value);
          }}
        >
          +
        </div>
      </div>
      <div className="items">
        <Items data={stateData} />
      </div>
    </div>
  );
}

function Items(props) {
  let changeData;
 

  let filterData = function (start, end, arr_ref = []) {
    let arr = arr_ref;

    if (start <= end && props.data) {
      let op = bucket[start].toLowerCase().includes(props.data.toLowerCase());
      if (op) {
        arr.push(bucket[start]);
      }

      start++;

      filterData(start, end, arr);
    } else {
      if (!props.data) {
        arr = bucket;
      } 
    }

    return arr;
  };
  changeData = filterData(0, bucket.length - 1);

  return (
    <div className="inner">
      {changeData.length > 0
        ? changeData.map((value, index) => {
            return (
              <div key={index} className="items-single">
                {value}
              </div>
            );
          })
        : 'No match found click the puls button to add the entered  item'}
    </div>
  );
}
