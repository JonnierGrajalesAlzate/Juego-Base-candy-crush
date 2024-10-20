// ********************************
// ***Variable Settings of Match***
// ********************************
const items = document.getElementsByClassName("item");

// ************************
// ***Horizontal Matches***
// ************************
const hMatch = (width) => {
    for (let i = 0; i < width; i++) {
        let rowItems = document.querySelectorAll(`[data-row="${i}"]`)
        for (let j = 0; j < rowItems.length - 2; j++) {
            let matchOne = rowItems[j].innerText;
            let matchTwo = rowItems[j + 1].innerText;
            let matchThree = rowItems[j + 2].innerText;
            if (matchOne === matchTwo && matchOne === matchThree) {
                for (let k = j; k < rowItems.length; k++) {
                    if (matchOne === rowItems[k].innerText) {
                        rowItems[k].innerText = null;
                        scoreAdd();
                    } 
                }
            }
        }
    }
}

// ********************
// **Vertical Matches**
// ********************
const vMatch = width => {
    for (let i = 0; i < width; i++) {
        let colItems = document.querySelectorAll(`[data-col="${i}"]`)
        for (let j = 0; j < colItems.length - 2; j++) {
            let matchOne = colItems[j].innerText;
            let matchTwo = colItems[j + 1].innerText;
            let matchThree = colItems[j + 2].innerText;
            if (matchOne === matchTwo && matchOne === matchThree) {
                for (let k = j; k < colItems.length; k++) {
                    if (matchOne === colItems[k].innerText) {
                        colItems[k].innerText = null;
                        scoreAdd();
                    } else {
                        break
                    }
                }
            }
        }
    }
}

// // ******************* 
// // ***Descend Items***
// // *******************
const descendItems = width => {
    for (let i = width; i >= 0; i--) {
        let colItems = document.querySelectorAll(`[data-col="${i}"]`)
        for (let j = colItems.length - 1; j >= 0; j--) {
            if (colItems[j].innerText === "") {
                for (let k = j; k >= 0; k--) {
                    if (colItems[k].innerText !== "") {
                        colItems[j].innerText = colItems[k].innerText;
                        colItems[k].innerText = "";
                        break;
                    }
                }
            }
        }
    }
}

// // **********************
// // ***Fill Empty Items***
// // **********************
const fill = width => {
    for (let i = 0; i < width; i++) {
        let rowItems = document.querySelectorAll(`[data-row="${i}"]`)
        for (let j = 0; j < rowItems.length; j++) {
            if (rowItems[j].innerText === "") {
                rowItems[j].innerText = animals[Math.floor(Math.random() * animals.length)];
            }
        }
    }
}
