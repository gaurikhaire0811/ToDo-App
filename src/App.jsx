
// npm install react-router-dom
// import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import TodoList from "./TodoList";
// import AddTaskPage from "./AddTaskPage";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<TodoList />} />
//         <Route path="/add" element={<AddTaskPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./TodoList";
import AddTaskPage from "./AddTaskPage";

function App() {
  return (
    <BrowserRouter basename="/ToDo-App">
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/add" element={<AddTaskPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;