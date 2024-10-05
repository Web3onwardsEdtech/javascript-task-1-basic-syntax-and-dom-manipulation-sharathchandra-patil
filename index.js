const userName = process.argv[2];
const userAge = parseInt(process.argv[3]);
const isStudent = process.argv[4] === 'true';
function createMessage(name, age, student) {
  let message = ` Hello, my name is ${name}`;
  if (student) {
    message += ' and I am a student.';
  }
  if (age <= 10) {
    for(let i=1;i<=age;i++)
    {
        console.log(message);
    }
  } else {
    console.log(message);
  }
}
createMessage(userName, userAge, isStudent);

