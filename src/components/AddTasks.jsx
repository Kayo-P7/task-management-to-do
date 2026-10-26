import {useState} from "react";

function AddTasks({addTask}){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    return(
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <input className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
                type="text" placeholder="Digite o titulo da tafera"
            value={title}
                   onChange={(event) => setTitle(event.target.value)}
            ></input>

            <input className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
                type="text" placeholder="Digite a descricao da tafera"
            value={description}
                   onChange={(event) => setDescription(event.target.value)}
            ></input>

            <button onClick={() =>{
                if(!title.trim() || !description.trim()) {
                    alert("nao e possivel enviar o campo vazio")
                    return
                }
                addTask(title, description)
                setTitle("")
                setDescription("")
            }
                }
                className="bg-slate-500 text-white px-4 py-2 rounded-md">Adicionar</button>
        </div>
    )
}


export default AddTasks;