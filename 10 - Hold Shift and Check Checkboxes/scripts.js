const checkBoxes = document.querySelectorAll("input");
let indexes = [];
let shiftPressed = false;

checkBoxes.forEach((item, index) => {
  item.addEventListener("input", () => {
    if (indexes.length === 0) indexes.push(index);
    else {
      if (shiftPressed) {
        if (item.checked) {
          if (index < indexes[0]) {
            for (let i = index; i < indexes[0]; i++) {
              if (!indexes.includes(i)) indexes.push(i);
            }
          } else if (index > indexes[0]) {
            for (let i = indexes[0]; i < index; i++) {
              if (!indexes.includes(i)) indexes.push(i);
            }
          }
        }
      } else {
        if (item.checked) indexes.push(index);
        else indexes = indexes.filter((e) => e !== index);
      }
      indexes.sort();
    }

    checkBoxes.forEach((element, elementIndex) => {
      indexes.forEach((number) => {
        if (elementIndex === number) element.checked = true;
      });
    });
  });
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Shift") shiftPressed = true;
});

window.addEventListener("keyup", (event) => {
  if ((event.key = "Shift")) shiftPressed = false;
});
