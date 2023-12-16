/* a07 - exercicio guiado
- cada sala tem 5 alunos
- cada aluno tem um numero sorteado de 1 a 100
- faca um programa que receba os 5 numeros sorteados e mostre o maior valor
*/
const students = ['Pedro', 'Francisco', 'Vitor', 'Fabianna', 'Rocio']
class Student{
  id;
  fullName;
  luckyNumber;

  constructor(id, fullName, luckyNumber){
    this.id=id;
    this.fullName=fullName;
    this.luckyNumber = this.getLuckyNumber();
  }

  getLuckyNumber(){
    const lotery = Math.floor(Math.random() * 100).toString();
    const numLotery = Number(lotery);
    return numLotery
  }
}

const classroomFactory = (students)=>{
  const classRoom = []
  for(let i = 0; i < students.length; i++){
    let studentId = "a00"+[i+1]
    studentId = new Student(studentId , students[i] )
    classRoom.push([studentId])
  }
  return classRoom
}

const classroom = classroomFactory(students)

const hightestNumber = (classroom)=>{
  for(let i = 0; i < classroom.length; i++){
    const hightest = classroom[i].luckyNumber > classroom[i++].luckyNumber? classroom[i]: classroom[i++]
    return hightest
  }  

}

console.log(
  classroom)
 console.log( hightestNumber(classroom))