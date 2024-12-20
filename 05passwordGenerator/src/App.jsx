import { useCallback, useEffect, useState , useRef} from "react";

function App() {
  const [length, setLength] = useState(8);

  const [numberAllowed, setNumberAllowed] = useState(false);

  const [charAllowed, setCharAllowed] = useState(false);

  const [password, setPassword] = useState("");

  //use to get the reference
  const passwordRef = useRef()

  //One reason to use usecallback hook is to prevent a component from re-rendering unless its props have changed
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPLKJHGFDSAZXCVBNMzaqwsxcderfvbgtyhnmjuiklop";

    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*{}[]+=";
    }

    //using a for loop to select random character from the String str, to create a passowrd of the length that the user has set.
    for (let i = 0; i < length; i++) {
      // generate a random integer within a certain range
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    //set the password
    setPassword(pass);
  }, [length, charAllowed, numberAllowed, setPassword]);

  //Creating a function to copy the text to clipbord
  const copyPasswordToClipboard = useCallback(()=>{
    //it just gives us the higlited effect when we have copied the password
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,20); // it will higlight the text upto the range which is specified

    //copying the password to the clipBoard
    window.navigator.clipboard.writeText(password);

  }, [password])//dependence :'password' , which means that jb v passowrd change ho ga ye funciton trigger ho ge, or agr hum same password ko bar bar copy kare ge to wo nai ho ga kyu hi ye funciotn tv hi trigger ho ga jb passoword change ho ga

  
  useEffect(()=>{
    passwordGenerator();

  }, [length, numberAllowed, charAllowed, passwordGenerator]) /* whenever there will be any changes made in these dependies, the useEffect() event will be triggered */

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref = {passwordRef}
          ></input>
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range" //slider:allows the user to select a value between a defined minimum and maximum
              min={6} //The minimum value of the slider is 6
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
