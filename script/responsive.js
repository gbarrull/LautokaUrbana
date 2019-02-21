function changeMenu(option){
	var windowSize = window.outerWidth;

    localStorage.setItem("option", option);
    console.log("option: ", option);

    if (option == 1 && windowSize > 768 ){
        document.getElementById("option1").style.display = "block";
        document.getElementById("menu-selection-1").style.background = "#33FF99";
        document.getElementById("menu-selection-1").style.color = "white";
        document.getElementById("menu-selection-1").style.opacity = "1";
        document.getElementById("option2").style.display = "none";
        document.getElementById("menu-selection-2").style.background = "white";
        document.getElementById("menu-selection-2").style.color = "black";
        document.getElementById("menu-selection-2").style.opacity = ".8";
        document.getElementById("option3").style.display = "none";
        document.getElementById("menu-selection-3").style.background = "white";
        document.getElementById("menu-selection-3").style.color = "black";
        document.getElementById("menu-selection-3").style.opacity = ".8";
    }
	else if (option == 1 && windowSize <= 768 ){
        document.getElementById("option1").style.display = "block";
        document.getElementById("menu-selection-1").style.background = "#33FF99";
        document.getElementById("menu-selection-1").style.color = "white";
        document.getElementById("menu-selection-1").style.opacity = "1";
        document.getElementById("option2").style.display = "none";
        document.getElementById("menu-selection-2").style.background = "white";
        document.getElementById("menu-selection-2").style.color = "black";
        document.getElementById("menu-selection-2").style.opacity = ".8";
        document.getElementById("option3").style.display = "none";
        document.getElementById("menu-selection-3").style.background = "white";
        document.getElementById("menu-selection-3").style.color = "black";
        document.getElementById("menu-selection-3").style.opacity = ".8";
    }
    else if (option == 2 && windowSize > 768 ){
        document.getElementById("option1").style.display = "none";
        document.getElementById("menu-selection-1").style.background = "white";
        document.getElementById("menu-selection-1").style.color = "black";
        document.getElementById("menu-selection-1").style.opacity = ".8";
        document.getElementById("option2").style.display = "block";
        document.getElementById("menu-selection-2").style.background = "#33FF99";
        document.getElementById("menu-selection-2").style.color = "white";
        document.getElementById("menu-selection-2").style.opacity = "1";
        document.getElementById("option3").style.display = "none";
        document.getElementById("menu-selection-3").style.background = "white";
        document.getElementById("menu-selection-3").style.color = "black";
        document.getElementById("menu-selection-3").style.opacity = ".8";
    }
	else if (option == 2 && windowSize <= 768 ){
        document.getElementById("option1").style.display = "none";
        document.getElementById("menu-selection-1").style.background = "white";
        document.getElementById("menu-selection-1").style.color = "black";
        document.getElementById("menu-selection-1").style.opacity = ".8";
        document.getElementById("option2").style.display = "block";
        document.getElementById("menu-selection-2").style.background = "#33FF99";
        document.getElementById("menu-selection-2").style.color = "white";
        document.getElementById("menu-selection-2").style.opacity = "1";
        document.getElementById("option3").style.display = "none";
        document.getElementById("menu-selection-3").style.background = "white";
        document.getElementById("menu-selection-3").style.color = "black";
        document.getElementById("menu-selection-3").style.opacity = ".8";
    }
    else if (option == 3 && windowSize > 768 ){
        document.getElementById("option1").style.display = "none";
        document.getElementById("menu-selection-1").style.background = "white";
        document.getElementById("menu-selection-1").style.color = "black";
        document.getElementById("menu-selection-1").style.opacity = ".8";
        document.getElementById("option2").style.display = "none";
        document.getElementById("menu-selection-2").style.background = "white";
        document.getElementById("menu-selection-2").style.color = "black";
        document.getElementById("menu-selection-2").style.opacity = ".8";
        document.getElementById("option3").style.display = "block";
        document.getElementById("menu-selection-3").style.background = "#33FF99";
        document.getElementById("menu-selection-3").style.color = "white";
        document.getElementById("menu-selection-3").style.opacity = "1";
    }
	else if (option == 3 && windowSize <= 768 ){
        document.getElementById("option1").style.display = "none";
        document.getElementById("menu-selection-1").style.background = "white";
        document.getElementById("menu-selection-1").style.color = "black";
        document.getElementById("menu-selection-1").style.opacity = ".8";
        document.getElementById("option2").style.display = "none";
        document.getElementById("menu-selection-2").style.background = "white";
        document.getElementById("menu-selection-2").style.color = "black";
        document.getElementById("menu-selection-2").style.opacity = ".8";
        document.getElementById("option3").style.display = "block";
        document.getElementById("menu-selection-3").style.background = "#33FF99";
        document.getElementById("menu-selection-3").style.color = "white";
        document.getElementById("menu-selection-3").style.opacity = "1";
    }
}