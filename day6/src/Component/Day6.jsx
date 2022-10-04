import React from "react";

const Day6 = () => {
  return (
    <div>
      <h3>Question1:What is an event in react?</h3>
      <p>
        An event is an action that could be triggered by the users to formed
        some results.
      </p>
      <p>Events in react are written in camel case.</p>
      <p>React events are onClick,onChange,onSubmit,etc.</p>
      <br></br>
      <h3>Question2:What is memory leak and how to overcome?</h3>
      <p>
        Memory leaks occurs when programmers create a memory in heap and forget
        to remove or delete it.
      </p>
      <p>
        The consequences of memory leak is that it reduces the performance of
        system and also applications may get failed.
      </p>
      <p>
        So,To avoid with memory leak,always execute claen up function in
        unmounting phase.
      </p>
      <br></br>
      <h3>
        Question3:Do you prefer function-based or class component and why?
      </h3>
      <p>
        I have mostly preferred Functional component as it is simple plain
        javascript function which is simpler in syntax.
      </p>
      <p>
        It is also accepts props as an arguments and return a react element.
      </p>
      <br></br>
      <h3>Question4:Explain reducer as pure function in redux?</h3>
      <p>
        Reducer as pure function in redux as it takes an action and previous
        state of the application and retuen a new state.
      </p>
      <p>
        The action describes what users wants to perform and then the reducers
        return the new state based on that action.
      </p>
      <br></br>
      <h3>Question5:Why do we use redux thunk?</h3>
      <p>Thunk is middleware that allow to handle asynchronous operations.</p>
      <p>
        It also allow you to return a function rather than just action with
        redux in asynchronous manner.
      </p>
      <br></br>
      <h3>Question6:What do you know about NPM?</h3>
      <p>
        NPM stands for "Node package Module".It put all module in place so that
        node can find them.
      </p>
      <p>Using npm,we can install/download all the javascript packages.</p>
    </div>
  );
};

export default Day6;
