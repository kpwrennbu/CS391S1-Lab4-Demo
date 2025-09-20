import { useEffect, useState } from "react";
import DogContainer from "./DogContainer";

export default function DogGallery() {
  //TODO: STEP 1: Add dog useState

  useEffect(() => {
   
    //TODO STEP 2: Add mounted State so while the component is alive, state updates are allowed.

    async function fetchDogs() {

      for (let i = 0; i < 10; i++) {
        try {
            //TODO STEP 3: In the try block, get the response and data from https://dog.ceo/api/breeds/image/random 
           
            
            //TODO STEP 4: If the component is mounted, add the dog to the mounted list
           
            }
             //TODO STEP 5: catch any error
             catch (err) {
            }

        // wait 5 seconds before next fetch (skip on last iteration)
        if (i < 9) {
          await new Promise((resolve) => setTimeout(resolve, 5000));
        }
      }
    }
    //TODO STEP 6: Call the function

    //TODO STEP 7: Unmount
   
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>🐶 Dog Gallery</h2>
      {
      //TODO Step 8: Conditionally render Loading dogs...
      }
      <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}>
        {
        //TODO Step 9: Use map to display dogs with DogContainer Component
        }
        
      </div>
    </div>
  );
}
