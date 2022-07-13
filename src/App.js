import logo from './logo.svg';
import './App.css';
import { GetMovieList } from './network/movie';
import { useEffect, useState } from 'react';

function App() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  const [isloding, setIsloding] = useState(false);
  async function search(){
    setIsloding(true)
    const res = await GetMovieList(text);
    console.info(res.data.Search);
    setList(res.data.Search)
    setText("");
    setIsloding(false);
  }
  const print = list.map((item) => (
    <div className='movies'>
      <div>{item.Title}</div>
      <div>({item.Year})</div>
      <img src={item.Poster}></img>
    </div>
  ))
  return (
    <div className="App">
      <div className='search'>
        <input placeholder='영화 제목을 입력해주세요' type={text} onChange={(e) => {setText(e.target.value)}} value={text} />
        <button onClick={search}>검색하기</button>
      </div>
      {!list.length && !isloding ? <div className='nomo'>검색결과 없음</div>
      :
      ( isloding ? <div className='loding'>로딩중 ... </div>
      :
      <div className='print'>{print}</div>
      )
      }
      
    </div>
  );
}

export default App;
