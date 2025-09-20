
export default function DogContainer(props) {
    return ( 
        <img
            key={props.idx}
            src={props.url}
            alt="Random Dog"
            style={{ width: "100%", borderRadius: "8px" }}
          />
    )

} 
