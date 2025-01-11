import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleDeleteTask(tasktext){
    setTasks((prevTasks) => prevTasks.filter((task) => task.text !== tasktext));
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  const tasksToDisplay =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
       categories={CATEGORIES}
       selectedCategory={selectedCategory}
       onCategoryChange={handleCategoryChange}
       />
      <NewTaskForm  
         categories={CATEGORIES}
         onTaskFormSubmit={(newTask) => setTasks((prevTasks) => [...prevTasks, newTask])} 
      />
      <TaskList tasks={tasksToDisplay} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
