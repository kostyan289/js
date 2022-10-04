class People {
    constructor(options) {
        this.name = options.name;
        this.surname = options.surname;
        this.datebirth = options.datebirth;
        this.speaks = options.speaks;
    }
    getFullName () {
        // возвращает имя и фамилию.
        return (this.name + " " +  this.surname)
    }
    introduction (name) {
        //выводит в консоль сообщение с именем и фамилией.
        let FullName =name + " " + this.getFullName()
        console.log(FullName);
    }
    calcAges () {
        //выводит в консоль сообщение указанием, сколько человеку лет.
        const d22 = new Date
        let Age = d22.getFullYear() - this.datebirth.getFullYear();
        console.log('Age:', Age);
    }
    say() {
        // который выводит в консоль сообщение от имени этого человека
        console.log(`${this.getFullName()} Say: ${this.speaks}`);
    }
}
class Student  extends People {
    constructor(options) {
        super(options);
        this.dateStudy = options.dateStudy;
    }
    calcMonthsOfEducation () {
        //выводит в консоль сообщение с указанием, сколько лет студент обучается.
        const d23 = new Date;
        let Age1 = d23.getFullYear() - this.dateStudy.getFullYear();
        console.log('Study:', Age1 ,"Year");
    }
    Lern (work) {
        //выводит в консоль сообщение с именем и фамилией, указывающее, что этот студент что-то сейчас учит/делает ("что-то" - строка, передаётся в качестве аргумента).
        console.log(`${this.getFullName()} lern: ${work}`);
    }

}
class Teacher extends People {
    constructor(options) {
        super(options);
        this.dateTeaching = options.dateTeaching;
        
    }
    calcMonthsOfTeaching () {
        //выводит в консоль сообщение с указанием, сколько лет учитель преподаёт
        const d24 = new Date
        let Age2 = d24.getFullYear() - this.dateTeaching.getFullYear();
        console.log('Teaching:', Age2 , "Year");
    }
    Teach(phrase) {
        //выводит в консоль сообщение с именем и фамилией, указывающее, что этот учитель сейчас что-то преподаёт ("что-то" - строка, передаётся в качестве аргумента)
        console.log(this.getFullName(),phrase);
    }
    Ask (ask) {
        //задать вопрос. Аргументы: вопрос (string) и студент (Student). Выводит в консоль вопрос и дополнительно - имя и фамилию ученика.
        console.log(ask + student.getFullName());
    }
}
class LearningGroup  {
    constructor(optionsgroup) {
        this.nameGroup = optionsgroup.nameGroup;
        this.teacher = optionsgroup.teacher;
        this.students = [];
    }
    AddStudent (student) {
        //принимает экземпляр класса Student и добавляет его в учебную группу
        this.students.push(student)
        console.log(this.nameGroup, ":" , student)
    }
    PrintGroupInfo () {
        //выводит информацию о группе - название группы, преподавателя и список студентов
        console.log("Name group:", this.nameGroup, "\nName teacher:", this.teacher,"\nGroup:", this.students)
    }
}

const people = new People({
    name : "Ivan",
    surname : "Ivanov",
    datebirth : new Date(2000,12,12),
    speaks : "Today is just a great day."

});
const people1 = new People({

    name : "Iv",
    surname : "Ivov",
    datebirth : new Date(2003,03,03),
    speaks : "just a great day."

});
const student = new Student({
    name : "Igor",
    surname : "Cergeevich",
    datebirth : new Date(2008,12,12),
    dateStudy : new Date(2017,07,07),
    speaks : "Today.",
    lern  : "cleaning at home",
});
const student1= new Student({
    name : "Tolia",
    surname : "Cergeevich",
    datebirth : new Date(2007,06,06),
    dateStudy : new Date(2014,02,03),
    speaks : "Today dfghrh.",
    lern  : "cleaning at Work",
});
const student2= new Student({
    name : "Tolia",
    surname : "Cergeevich",
    datebirth : new Date(2007,06,06),
    dateStudy : new Date(2014,02,03),
    speaks : "Today dfghrh.",
    lern  : "cleaning at Work",
});
const student3= new Student({
    name : "Tolia",
    surname : "Cergeevich",
    datebirth : new Date(2007,06,06),
    dateStudy : new Date(2014,02,03),
    speaks : "Today dfghrh.",
    lern  : "cleaning at Work",
});
const student4= new Student({
    name : "Tolia",
    surname : "Cergeevich",
    datebirth : new Date(2007,06,06),
    dateStudy : new Date(2014,02,03),
    speaks : "Today dfghrh.",
    lern  : "cleaning at Work",
});
const student5= new Student({
    name : "Tolia",
    surname : "Cergeevich",
    datebirth : new Date(2007,06,06),
    dateStudy : new Date(2014,02,03),
    speaks : "Today dfghrh.",
    lern  : "cleaning at Work",
});
const student6= new Student({
    name : "Tolia",
    surname : "Cergeevich",
    datebirth : new Date(2007,06,06),
    dateStudy : new Date(2014,02,03),
    speaks : "Today dfghrh.",
    lern  : "cleaning at Work",
});
const teacher = new Teacher({
    name : "Vitia",
    surname : "Avdeenko",
    datebirth : new Date(2002,12,12),
    dateTeaching : new Date(2020,05,05),
    speaks : "Today is good.",
});
const teacher1 = new Teacher({
    name : "Olga",
    surname : "Mironenko",
    datebirth : new Date(1990,08,08),
    dateTeaching : new Date(2008,02,07),
    speaks : "No homework today.",
});
const learningGroup = new LearningGroup({
    nameGroup : "Gd-11",
    teacher : "Ivanov Ivan Ivanovich",
});
const learningGroup1 = new LearningGroup({
    nameGroup : "Gd-21",
    teacher : "Sergey Sergeevich",
});




console.log("People:");
people.introduction('People:');
people.calcAges();
people.say();


console.log("")
console.log("People1:");
people1.introduction('People:');
people1.calcAges();
people1.say();



console.log("")
student.introduction('Student:');
student.calcAges();
student.say();
student.Lern('studying chemistry today.');
student.calcMonthsOfEducation ();

console.log("")
student1.introduction('Student:');
student1.calcAges();
student1.say();
student1.Lern('studying chemistry today.');
student1.calcMonthsOfEducation ();

console.log("")
teacher.introduction('Teacher:');
teacher.Teach(": Physics");
teacher.calcAges();
teacher.say();
teacher.calcMonthsOfTeaching ();
teacher.Ask("What is this? ");

console.log("")
teacher1.introduction('Teacher:');
teacher1.Teach(": Physics");
teacher1.calcAges();
teacher1.say();
teacher1.calcMonthsOfTeaching ();
teacher1.Ask("What is this? ");

console.log("")
learningGroup.AddStudent(student);
learningGroup.AddStudent(student1);
learningGroup.AddStudent(student2);
learningGroup.AddStudent(student3);
learningGroup.AddStudent(student4);
learningGroup.PrintGroupInfo();
learningGroup1.AddStudent(student5);
learningGroup1.PrintGroupInfo();




