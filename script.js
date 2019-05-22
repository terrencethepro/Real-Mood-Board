$('button').click(function(){
    var input = $('input').val();
    $(".images").html("");
    if(input === "happy"){
        happy();
    } else if(input==="tired"){
        tired();
    }else if(input==="sad"){
        sad();
    }else{
     alert("Please enter comedy, romance, or horror!");   
    }
});


function happy(){
changeBackground();
    changeTextColor("red");
    displayImage("https://media.giphy.com/media/TdfyKrN7HGTIY/giphy.gif");
    
}
function tired(){
    changeBackground();
    changeTextColor("gold");
    displayImage("https://media.giphy.com/media/bEs40jYsdQjmM/giphy.gif");
}
function sad(){
    changeBackground();
    changeTextColor("pink");
    displayImage("https://media.giphy.com/media/OPU6wzx8JrHna/giphy.gif");
}


function changeBackground(backgroundImage){
    $('body').css('background-image', "url("+backgroundImage+")");
}

function changeTextColor(color){
    $('body').css('color', color);
}

function displayImage(image){
    $('.images').append('<img src ='+ image + '>');

}