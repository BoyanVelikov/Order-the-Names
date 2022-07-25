function solve() {
    function addName() {
        const nameInput = document.getElementsByTagName("input")[0];
        let name = nameInput.value;
        let firstLetter = name[0].toUpperCase();
        let fixedName = firstLetter + name.substring(1).toLowerCase();
        let charIndex = Number(firstLetter.charCodeAt(0) - 65);
        console.log(charIndex);
        const liElements = document.getElementsByTagName("li");
        if (liElements[charIndex].innerHTML !== "") {
            liElements[charIndex].innerHTML += ", " + fixedName;
        } else {
            liElements[charIndex].innerHTML += fixedName;
        }
        nameInput.value = '';
    }
    const addButton = document.getElementsByTagName("button")[0];
    addButton.addEventListener('click', addName);
}