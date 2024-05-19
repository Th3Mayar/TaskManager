const form = document.querySelector('.input-container')
const taskContent = document.querySelector('.task-content');
const listContent = document.querySelector('.list-content');
const input = document.querySelector('input');
const buttonSubmit = form.querySelector('#btnSubmit');
let elementEdit = null;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(e.target)
  const data = Object.fromEntries(formData);

  if (!data.task) return null;

  const { task } = data;

  // Validate to edit
  if (elementEdit) {
    editTask(task)

  } else {
    createTask(task);
  }

  e.target.reset();
})

const createTask = (task) => {
  const liTag = document.createElement("li");
  const spanTag = document.createElement('span');
  const buttonTag = document.createElement('button');
  const buttonTagEdit = document.createElement('button');
  const actionsTag = document.createElement('div');
  const headerTaskTag = document.createElement('span');

  liTag.className = 'list-content';
  spanTag.textContent = task;
  buttonTag.className = 'btnDelete';
  buttonTag.textContent = 'Delete'
  buttonTagEdit.textContent = 'Edit';
  buttonTagEdit.className = 'btnEdit';
  actionsTag.className = 'actions';
  headerTaskTag.textContent = 'Actions';

  buttonTag.addEventListener('click', () => {
    liTag.remove()
  })

  buttonTagEdit.addEventListener('click', () => {
    buttonSubmit.textContent = 'Save ✔️'
    input.value = spanTag.textContent;
    elementEdit = liTag;
  })

  // For add all elements taskContent, used this content for solution
  liTag.appendChild(spanTag)
  actionsTag.appendChild(buttonTag)
  actionsTag.appendChild(buttonTagEdit)
  liTag.appendChild(actionsTag)
  taskContent.appendChild(liTag)
}

const editTask = (task) => {
  buttonSubmit.innerHTML = 'Add task ✔️';
  elementEdit.querySelector('span').textContent = task;
  elementEdit = null;
  // console.log(elementEdit)
}
