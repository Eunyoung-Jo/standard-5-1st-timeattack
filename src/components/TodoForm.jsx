import React, {useState} from 'react';

export default function TodoForm({addTodo}){
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!title || !contents){
      alert("제목과 내용을 모두 입력해주세요!");
      return;
    }
    addTodo(title, contents);
    setTitle('');
    setContents('');
  };
return (
  <form onSubmit={handleSubmit}>
    <input
    type="text"
    placeholder="제목을 입력해주세요"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    />
    <input
    type="text"
    placeholder="내용을 입력해주세요"
    value={contents}
    onChange={(e) => setContents(e.target.value)}
    />
    <button type="submit">등록하기</button>
  </form>
);
}