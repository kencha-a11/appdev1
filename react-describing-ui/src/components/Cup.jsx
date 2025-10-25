let guest = 0;


// function Cup() {
//   // Bad: changing a preexisting variable!
//   guest = guest + 1;
//   return <h2>Tea cup for guest #{guest}</h2>;
// }

function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}


export default Cup;