import Tasks from "./components/Tasks.jsx";
import './App.css'
import AddTasks from "./components/AddTasks.jsx";
import {useEffect, useState} from "react";
import {v4} from 'uuid'
function App() {

    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || [])

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks]);

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await fetch
            (
                "https://jsonplaceholder.typicode.com/todos?_limit=10",
                {method: "GET"}
            );

            const data = await response.json()
            setTasks(data)
        }
        fetchTasks()
    }, []);

    function onTaskClick(taskId) {
        const newTask = tasks.map((task) => {
            if (task.id === taskId) {
                return {
                    ...task,
                    isCompleted: !task.isCompleted
                }
            }
            return task
        })
        setTasks(newTask)

    }

    function addTask(title, description){

        const newTask = {
            id: v4(),
            title,
            description,
            isCompleted: false
        }

        setTasks([...tasks, newTask]);
    }

    function deleteTaskClick(taskId) {
        const newTask = tasks.filter(task => task.id !== taskId);
        setTasks( newTask)
    }

    return (
        <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
            <div className="w-[500px] space-y-4">
                <h1 className="text-3xl text-slate-100 font-bold text-center">Management Task</h1>
                <AddTasks addTask={addTask}/>
                <Tasks
                    tasks={tasks} onTaskClick={onTaskClick}
                    deleteTaskClick={deleteTaskClick}
                />

            </div>
        </div>
    )
}

export default App
