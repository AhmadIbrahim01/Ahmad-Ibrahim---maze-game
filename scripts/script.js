// Starting the game by hovering in the start button
start.addEventListener("mouseover", function(){
    game_started = true
})


// Add mouseover event listener for boundaries
boundaries.forEach(boundary => {
    boundary.addEventListener("mouseover", function(event){
        event.target.style.backgroundColor = "red"
        if (game_started == true){
            alert("YOU LOST")
            location.reload()
        }
    });
    boundary.addEventListener("mouseout", function(event){
        event.target.style.backgroundColor = "#eeeeee"
    });
});

end.addEventListener("mouseover", function(){
    if (game_started == true){
        alert("YOU WIN")
        location.reload()
    }
})

