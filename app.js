const fs = require("fs");

function readTask () {
    const text = fs.readFileSync("task.json", "utf-8");
    return JSON.parse(text)
}

const task = readTask();

/////////////////////////////////////
//////////Agregar////////////////////
////////////////////////////////////
const comando = process.argv[2];

const description = process.argv[3];

if(comando === "agregar") {
    const task = readTask();
    const nueva = {
        id: task.length + 1,
        description: description,
        estado: "no hecha"
    };
    task.push(nueva);
    fs.writeFileSync("task.json", JSON.stringify(task, null, 2));
    console.log("Tarea guardada")
}

//////////////////////////////////////
////////////Verificar////////////////
////////////////////////////////////

if (comando === "ver") {
    const task = readTask();
    task.forEach(t => {
    console.log(`${t.id}. ${t.description} [${t.estado}]`);
  });
}