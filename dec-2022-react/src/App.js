


// TASK #2
// з jsonplaceholder отримати всі пости в компоненту Posts.js
// відобразити кожного інформацію (id,title) з кожного поста (компонента Post)
// Зробити кнопку вибора поста, при натисканні на яку в Posts.js ви покажете детальну інфомацію про пост(всю інфу)
//




import Posts from "./Components/Posts/Posts";

function App() {
  return (
      <div>
          <div className="app-main">
              <Posts/>
          </div>
      </div>
  );
}

export default App;
