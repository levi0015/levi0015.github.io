window.addEventListener("load", init)

function init(event) {
    calcTotalEc()
    changeStyleTotalEc()
    changeGradeStyle()
}

function calcTotalEc() {
    const allEc = document.getElementsByClassName("ec");
    let total = 0;
    for (let i = 0; i < allEc.length; i++) {
        total += Number(allEc[i].innerText);
    }
    document.getElementById("totalec").innerText = total;
    return total;
}

function changeStyleTotalEc() {
    const totalec = document.getElementById("totalec");
    if (totalec.innerText >= 0 && totalec.innerText <= 44) {
        totalec.style = "color: red";
    } else if (totalec.innerText >= 45 && totalec.innerText <= 59) {
        totalec.style = "color: orange";
    } else if (totalec.innerText == 60) {
        totalec.style = "color: rgb(0, 255, 0)";
    } else {
        totalec.style = "color: red";
        totalec.innerText = "EC Error";
    }
}

function changeGradeStyle() {
    const allGrades = document.getElementsByClassName("grade");
    for (let i = 0; i < allGrades.length; i++) {
        if (allGrades[i].innerText === "-") {
            console.log("Not Graded Yet!")
        }
        for (let j = 0; j < allGrades[i].parentElement.children.length; j++) {
            if (allGrades[i].innerText >= 0 && allGrades[i].innerText <= 5.4) {
                allGrades[i].parentElement.children[j].style = "background-color: red";
            } else if (allGrades[i].innerText >= 5.5 && allGrades[i].innerText <= 5.9) {
                allGrades[i].parentElement.children[j].style = "background-color: orange";
            } else if (allGrades[i].innerText >= 6 && allGrades[i].innerText <= 10) {
                allGrades[i].parentElement.children[j].style = "background-color: rgb(0, 255, 0)";
            }
        }
    }
}