const App = () =>{

  let isPair = 3
  if((isPair/2) % 1){
    isPair = false
  }else{
    isPair=true
  }
  
  return (
    <div>
      
      {isPair && <p>broj je paran</p>}
      {!isPair && <p>broj nije paran</p>}
    </div>
  );
}

export default App;
// instalirat jsx HTML tags