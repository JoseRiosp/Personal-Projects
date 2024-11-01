import React, { useRef } from "react";

const Child = ({ name, send, update }) => {
  const refMessage = useRef("");
  const refName = useRef("");

  function pressButton() {
    const textToDisplay = refMessage.current.value;
    alert(`Message in the child input: ${textToDisplay}`);
  }

  function submitName(e) {
    //por defecto "e" porque es un formulario
    e.preventDefault();
    update(refName.current.value);
  }

  return (
    <div>
      <p>Child component</p>
      <button onClick={pressButton}>Press button</button>
      <input
        placeholder="Put your text in here"
        ref={refMessage}
        onChange={(e) => {
          console.log(e.target.value);
        }}
      ></input>
      <button
        onClick={(e) => {
          send(refMessage.current.value);
        }}
      >
        Send Message to father
      </button>
      <div style={{ marginTop: "20px" }}>
        <form onSubmit={submitName}>
          <input ref={refName} placeholder="write a name"></input>
          <button type="submit">Update name</button>
          <p style={{color: "white", padding: "5px"}}> Hello {name}!</p>
        </form>
      </div>
    </div>
  );
};

// El Use Ref se usa para tomar un valor de un input y pasarlo a un nivel superior ejemplo:

export default Child;
