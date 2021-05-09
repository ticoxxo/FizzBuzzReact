import React , {useState  } from 'react'


function FizzBuzz() {
    
    
    const [value , setValue] = useState(100);
    //const addValue = () => setValue(Number(value) + 10);
    const [fizzBuzz , setFizzBuzz] = useState({fizz:0 , buzz:0 , fizzBuzzi: 0 });
    const [theArray, setTheArray] = useState([]);
    const addValue = () => setValue(Number(value) + 10);
    
   
   
    const handleValue = event => {
        setValue(event.target.value)
    }

    const list = theArray.map( (n,i) => 
        <li key={i}>{n}</li>
        );

  

    const runFizzBuzz = () => {
        setTheArray([]);
        for(let i = 1 ; i <= value ; i++  ){
            checkFizzBuzz(i); 
        }
        let fizz = 0,buzz = 0 , fizzibuzzi = 0;
        theArray.forEach( thV =>  {
            if(thV === "FizzBuzz") fizzibuzzi++;
            if(thV === "Fizz") fizz++;
            if(thV === "buzz") buzz++
        });

        setFizzBuzz( {...fizzBuzz, fizzBuzzi: fizzibuzzi , fizz:fizz, buzz: buzz } );
    }

  

    const checkFizzBuzz = (value) => {
        if( (value % 3 ) === 0 && (value % 5 ) === 0 ){
            setTheArray(oldArray => [...oldArray, 'FizzBuzz']);
            //setFizzBuzz( {...fizzBuzz, fizzBuzzi: fizzBuzz.fizzBuzzi + 1 } );
            return 'FizzBuzz'
        }

        if( value % 3 === 0 ) {
           setTheArray(oldArray => [...oldArray, 'Fizz']);
           //setFizzBuzz( {...fizzBuzz, fizz: fizzBuzz.fizz + 1 } );
            return 'fizz'
        }

        if( value % 5 === 0 ) {
            setTheArray(oldArray => [...oldArray, 'Buzz']);
            //setFizzBuzz( {...fizzBuzz, buzz: fizzBuzz.buzz + 1 } );
            return 'buzz'
        }

        setTheArray(oldArray => [...oldArray, value]);
        return value;
    }
    
    return (
        
        <div>
              <p>VALUE IS {value}</p>
              <h2>Fizz count :{fizzBuzz.fizz} </h2>
              <h2>Buzz count :{ fizzBuzz.buzz }</h2>
              <h2>FizzBuzz count : {fizzBuzz.fizzBuzzi} </h2>
                <input onChange={handleValue} />
                <button onClick={addValue}>Add 10</button>
                <button onClick={runFizzBuzz}>Run FIZZBUZZ</button>
            <ul>
           {list}
            </ul>    
        </div>
    )
}







export default FizzBuzz
