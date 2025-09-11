// import React, { useEffect, useState } from "react";

// import Board from "./TicTacToe/Board";
// import { getPost } from "./api";
// import PostCard from "./Components.jsx/PostCard";

// const App = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     getPost().then((posts) => setData(posts));
//   }, []);
//   return (
//     <div className="min-h-screen w-full p-6 bg-gray-100">
//       {/* <Header /> */}
//       {/* <Board /> */}

//       {data ? (
//         data.map((e) => <PostCard title={e.title} body={e.body} key={e.id} />)
//       ) : (
//         <p>No data</p>
//       )}
//     </div>
//   );
// };

// export default App;

// import React, { useContext } from "react";
// import Counter from "./Components.jsx/Counter";
// import { CounterContext } from "./Components.jsx/context/Counter";

// const App = () => {
//   const counterState = useContext(CounterContext);
//   console.log("context", counterState);

//   return (
//     <div>
//       <h1 className="font-bold text-lg">Count is {counterState.count}</h1>
//       <Counter />
//       <Counter />
//       <Counter />
//       <Counter />
//     </div>
//   );
// };

// export default App;

import React from "react";
import Items from "./Components.jsx/Items";
import Cart from "./Components.jsx/Cart";

const App = () => {
  return (
    <div className="p-6 min-h-screen w-full bg-gray-100">
      <Items name="Macbook Pro" price="100000" />
      <Items name="Mobile" price="20000" />
      <Items name="PenDrive" price="600" />
      <Cart />
    </div>
  );
};

export default App;
