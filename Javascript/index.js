$("body")
    .append($("<h1>").text("Todo-List"))
    .append(
        $("<input>").attr("placeholder", "Enter New Task").attr("type", "text")
    )
    .append($("<button>").text("Add Task").addClass("btn"));
    