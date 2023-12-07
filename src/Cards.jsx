import Card from "./Card.jsx"

function Cards(){
    
  // Example 2
  const cardValues = [
    {id:1,
      picture:"https://via.placeholder.com/150",
      title:"Card Title 1",
      detail:"Card Details 1"},
    {id:2,
      picture:"https://via.placeholder.com/150",
      title:"Card Title 2",
      detail:"Card Details 2"},
    {id:3,
      picture:"https://via.placeholder.com/150",
      title:"Card Title 3",
      detail:"Card Details 3"}
  ]

  return (
    
    
      cardValues.map( (item) => {
        // <Card key={value.key} picture={value.picture} title={value.title} detail={value.detail} />
        <div>{item}</div>
      })
  
  
)

  
}

// cardValues.map( (value) => {
//   <Card key={value.key} picture={value.picture} title={value.title} detail={value.detail}
//   />
// })

export default Cards;