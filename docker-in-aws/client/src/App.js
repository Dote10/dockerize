import logo from './logo.svg';
import './App.css';
import  axios  from 'axios';
import { useEffect, useState } from 'react';



function App() {
  
  //원하는 값을 화면에 보여주기 위해 

  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

useEffect( () =>{
     // api를 통해서 item 데이터를 받아오고 
  axios.get('/api/list')
      .then(response =>{
    // 화면에 데이터를 담은 response를 보내준다.
      setList(response.data)
    })
  },[]);

//input박스에 값이 바뀔 때마다.
//changeHandler이벤트를 실행시켜서 
//input 박스에 value를 변화 시켜준다. 
const changeHandler = (event) =>{
  setItem(event.currentTarget.value)
}

//input박스에 데이터를 넣은다음
//확인 버튼을 누르면 해당 값이 server로 전달이 되어서 
//server에 데이터 베이스에 저장을 한다. 
//위 작업을 하는 핸들러 
const submitHandler =   (event) =>{
  //원래 버튼을 클릭하면 일어나는 event를 막아준다. 
  event.preventDefault();
  axios.post('/api/list',{item})
  .then(response => {
    if(response.data.success){
      console.log('response.data',response.data)
      setList([...list, response.data])
      setItem("");
    }else{
      alert("값을 DB에 넣는데 실패했습니다.");
    }
  })
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          {list && list.map((list, index) => (
            <li key={index}>{list.item}</li>
          ))}
          <form className="example" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="입력해주세요"
              onChange={changeHandler}
              value={item}
            />
            <button type="submit">확인</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
