let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let button3 = document.querySelector("#button3");
let button4 = document.querySelector("#button4");
let button5 = document.querySelector("#button5");

let menu = document.querySelector("#menu");
let content = document.querySelector("#content");
let appBlock = document.querySelector("#app");
let mainBlock = document.querySelector("#main");
let paragraphs = document.querySelector("#paragraphs");


const height = appBlock.clientHeight;
const width = appBlock.clientWidth;

// appBlock.addEventListener('mousemove', handleMove);
// appBlock.addEventListener('mousemove', handleMove);


let scaleFormulaDown = "scale(0.8)"
let scaleFormulaUp = "scale(1)"
let scaleFormulaMax = "scale(1.10)"

let currentButton = 0;


let bubbleAnimation = () => {
    switch (currentButton) {
        case 1:
            button1.style.transform = scaleFormulaMax   
            setTimeout(normalSize, 50);
            break;
        case 2:
            button2.style.transform = scaleFormulaMax   
            setTimeout(normalSize, 50);
            break;
        case 3:
            button3.style.transform = scaleFormulaMax   
            setTimeout(normalSize, 50);
            break;
        case 4:
            button4.style.transform = scaleFormulaMax   
            setTimeout(normalSize, 50);
            break;
        case 5:
            button5.style.transform = scaleFormulaMax   
            setTimeout(normalSize, 50);
            break;
        default:
        // code block
    }
    

}

let normalSize = () => {
    switch (currentButton) {
        case 1:
            button1.style.transform = scaleFormulaUp   
            break;
        case 2:
            button2.style.transform = scaleFormulaUp   
            break;
        case 3:
            button3.style.transform = scaleFormulaUp   
            break;
        case 4:
            button4.style.transform = scaleFormulaUp   
            break;
        case 5:
            button5.style.transform = scaleFormulaUp   
            break;
        default:
        // code block
    }
    

}







let pressButt1 = () => {
    currentButton = 1;
    button1.style.transform = scaleFormulaDown   
}
let pressButt2 = () => {
    currentButton = 2;
    button2.style.transform = scaleFormulaDown
}
let pressButt3 = () => {
    currentButton = 3;
    button3.style.transform = scaleFormulaDown
}
let pressButt4 = () => {
    currentButton = 4;
    button4.style.transform = scaleFormulaDown
}
let pressButt5 = () => {
    currentButton = 5;
    button5.style.transform = scaleFormulaDown
}
// let unpressButt1 = () => {
//     button1.style.transform = scaleFormulaUp
//     bubbleAnimation(); 
// }
// let unpressButt2 = () => {
//     button2.style.transform = scaleFormulaUp
//     bubbleAnimation(); 
// }
// let unpressButt3 = () => {
//     button3.style.transform = scaleFormulaUp
//     bubbleAnimation(); 
// }
// let unpressButt4 = () => {
//     button4.style.transform = scaleFormulaUp
//     bubbleAnimation(); 
// }
// let unpressButt5 = () => {
//     button5.style.transform = scaleFormulaUp
//     bubbleAnimation(); 
// }


function handleMove(e) {
    /*
      * Get position of mouse cursor
      * With respect to the element
      * On mouseover
      */
    /* Store the x position */
    const xVal = e.layerX
    /* Store the y position */
    const yVal = e.layerY

    /*
      * Calculate rotation valuee along the Y-axis
      * Here the multiplier 20 is to
      * Control the rotation
      * You can change the value and see the results
      */
    const yRotation = 5 * ((xVal - width / 2) / width)

    /* Calculate the rotation along the X-axis */
    const xRotation = -5 * ((yVal - height / 2) / height)

    /* Generate string for CSS transform property */
    const string = 'scale(1) + perspective(500px) scale(1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'

    /* Apply the calculated transformation */
    appBlock.style.transform = string
    paragraphs.style.transform = "translateY(1.5)"
}

/* Add listener for mouseout event, remove the rotation */

// appBlock.addEventListener('mouseout', function () {
//     appBlock.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
// })

// /* Add listener for mousedown event, to simulate click */

// appBlock.addEventListener('mousedown', function () {
//     appBlock.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
// })

// /* Add listener for mouseup, simulate release of mouse click */

// appBlock.addEventListener('mouseup', function () {
//     appBlock.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
// })


console.log(content);

let backgroundColor = "rgb(255, 187, 187)";

let displayPage = (pageNum) => {
    console.log(content.childNodes[pageNum])
    content.childNodes[1].className = "pageInvisible";
    content.childNodes[3].className = "pageInvisible";
    content.childNodes[5].className = "pageInvisible";
    content.childNodes[7].className = "pageInvisible";
    content.childNodes[9].className = "pageInvisible";
    content.childNodes[pageNum].className = "pageVisible";
    content.style.backgroundColor = backgroundColor;
    console.log(menu.childNodes);

}

let init = () => {
    menu.childNodes[1].style.backgroundColor = "rgb(255, 187, 187)";
}

init();

let buttonColor = (buttonNum) => {
    menu.childNodes[1].style.backgroundColor = "rgb(228, 228, 228)";
    menu.childNodes[3].style.backgroundColor = "rgb(228, 228, 228)";
    menu.childNodes[5].style.backgroundColor = "rgb(228, 228, 228)";
    menu.childNodes[7].style.backgroundColor = "rgb(228, 228, 228)";
    menu.childNodes[9].style.backgroundColor = "rgb(228, 228, 228)";

    menu.childNodes[buttonNum].style.backgroundColor = backgroundColor
}

let b1 = () => {
    buttonColor(1)
}
let b2 = () => {
    buttonColor(3)
}
let b3 = () => {
    buttonColor(5)
}
let b4 = () => {
    buttonColor(7)
}
let b5 = () => {
    buttonColor(9)
}


