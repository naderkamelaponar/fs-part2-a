const Parts = ({part}) => {
    return (<p> {part.name} {part.exercises}</p>);
  }
const Course =({course})=>{
    const {name,parts}=course;
    return (<>
    <h3>{name}</h3>
      {parts.map(a=>{
      return <Parts key={a.id} part={a}/>
      })}
    </>)
  
  
  }
  export default Course;