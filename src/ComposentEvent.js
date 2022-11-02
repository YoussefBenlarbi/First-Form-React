function ComposentEvent() {
    function ajouter() {
      alert('Button bien Ajouter');
    }
  
    return (
     <button onClick={()=>ajouter()}>Click Ajouter</button>
      
    );
  }

  export default ComposentEvent;