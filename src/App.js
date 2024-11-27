import { createContext, useContext, useState } from "react";
import User from "./components/User";
import Page_1 from "./pages/Pages_1";




export  const UserContext = createContext()

function App() {

const [value,newValue] = useState("karthik")

  return (
    
    <div className="App">
      
      <UserContext.Provider value = {{value,updatedValue:newValue}} >

      <User/>
      <Page_1/>

      </UserContext.Provider>

      </div>
  );
}

export default App;

