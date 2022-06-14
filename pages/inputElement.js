import React, { useState } from 'react';

const inputElement = () => {
  const [inputText, setInputText] = useState('');
  const [historyList, setHistoryList] = useState([]);

  return (
    <div>
      <input 
        placeholder="Enter Some Text" 
        onChange={(e) => {
          setInputText(e.target.value);
          setHistoryList([...historyList, e.target.value]);
          }
        }
      />
      <br/>
      {inputText}
      <hr/><br/>
      <ul>
        {historyList.map((item, index) => {
            return <div key={index}>{item}</div>
          }
        )}
      </ul>
    </div>
  )
};

export default inputElement;


