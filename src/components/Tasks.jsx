import {ChevronRightIcon, TrashIcon} from "lucide-react";

function Tasks({tasks, deleteTaskClick, onTaskClick}){

    return(
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow ">{tasks.map((task) =>
            (<li key={task.id} className="flex gap-2">
                <button
                    onClick={() => onTaskClick(task.id)}

                    className={`bg-slate-400 text-left w-full text-white rounded-md p-2 ${task.isCompleted && 'line-through'}`}>
                    {task.title}

                </button>

                <button className="bg-slate-400 rounded-md p-2 text-white">
                    <ChevronRightIcon/>
                </button>

                <button onClick={() => deleteTaskClick(task.id)} className="bg-slate-400 rounded-md p-2 text-white">
                    <TrashIcon/>
                </button>
            </li>))}

        </ul>
    );
}

export default Tasks;