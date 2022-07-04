
const registration = document.querySelector(".reg"),
registration_button = registration.querySelector("button"),
registration_input = registration.querySelector("input"),
todolist = document.querySelector(".todolist"),
input = todolist.querySelector(".todolist_text"),
button = todolist.querySelector(".todolist_add"),
nameuser = todolist.querySelector(".nameofuser"),
todolist_items = todolist.querySelector(".todolist_items"),
clearlist = todolist.querySelector(".clearlist")

username = JSON.parse(sessionStorage.getItem('user'))

tasks = JSON.parse(sessionStorage.getItem('tasks'))

if (username) {
registration.style.visibility = "hidden"
todolist.style.visibility = "visible"
}

if (!tasks) {
tasks = []
}

tasks.forEach((el) => {
let li = document.createElement("li"),
    done = document.createElement("button")
done.type = "sumbit"
todolist_items.appendChild(li)

if (el.done) {
    li.innerHTML = el.content
    li.className = "donetask"
} else {
    li.innerHTML = el.content
    li.addEventListener("click", function () {
        li.className = "donetask"
        el.done = true
        sessionStorage.setItem("tasks", JSON.stringify(tasks))
    })
}
});

registration_button.addEventListener("click", function () {
registration.style.visibility = "hidden"
todolist.style.visibility = "visible"
sessionStorage.setItem('user', JSON.stringify(registration_input.value))
let username = JSON.parse(sessionStorage.getItem('user')
)
nameuser.innerHTML = `Greetings ${username} !`
if (!username) {
    username = [{ name: `Guest` }]
}
})

button.addEventListener("click", function () {
if (!input.value) {
    return
}

tasks.push({
    content: input.value,
    done: false,
})

clearlist.addEventListener("click", function () {
todolist_items.innerHTML = null
sessionStorage.setItem("tasks", JSON.stringify([]))
tasks = []
})

sessionStorage.setItem('tasks', JSON.stringify(tasks))
todolist_items.innerHTML = null
tasks.forEach(el => {
    let li = document.createElement("li"),
        done = document.createElement("button")
        div = document.createElement("div")
        div.className = "listToDo"
        done.type = "sumbit"
        done.className = "btndone"
        done.innerHTML = "Done"
    todolist_items.appendChild(div)
    div.appendChild(li)
    div.appendChild(done)
    if (el.done) {
        li.innerHTML = el.content
        li.className = "donetask"
        done.style.display = "none"
    } else {
        li.innerHTML = el.content
        done.addEventListener("click", function () {
            li.className = "donetask"
            done.style.display = "none"
            el.done = true
            sessionStorage.setItem("tasks", JSON.stringify(tasks))
        })

    }
});
})