# Project Documentation: Task Manager

## Table of Contents
1. [Project Description](#description)
2. [Project Structure](#structure)
3. [HTML](#html)
4. [CSS](https://github.com/Th3Mayar/TaskManager/blob/main/style.css)
5. [JavaScript](https://github.com/Th3Mayar/TaskManager/blob/main/index.js)
6. [Contributing](#contributing)

<a name="description"></a>
## 1. Project Description

**Task Manager** is a simple web application that allows users to add, edit, and delete tasks. The interface is designed to be minimalist and user-friendly, providing an efficient way to manage daily task lists.

<a name="structure"></a>
## 2. Project Structure

The project is organized into the following files:

- `index.html`: Contains the HTML structure of the application.
- `style.css`: Contains the CSS styles for the application's appearance.
- `index.js`: Contains the JavaScript logic for the application's functionality.

<a name="html"></a>
## 3. HTML

The `index.html` file defines the basic structure of the application. It includes a form to add tasks and a list to display the added tasks.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Task Manager</title>
</head>
<body>
    <form class="input-container">
        <input type="text" placeholder="Insert Task Name" name="task" />
        <button type="submit" id="btnSubmit">Add task ✔️</button>
    </form>
    
    <ul class="task-content">
        <li class="header-task">
          <div>Task list</div>
          <div>Actions</div>
        </li>
    </ul>

    <main>
        <script src="index.js"></script>
    </main>
</body>
</html>
```
<a name="contributing"></a>

## 6. Contributing

We welcome contributions to improve Task Manager. If you have suggestions, bug fixes, or new features, please follow these steps to contribute:

### How to Contribute

1. **Fork the Repository**:
   - Click the "Fork" button at the top right corner of the repository page.

2. **Clone Your Fork**:
   - Clone the forked repository to your local machine using:
     ```bash
     git clone https://github.com/Th3Mayar/TaskManager.git
     ```

3. **Create a New Branch**:
   - Create a new branch for your feature or bug fix:
     ```bash
     git checkout -b feature/bugFixName
     ```

4. **Make Your Changes**:
   - Implement your changes in the new branch. Make sure your code adheres to the project's coding standards.

5. **Commit Your Changes**:
   - Commit your changes with a descriptive commit message:
     ```bash
     git add .
     git commit -m "feat: add effects on styled with transform"
     ```

6. **Push to Your Fork**:
   - Push your branch to your forked repository:
     ```bash
     git push origin feature/nameBranch
     ```

7. **Create a Pull Request**:
   - Navigate to the original repository and create a pull request from your fork. Provide a clear description of your changes and the purpose of the pull request.

Thank you for contributing to Task Manager!
