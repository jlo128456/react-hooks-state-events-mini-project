import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState(""); // State for task details
  const [category, setCategory] = useState("Code"); // Default category

  function handleSubmit(event) {
    event.preventDefault();

    // Create a new task object
    const newTask = {
      text: text,
      category: category,
    };

    // Pass the new task to the callback function
    onTaskFormSubmit(newTask);

    // Reset the form fields
    setText("");
    setCategory("Code");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories
            .filter((cat) => cat !== "All") // Exclude "All" from the dropdown
            .map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
