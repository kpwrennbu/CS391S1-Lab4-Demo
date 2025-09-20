import { useEffect, useState } from "react";
import DogContainer from "./DogContainer";

export default function DogGallery() {
  //TODO: STEP 1: Add dog useState
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
   
    //TODO STEP 2: Add mounted State so while the component is alive, state updates are allowed.
    let isMounted = true;

    async function fetchDogs() {

      for (let i = 0; i < 10; i++) {
        try {
            //TODO STEP 3: In the try block, get the response and data from https://dog.ceo/api/breeds/image/random 
            const res = await fetch("https://dog.ceo/api/breeds/image/random");
            const data = await res.json();
            
            //TODO STEP 4: If the component is mounted, add the dog to the mounted list
            if (isMounted) {
                setDogs((prev) => [...prev, data.message]);
            }
            }
             //TODO STEP 5: catch any error
             catch (err) {
            console.error("Failed to fetch dog:", err);
            }

        // wait 5 seconds before next fetch (skip on last iteration)
        if (i < 9) {
          await new Promise((resolve) => setTimeout(resolve, 5000));
        }
      }
    }
    //TODO STEP 6: Call the function
    fetchDogs();

    //TODO STEP 7: Unmount
    return () => {
      isMounted = false; 
    };
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>🐶 Dog Gallery</h2>
      {
      //TODO Step 8: Conditionally render Loading dogs...
      }
      {dogs.length === 0 && <p>Loading dogs...</p>}
      <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}>
        {
        //TODO Step 9: Use map to display dogs with DogContainer Component
        }
        {dogs.map((url, idx) => (
          <DogContainer url={url} idx={idx} /> 
        ))}
      </div>
    </div>
  );
}
