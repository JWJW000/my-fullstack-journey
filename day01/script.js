const task = [
    {name: "HTML 基础", done: true},
    {name: "CSS 布局", done:true},
    {name: "JavaScript DoM 操作", done: false},
    {name: "GitHub Pages 部署", done: false}
];


 const taskList = document.getElementById("taskList");
 const totalProgress = document.getElementById("totalProgress");
 const progressText = document.getElementById("progressText");
 const goalList = document.getElementById("goalList");


 function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task,index) => {
        const li = document.createElement("li");
        const checkbox =document.createElement("input");
        checkbox.type = "checkbox";

        checkbox.checked = task.done;

        checkbox.onchange = () => {
            tasks[index].done = checkbox.checked;
            updateProgress();
        };

        li.appendChild(checkbox);
        li.append(" " + task.name);

        taskList.appendChild(li);
    });
    updateProgress();
 }

  function updateProgress() {
    const completed = tasks.filter(task=> task.done).length;

    const percent = Math.round((completed / tasks.length) * 100);

    totalProgress.style.width = percent + "%";

    progressText.textContent = `已完成 ${completed}/${tasks.length} 项，进度${percent}%`;

  }

  function addGoal() {
    const input = document.getElementById("goalInput");
    const value = input.value.trim();

    if(!value) return;

    const li = document.createElement("li");

    li.textContent = value;

    goalList.appendChile(li);

    input.value = "";
  }

  renderTasks();