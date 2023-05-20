import ButtonDisplay from "./components/ButtonDisplay"; 
import ListStudents from "./components/ListStudents";

const App=()=>{
  const test=['samrat','roshan'];
  return(
    <>
 <h1>Hello world!</h1>
 <ButtonDisplay value="Register" />
 <ListStudents students={test}/>
 </>
  )
}
export default App;