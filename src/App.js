import React, {useState, useEffect} from 'react';
import Restaurants from './components/Restaurants.js'
import Searchbar from './components/Searchbar'


function App({ props }) {

    const [data, setData] = useState([]);
    const [inputField, setInputField] = useState("");



    return (
        <div>
            <Searchbar  data={data}
                        setData={setData} />
            <Restaurants data={data}
                             />

        </div>
    );
}

export default App;
