function generateID(size) {

    const upperLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerLetter = 'abcdefghijklmnopqrstuvwxyz';
    const combine = upperLetter + lowerLetter;
    let id = '';

    for (let i = 0; i < size; i++) {
        const uniqueId = Math.floor(Math.random() * combine.length);
        id += combine[uniqueId];

    }
    return id;
}
const generatedId = generateID(10);
console.log(generatedId);