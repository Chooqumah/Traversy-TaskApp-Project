function colorValue() {
    return Math.floor(Math.random() * 256);
}

function colorChange(event){
    let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
    return randomColor;
}

console.log(colorChange());

