window.addEventListener("load", init);

function init(event) {
    checkIfPassed();
    calcTotalEc();
    changeStyleTotalEc();
    changeGradeStyle();
}

/**
 * Checks all the courses if I have passed them, if so, calcTotalEc knows he has to count the EC
 * also changes the style of the course and EC to 'green' when passed
 */
function checkIfPassed() {
    const allGrades = document.getElementsByClassName("grade");
    let count = 0;

    for (let i = 0; i < allGrades.length; i++) {
        if (allGrades[i].parentElement.childElementCount === 6) {
            if (allGrades[i].innerText === 'Pass') {
                count = 1000
            } else if (allGrades[i].innerText !== '-') {
                count = (Number(allGrades[i].innerText) * Number(allGrades[i].parentElement.children[2].innerText));
            }
            if (i < allGrades.length - 1 && allGrades[i].innerText !== '-') {
                if (allGrades[i + 1].parentElement.childElementCount === 3) {
                    count += (Number(allGrades[i + 1].innerText) * Number(allGrades[i + 1].parentElement.children[1].innerText));
                    if (allGrades[i + 2].parentElement.childElementCount === 3) {
                        count += (Number(allGrades[i + 2].innerText) * Number(allGrades[i + 2].parentElement.children[1].innerText));
                    }
                }
            }
            count /= 100;
            if (count >= 5.5) {
                allGrades[i].parentElement.children[5].innerText = 'true';
                allGrades[i].parentElement.children[0].style.backgroundColor = "rgb(0, 255, 0)"
                allGrades[i].parentElement.children[4].style.backgroundColor = "rgb(0, 255, 0)"
            } else if (count > 0) {
                allGrades[i].parentElement.children[5].innerText = 'false';
                allGrades[i].parentElement.children[0].style.backgroundColor = "red"
                allGrades[i].parentElement.children[4].style.backgroundColor = "red"
            }
        }
        count = 0;
    }
}

/**
 * Calculates the amount of EC I have earned and and sets it to HTML
 * @returns total
 */
function calcTotalEc() {
    const passedAt = document.getElementsByClassName("passedat");
    let total = 0;
    for (let i = 0; i < passedAt.length; i++) {
        if (passedAt[i].innerText === 'true') {
            total += Number(passedAt[i].parentElement.children[4].innerText);
        }
    }
    document.getElementById("totalec").innerText = total;
    return total;
}

/**
 * Changes the styles for my TotalEC, to check if I already passed the NBSA of my Propedeuse
 */
function changeStyleTotalEc() {
    const totalec = document.getElementById("totalec");
    if (totalec.innerText >= 0 && totalec.innerText <= 44) {
        totalec.style.color = "red";
    } else if (totalec.innerText >= 45 && totalec.innerText <= 59) {
        totalec.style.color = "orange";
    } else if (totalec.innerText == 60) {
        totalec.style.color = "rgb(0, 255, 0)";
    } else {
        totalec.style.color = "red";
        totalec.innerText = "EC Error";
    }
}

/**
 * Changes the colors of the courses, when a grade has a number
 */
function changeGradeStyle() {
    const allGrades = document.getElementsByClassName("grade");
    for (let i = 0; i < allGrades.length; i++) {
        if (allGrades[i].parentElement.childElementCount === 6) {
            for (let j = 1; j < allGrades[i].parentElement.children.length - 2; j++) {
                if (allGrades[i].innerText >= 0 && allGrades[i].innerText <= 5.4) {
                    allGrades[i].parentElement.children[j].style.backgroundColor = "red";
                } else if (allGrades[i].innerText >= 5.5 && allGrades[i].innerText <= 5.9) {
                    allGrades[i].parentElement.children[j].style.backgroundColor = "orange";
                } else if (allGrades[i].innerText >= 6 && allGrades[i].innerText <= 10 || allGrades[i].innerText === 'Pass') {
                    allGrades[i].parentElement.children[j].style.backgroundColor = "rgb(0, 255, 0)";
                }
            }
        } else if (allGrades[i].parentElement.childElementCount === 3) {
            for (let j = 0; j < allGrades[i].parentElement.children.length; j++) {
                if (allGrades[i].innerText >= 0 && allGrades[i].innerText <= 5.4) {
                    allGrades[i].parentElement.children[j].style.backgroundColor = "red";
                } else if (allGrades[i].innerText >= 5.5 && allGrades[i].innerText <= 5.9) {
                    allGrades[i].parentElement.children[j].style.backgroundColor = "orange";
                } else if (allGrades[i].innerText >= 6 && allGrades[i].innerText <= 10 || allGrades[i].innerText === 'Pass') {
                    allGrades[i].parentElement.children[j].style.backgroundColor = "rgb(0, 255, 0)";
                }
            }
        }
        if (allGrades[i].innerText >= 6 && allGrades[i].innerText <= 7.9) {
            allGrades[i].style.backgroundColor = "rgb(0, 200, 0)";
        } else if (allGrades[i].innerText >= 8 && allGrades[i].innerText <= 9.9) {
            allGrades[i].style.backgroundColor = "rgb(0, 150, 0)";
        } else if (allGrades[i].innerText == 10 || allGrades[i].innerText === 'Pass') {
            allGrades[i].style.color = "yellow";
            allGrades[i].style.backgroundColor = "rgb(0, 105, 0)";
        }
    }
}