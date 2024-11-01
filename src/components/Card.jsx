import React from 'react';
import './Card.css';

function Card({title, text}) {
  return (
    // <div className="card">
    //   <div className="card-header">{props.title}</div>
    //   <div className="card-body">
    //     <h2>{title}</h2>
    //     <p>{text}</p>
    //   </div>
    // </div>
    // <img src="img_avatar.png" alt="Avatar" style="width:100%">
    <div class="container">
      <h4><b>{title}</b></h4> 
      <p>{text}</p> 
    </div>
  );
}
export default Card;

// function App() {
//   return (
//     <div>
//       <Card title="Card 1">
//         This is the content of card 1.
//       </Card>
//       <Card title="Card 2">
//         This is the content of card 2.
//       </Card>
//     </div>
//   );
// }

// export default App;