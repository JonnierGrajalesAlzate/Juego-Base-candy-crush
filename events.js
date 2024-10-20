// *********************************
// ***Variable Settings of Events***
// *********************************
let itemClicked = [];  // lista de text-content capturados al hacer click
let targetsArray = []; // lista de target capturados al hacer click (div item)

// ****************
// ***Items Swap***
// ****************
const swap = () => {
    targetsArray[0].innerHTML = itemClicked[1];
    targetsArray[1].innerHTML = itemClicked[0];
}

// ***************************
// ***Select Items Function***
// ***************************
const select = e => {
    let targetContent = e.target.textContent;
    // allowed movements
    let movAllow = () => {
        const dataXOne = parseInt(targetsArray[0].dataset.row);
        const dataYOne = parseInt(targetsArray[0].dataset.col);
        const dataXTwo = parseInt(targetsArray[1].dataset.row);
        const dataYTwo = parseInt(targetsArray[1].dataset.col);
        if (dataXOne === dataXTwo) {
            return (dataYOne === dataYTwo - 1) || (dataYOne === dataYTwo + 1);
        } else if (dataYOne === dataYTwo) {
            return (dataXOne === dataXTwo - 1) || (dataXOne === dataXTwo + 1);
        } else {
            return false
        }
    }
    // first click
    if (itemClicked.length === 0) {
        e.target.classList.add("selected");
        itemClicked.push(targetContent);
        targetsArray.push(e.target);
    }
    // second click
    else if (itemClicked.length === 1) {
        e.target.classList.add("selected");
        itemClicked.push(targetContent);
        targetsArray.push(e.target);
        if (movAllow()) {
            swap();
            hMatch(width);
            vMatch(width);
            descendItems(width);
            fill(width);
        }
        else {
            targetsArray[0].classList.remove("selected");
        }
    }
    // third click      
    else if (itemClicked.length === 2) {
        for (let i = 0; i < itemClicked.length; i++) {
            targetsArray[i].classList.remove("selected");
        }
        e.target.classList.add("selected");
        itemClicked = [];
        targetsArray = [];
        itemClicked.push(targetContent);
        targetsArray.push(e.target);
    }
}

