
import React , {useState ,useEffect, createRef , useRef}from "react";
import "./../styles/App.css";
import List from "./list/index"

function App() 
{
	const[task ,settask] = useState({task_name:"",edit:false, });
	const[list , setlist] = useState([]);
	 

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
		

	}
	const delete_todo_item = (element_tobe_deleted , i)=>{
		 setlist(list.filter((t, index)=> Number(i) !=index) );
		
	
	}
	const edit_todo_item = (element_tobe_edited,i)=>{
		var temp = list;
		temp.map((ele , index)=>{
			if(ele.task_name == element_tobe_edited)
			{
				ele.edit = true;
			}

		})
		setlist(list=> [...list] , temp);
	}


	const handle_edit=(text ,index)=>{
		//console.log(index);
		var obj = list;
		obj[index].task_name = text;

			setlist(list=> [...list] , obj);
		
		

	}
	const handle_edit_save_button = (i)=>{
		//setlist(list=> [...list] , obj)
		var obj2  = list;
		
		
			if(obj2[i].task_name  !=""){
			obj2[i].edit = false;

				setlist(list=> [...list] , obj2);
			}
				
				
			
			
			
		
		

	}

	

	return (
	<div id="main">
		<div className="input_boxes"> 
		<textarea id="task" onChange={handleonchange}  ></textarea>
		<button id="btn" onClick={handlesave}>save</button>
		</div>
		 <List list={list} 
		 delete_todo_item={delete_todo_item} 
		 edit_todo_item = {edit_todo_item} 
		 handle_edit={handle_edit} 
		 handle_edit_save_button = {handle_edit_save_button}
		 /> 
	</div>
	);
}


export default App;