let displayPage1 = () => {
    backgroundColor = "rgb(255, 187, 187)"
    displayPage(1);
    b1();

}
let displayPage2 = () => {
    backgroundColor = "rgb(231, 255, 187)"
    displayPage(3);
    b2();

}
let displayPage3 = () => {
    backgroundColor = "rgb(187, 255, 240)"
    displayPage(5);
    b3();
}
let displayPage4 = () => {
    backgroundColor = "rgb(197, 187, 255)"
    displayPage(7);
    b4();
}
let displayPage5 = () => {
    backgroundColor = "rgb(255, 187, 213)"
    displayPage(9);
    b5();
}

// icons were getting stuck down if mouse was dragged
// made this event listener to prevent issue


// button1.addEventListener("mousemove", unpressButt1);
// button2.addEventListener("mousemove", unpressButt2);
// button3.addEventListener("mousemove", unpressButt3);
// button4.addEventListener("mousemove", unpressButt4);
// button5.addEventListener("mousemove", unpressButt5);


button1.addEventListener("mousedown", pressButt1);
// button1.addEventListener("mouseup", unpressButt1);
button1.addEventListener("mouseup", displayPage1);


button2.addEventListener("mousedown", pressButt2);
// button2.addEventListener("mouseup", unpressButt2);
button2.addEventListener("mouseup", displayPage2);

button3.addEventListener("mousedown", pressButt3);
// button3.addEventListener("mouseup", unpressButt3);
button3.addEventListener("mouseup", displayPage3);

button4.addEventListener("mousedown", pressButt4);
// button4.addEventListener("mouseup", unpressButt4);
button4.addEventListener("mouseup", displayPage4);

button5.addEventListener("mousedown", pressButt5);
// button5.addEventListener("mouseup", unpressButt5);
button5.addEventListener("mouseup", displayPage5);






let buttonOverValues = scaleFormulaMax
let buttonNormValues = scaleFormulaUp

document.querySelectorAll(".buttonDivs").forEach(item => {
    // item.addEventListener("mouseenter", event => {
    //     item.style.transform = buttonOverValues
    // })
    // item.addEventListener("mouseleave", event => {
    //     item.style.transform = buttonNormValues
    // })
    item.addEventListener("mouseup", event => {
        item.style.transform = scaleFormulaUp
        bubbleAnimation(); 
    })

});






// let enterButt1 = (callback) => {
//     button1.style.transform = buttonOverValues
//     console.log(callback);
// }
// let leaveButt1 = () => {
//     button1.style.transform = buttonNormValues;
// }

// let enterButt2 = () => {
//     button2.style.transform = buttonOverValues
// }
// let leaveButt2 = () => {
//     button2.style.transform = buttonNormValues;
// }

// let enterButt3 = () => {
//     button3.style.transform = buttonOverValues
// }
// let leaveButt3 = () => {
//     button3.style.transform = buttonNormValues;
// }

// let enterButt4 = () => {
//     button4.style.transform = buttonOverValues
// }
// let leaveButt4 = () => {
//     button4.style.transform = buttonNormValues;
// }

// let enterButt5 = () => {
//     button5.style.transform = buttonOverValues
// }
// let leaveButt5 = () => {
//     button5.style.transform = buttonNormValues;
// }

// button1.addEventListener("mouseenter", enterButt1);
// button1.addEventListener("mouseleave", leaveButt1);

// button2.addEventListener("mouseenter", enterButt2);
// button2.addEventListener("mouseleave", leaveButt2);

// button3.addEventListener("mouseenter", enterButt3);
// button3.addEventListener("mouseleave", leaveButt3);

// button4.addEventListener("mouseenter", enterButt4);
// button4.addEventListener("mouseleave", leaveButt4);

// button5.addEventListener("mouseenter", enterButt5);
// button5.addEventListener("mouseleave", leaveButt5);












// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

let block1 = document.querySelector("#block1");
let barWidth = 100
let barFull = false;
let animation = () => {
    // ctx.fillStyle = 'white';
    let x = 10
    let y = 10
    
    let height = 100
    // console.log(block1.style);
    block1.style.width = `${barWidth}px`;
    // ctx.fillRect(x, y, width, height);
    // ctx.fillStyle = 'green';
    
    if (barFull === false) {
        barWidth += 1;
    } else if (barFull === true) {
        barWidth -= 1;
    } 
    if (barWidth === 200) {
        barFull = true;
    } else if (barWidth === 0) {
        barFull = false;
    }
    
  
    // ctx.fillRect(x, y, width, height);
    requestAnimationFrame(animation);
}


requestAnimationFrame(animation);






let randomText = () => {
    
    let text = document.querySelector("#paragraph1");
    let generatedArray = [];
    console.log(text.innerText);
    let textGen = () => {
        let randomLetter = Math.floor(Math.random() * 200)
        let alphabetArry = [
            "a", "X", "c", "d", "e", "f", "g", " ", " ", " ", "k", "l", "m", " ", "Xo", "p",
            " ", " ", " ", "X", "u", "v", "w", "X", "y", "z", "1", "2", "X3", "4", "5", "6",
            "7", "X", "9", "X", "b", "b", "b", " ", " ", " ", " ", " ", " ", " ", " ", " ",
            " ", " ", "X", " ", " ", " ", " ", "X", " ", " ", " ", " ", " ", " ", " ", " ", " ",
            " ", " ", " ", " ", "X", " ", "X", " ", " ", " ", " ", " ", 
        ]
        generatedArray.push(alphabetArry[randomLetter]);
    }
    for (i = 0; i < 1500; i++) {
        textGen();
    }
    text.innerText = generatedArray.join();
    console.log(text.innerText);
}

setInterval(randomText, 128);
randomText(); 