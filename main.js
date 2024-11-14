// -------Task 1-------------
// const regExp = /^\d+$/;
//
// const containsOnlyDigits = (str) => {
//     return regExp.test(str);
// }
//
// console.log(containsOnlyDigits("12345")); // Выведет true
// console.log(containsOnlyDigits("12a45")); // Выведет false


// -------Task 2--------------
// const  everySec = () => {
//     setInterval(() => {
//         console.log("Прошла секунда");
//     }, 1000);
// };
// everySec();


// ----------Task 3-----------
// const count = () => {
//     let i = 1;
//     const interval = setInterval(() => {
//         console.log(i);
//         if (i === 10) {
//             clearInterval(interval);
//         }
//         i++;
//     }, 1000);
// };
//
// count()


// ----------Task 4----------
// const block = document.getElementById('color_block');
//
// block.addEventListener('click', () => {
//     block.classList.toggle('block-colored');
// });


// ---------Task 5----------
const xhr = new XMLHttpRequest();
xhr.open('GET','data.json');
xhr.setRequestHeader('Content-type', 'application/json')

xhr.onload = () => {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
}
xhr.send();