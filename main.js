let add_todo_btn = document.getElementById('add_todo_btn')
let todo_input = document.getElementById("todo")
let list_el = document.getElementById("tasks");
add_todo_btn.addEventListener('click', function () {
        let todo = todo_input.value

        let task_el = document.createElement('div');
        if (todo === '') {
            alert("Write something")
            return
        }
        task_el.classList.add('task');

        let task_content_el = document.createElement('div');
        task_content_el.classList.add('content');
        task_el.appendChild(task_content_el);

        let task_input = document.createElement('input');
        task_input.classList.add('text');
        task_input.type = 'text';
        task_input.value = todo;
        task_input.setAttribute('readonly', 'readonly');
        task_content_el.appendChild(task_input);

        let actions = document.createElement('div');
        actions.classList.add('actions');

        let edit_btn = document.createElement('button');
        edit_btn.classList.add('edit');
        edit_btn.innerText = 'Edit';
        edit_btn.addEventListener('click', function () {
            if (edit_btn.innerText.toLowerCase() === "edit") {
                edit_btn.innerText = "Save";
                task_input.removeAttribute("readonly");
                delete_btn.disabled = true

            } else {
                if (!task_input.value) {
                    alert("Please type something")
                    return
                }
                delete_btn.disabled = false
                edit_btn.innerText = "Edit";
                task_input.setAttribute("readonly", "readonly");
            }
        })

        let delete_btn = document.createElement('button');
        delete_btn.classList.add('delete');
        delete_btn.innerText = 'Delete';

        delete_btn.addEventListener('click', function () {
            delete_btn.parentElement.parentElement.remove()
        })
        actions.appendChild(edit_btn);
        actions.appendChild(delete_btn);
        task_el.appendChild(actions);
        list_el.appendChild(task_el);

        document.getElementById('todo').value = ''

    }
)