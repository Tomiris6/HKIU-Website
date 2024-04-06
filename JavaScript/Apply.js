class RankClass {
  constructor(college, major, rank) {
    this.college = college;
    this.major = major;
    this.rank = rank;
  }
}

function change(click) {
  const colleges = ["College_Eng", "College_Sci", "College_Int"];
  const titles = ["title_Eng", "title_Sci", "title_Int"];

  for (let i = 0; i < 3; i++) {
    const col = document.getElementById(colleges[i]);
    const tit = document.getElementById(titles[i]);

    if (i === click) {
      col.style.visibility = "visible";
      col.style.display = "grid";
      col.style.gridColumnTemplate = "1fr 1fr 1fr";
      tit.style.backgroundColor = "white";
      col.style.margin = "3px";
      col.style.borderRadius = "15%";
    } else {
      col.style.visibility = "collapse";
      col.style.display = "none";
      tit.style.backgroundColor = "#75bbfd";
    }
  }
}

const specialNum = new Map([
  ["1", "1st"],
  ["2", "2nd"],
  ["3", "3rd"]
]);

function rank() {
  const buttons = document.querySelectorAll(".rank");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const input = button.previousElementSibling;
      const collegeName = button.parentElement.parentElement;
      let college;

      if (collegeName.id === "College_Eng") {
        college = title_Eng.innerText;
      } else if (collegeName.id === "College_Sci") {
        college = title_Sci.innerText;
      } else if (collegeName.id === "College_Int") {
        college = title_Int.innerText;
      }

      if (updateTable(college, input.name, input.value)) {
        const rank = specialNum.get(input.value) || input.value + "th";
        alert(`You have chosen ${input.name} as your ${rank} chosen major in ${college} successfully`);
        return false;
      }
    });
  });
}

let total = 0;
let choices = [];

function updateTable(college, major, rank) {
  if (!check(major, rank)) {
    return false;
  }

  choices[rank - 1] = new RankClass(college, major, rank);
  const table = document.getElementById("chosen-majors-table");
  const row = table.rows[parseInt(rank)];
  const collegeCell = row.cells[0];
  const majorCell = row.cells[1];
  const rankCell = row.cells[2];
  rankCell.innerHTML = rank;
  collegeCell.innerHTML = college;
  majorCell.innerHTML = major;
  total++;
  document.getElementById("total").innerHTML = `Total number of completed choices: ${total}`;
  return true;
}

function containsOnlyNumbers(rank) {
  return /^\d+$/.test(rank);
}

function check(major, rank) {
  if (!containsOnlyNumbers(rank)) {
    alert("Please enter the rank of the chosen major");
    return false;
  } else if (rank > 10 || rank < 1) {
    alert("Please enter the rank of the chosen major between 1 and 10");
    return false;
  }

  for (let i = 0; i < choices.length; i++) {
    
    if (choices[i] && choices[i].major === major ) {
      alert("You have already chosen this major");
      return false;
    }
    if (choices[i] && choices[i].rank === rank) {
      alert("You have already chosen this rank");
      return false;
    }
  }

  return true;
}

function submit() {
  const message = document.getElementById("gap");
  message.style.color = "red";
  message.style.textAlign = "center";
  message.style.marginBottom = "7px";
  const gaps = [];

  if (choices.length === 0) {
    message.innerHTML = "You have not chosen any major";
  } else {
    for (let i = 0; i < choices.length; i++) {
      if (!choices[i]) {
        gaps.push(i + 1);
      }
    }
    if (gaps.length > 0) {
      let gapMessage = "You have not chosen your ";

      for (let i = 0; i < gaps.length; i++) {
        if (i === gaps.length - 1 && i !== 0) {
          gapMessage += " and ";
        } else if (i > 0) {
          gapMessage += ", ";
        } else {
          gapMessage += "";
        }
        gapMessage += `${ specialNum.get(`${gaps[i]}`) || gaps[i] + "th"} chosen major`;
      }
      message.innerHTML = gapMessage + ", you cannot leave any gap between your chosen majors";
    } else {
      const successMessage = "You have successfully submitted your application at time: " + new Date().toLocaleTimeString();
      message.innerHTML = successMessage;
      document.getElementById("time").innerHTML = "Last change time: " + new Date().toLocaleTimeString();
    }
  }
}

function clearChoices() {
  choices = []
  total = 0
  document.getElementById("time").innerHTML = "Last change time: " + new Date().toLocaleTimeString();
  document.getElementById("total").innerHTML = "Total numder of completed choices:" + total;
  document.getElementById("gap").innerHTML = ""
  var table = document.getElementById("chosen-majors-table")
  for (let i=1; i<11; i++){
    table.rows[i].cells[0].innerText = "";
    table.rows[i].cells[1].innerText = "";
  }
}