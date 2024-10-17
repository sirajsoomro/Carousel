let divDis = document.getElementById('imagetag');
let linkDis = ['01.jpg' , '02.jpg' , 'download (1).jpeg'];
let count = 0;

function fun() {
    if(count > 2){
        count = 0
    }
    divDis.setAttribute('src' , linkDis[count])
    count++
}

setInterval(fun, 2000)

// let imagDis = document.getElementById('imagetag')
// let links = ['01.jpg' , '02.jpg' , 'download (1).jpeg']
// let count = 0;

// function manage() {
//     if (count > 2) {
//         count = 0
//     }
//     imagDis.setAttribute('src' , links[count])
//     count++
// }

// setInterval(manage , 2000)