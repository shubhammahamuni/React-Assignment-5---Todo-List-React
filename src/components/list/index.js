import React from 'react'

function InputTask({list , delete_todo_item,edit_todo_item,handle_edit,handle_edit_save_button  } ) {
        
    
           

    return (
        <div className="list_">
        <ul>

			
          {/* {task.map((element, index)=>{
               return(<li className="list" >{element}

                   
               <button className="delete"  onClick={()=> {delete_todo_item(element)}}>X</button>
               <button className="edit"  onClick={()=> {edit_todo_item(element)}}>edit</button>
              
               </li>); 
           })}    */}

           {
               list.map((obj,i)=>{


                    
                   return(<> <li key ={i} className="list">{obj.task_name}</li>
                 <button className="delete"  onClick={()=> {delete_todo_item(obj.task_name)}}>X</button>
                 <button className="edit"  onClick={()=> {edit_todo_item(obj.task_name,i)}}>edit</button>
                 {  obj.edit==true ?<><textarea className="editTask" 
                    defaultValue={obj.task_name} 
                    onChange={(e)=>{handle_edit(e.target.value , i)}}>
                        </textarea> 
                        <button className="saveTask" 
                        onClick = { ()=>{handle_edit_save_button(i)}}>save</button></>  :<></>}

                   </>) } )
           
           }
               
                  
                
       </ul>
       </div>
            
        
    )
}

export default InputTask
