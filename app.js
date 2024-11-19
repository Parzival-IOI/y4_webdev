import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      
      <>
          <h1 className="button">Hello from React!</h1>
          <h1>Home</h1>
          <ul>
              <li><a href="#">Home</a></li>
              <li><a href="content/text.htm">text</a></li>
              <li><a href="content/image.htm">image</a></li>
              <li><a href="content/list.htm">list</a></li>
              <li><a href="content/table.htm">table</a></li>
              <li><a href="content/form.htm">form</a></li>
          </ul>
          
      </>

  )
}        


function NavigationBar() {
  // TODO: Actually implement a navigation bar
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Testing />}>
                  <Route index element={<Testing />} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);