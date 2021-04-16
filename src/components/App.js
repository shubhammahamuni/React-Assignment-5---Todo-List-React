
import React , {useState ,useEffect, createRef , useRef}from "react";
import "./../styles/App.css";
import List from "./list/index"

function App() 
{
	const[task ,settask] = useState({task_name:"",edit:false, });
	const[list , setlist] = useState([]);
	const[temp_text , settemtext] = useState("");
	const ip = useRef(null);

	const handleonchange =(e)=>{
		//setText(e.target.value)
		//latest code.
		
		settask({task_name :e.target.value,edit: false, })
			
	
	}
		
	


	const handlesave = (e)=>{
		
		//console.log(task);
		
		//settask(task=>[...task ,text]);
			//console.log(task);	
			if(task.task_name != ""){
				setlist(list=>[...list ,task] )
			}
			settask({task_name:"",edit:false, });

		

	}
	const delete_todo_item = (element_tobe_deleted , i)=>{
		 setlist(list.filter((t, index)=> Number(i) !=index) );
		
	
	}
	const edit_todo_item = (element_tobe_edited,i)=>{
		var temp = list;
		temp.map((ele , index)=>{
			if(index == i)
			{
				ele.edit = true;
			}

		})
		setlist(list=> [...list] , temp);
	}


	
	const handle_edit_save_button = (i)=>{
		//setlist(list=> [...list] , obj)
		var obj2  = list;
		
		
			if(temp_text.length >0){
				obj2[i].task_name = temp_text;
				obj2[i].edit = false;
			
				setlist(list=> [...list] , obj2);
				settemtext("");
			//	console.log(list.length);
			}
		
			
				
				
			
			
			
		
		

	}
	const handle_edit=(text ,index)=>{
		
		// var obj = list;
		// obj[index].task_name = text;
		// setlist(list=> [...list] , obj);
		
		settemtext(text);

	}
	

	return (
	<div id="main">
		<div className="input_boxes"> 
		<textarea id="task" onChange={handleonchange} value={task.task_name} placeholder="Add Tasks"></textarea>
		<button id="btn" onClick={handlesave}>save</button>
		</div>
		 <List list={list} 
		 delete_todo_item={delete_todo_item} 
		 edit_todo_item = {edit_todo_item} 
		 handle_edit_save_button = {handle_edit_save_button}
		 handle_edit ={handle_edit}
		/> 
	</div>
	);
}


export default App;


