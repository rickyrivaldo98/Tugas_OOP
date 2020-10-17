class Student {
  constructor(firstName, lastName, age, birth, gender, id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.birth = birth;
    this.gender = gender;
    this.id = id;
    this.hobby = [];
  }

  set fullName(x) {
    if (/[A-Za-z]\s[A-Za-z]/.test(x)) {
      [this.firstName, this.lastName] = x.split(" ");
    } else {
      throw error("Bad Full Name Input");
    }
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  addhobby(x) {
    this.hobby.push(x);
  }
}

function SetFirstName() {
  let studentName1 = document.getElementById("input-nama1").value;
  return studentName1;
}

function SetLastName() {
  let studentName2 = document.getElementById("input-nama2").value;
  return studentName2;
}

function SetAge() {
  let studentAge = document.getElementById("input-umur").value;
  return studentAge;
}

function SetDateOfBirth() {
  let studentBirth = document.getElementById("input-tl").value;
  return studentBirth;
}

function SetGender() {
  let studentGender = document.getElementById("input-kelamin").value;
  return studentGender;
}

function SetId() {
  var n = Math.floor(Math.random() * 11);
  var k = Math.floor(Math.random() * 1000000);
  var m = String.fromCharCode(n) + k;
  return m;
}

function SetHobby() {
  let studentHobby = document.getElementById("input-hobi").value;
  return studentHobby;
}

function test() {
  let newStudent = new Student(
    SetFirstName(),
    SetLastName(),
    SetAge(),
    SetDateOfBirth(),
    SetGender(),
    SetId()
  );

  document.getElementById(
    "result"
  ).innerHTML = `Nama: ${newStudent.fullName} Umur: ${newStudent.age} Tanggal Lahir: ${newStudent.birth} Jenis Kelamin: ${newStudent.gender} ID: ${newStudent.id}`;
}

let newStudent = new Student();
let count = 0;
function tambahhobby() {
  newStudent.addhobby(SetHobby());
  // newStudent.hobby.push("halo");
  // newStudent.addhobby("Tidur");
  console.log(newStudent.hobby);

  let parentElement = document.getElementById("result2");
  let div = document.createElement("div");
  div.id = "id" + count;
  //   let i = newStudent.hobby.length

  let newCheckBox = document.createElement("input");
  newCheckBox.type = "checkbox";
  //   newCheckBox.id = "id" + count;
  newCheckBox.value = newStudent.hobby[count];
  let newSpan = document.createElement("span");
  newSpan.innerText = newCheckBox.value;
  let newBr = document.createElement("br");

  div.appendChild(newCheckBox);
  div.appendChild(newSpan);
  div.appendChild(newBr);

  parentElement.appendChild(div);

  count++;
  console.log(count);
  //   document.getElementById("result2").innerHTML = `Hobby: ${newStudent.hobby}`;
}

function hapushobby() {
  let parentElement = document.getElementById("result2");
  parentElement.removeChild(parentElement.lastChild);
}
