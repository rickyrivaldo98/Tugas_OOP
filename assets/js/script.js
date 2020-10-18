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
  let studentName1 = document.getElementById("firstName").value;
  if (studentName1 == null) {
    throw error("Bad Full Name Input");
  } else {
    return studentName1;
  }
}

function SetLastName() {
  let studentName2 = document.getElementById("lastName").value;
  if (studentName2 == null) {
    throw error("Bad Full Name Input");
  } else {
    return studentName2;
  }
}

function SetAge() {
  let studentAge = document.getElementById("inputAge").value;
  return studentAge;
}

function SetDateOfBirth() {
  let studentBirth = document.getElementById("birthday").value;
  return studentBirth;
}

function SetGender() {
  let studentGender = document.querySelector('input[name= "gender"]:checked')
    .value;
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
var no = -1;
function No() {
  no = isNaN(no) ? -1 : no;
  no++;
  return no;
}

function modalHobby(x) {
  document.getElementById("isimodal").innerHTML = `<!-- Modal content-->
  <div class="modal-content">
    <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal">&times;</button>
      <h4 class="modal-title">Tambah Hobby</h4>
    </div>
    <div class="modal-body">
        <div class="form-group row">
        <label class="col-sm-3 col-form-label">Hobby</label>
        <input id="input-hobi" required>
        </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-success btn-lg" onclick="tambahhobby(${x})" data-dismiss="modal">Save</button>
      <!-- <button type="button" class="btn btn-default" >Close</button> -->
    </div>
  </div>
  

  `;
}

function addStudent() {
  let newStudent = new Student(
    SetFirstName(),
    SetLastName(),
    SetAge(),
    SetDateOfBirth(),
    SetGender(),
    SetId()
  );

  // document.getElementById(
  //   "result"
  // ).innerHTML = `Nama: ${newStudent.fullName} Umur: ${newStudent.age} Tanggal Lahir: ${newStudent.birth} Jenis Kelamin: ${newStudent.gender} ID: ${newStudent.id}`;

  document.getElementById("result").innerHTML += `<tr>
  <th scope="row">${No()}</th>
  <td><p>${newStudent.fullName}</p></td>
  <td>
    <p>${newStudent.age}</p>
  </td>
  <td><p>${newStudent.birth}</p></td>
  <td>${newStudent.gender}</td>
  <td>
  ${newStudent.id}
  </td>
  <td >
    <form id="result${no}"></form>
  </td>
  <td>
    <button
      type="button"
      data-toggle="modal"
      data-target="#modalhobby"
      onclick="modalHobby(${no})"
      class="btn btn-primary btn-sm"
    >
      🏃‍♂️Add Hobby💨
    </button>
    <br/><br/>
    <button
    type="button"
    onclick="hapushobby(${no})"
    class="btn btn-danger btn-sm"
  >
    ❌ Delete Hobby
  </button>
  </td>
</tr>`;

  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("inputAge").value = "";
  document.getElementById("birthday").value = "";
  // document.querySelector('input[name= "gender"]:checked').value = "";
}

let newStudent = new Student();
let count = 0;

function tambahhobby(x) {
  newStudent.addhobby(SetHobby());
  // newStudent.hobby.push("halo");
  // newStudent.addhobby("Tidur");
  console.log(newStudent.hobby);

  let parentElement = document.getElementById("result" + x);
  let div = document.createElement("div");
  div.id = "id" + count;
  //   let i = newStudent.hobby.length

  let newCheckBox = document.createElement("input");
  newCheckBox.type = "checkbox";
  newCheckBox.id = "id" + count;
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

function hapushobby(x) {
  let parentElement = document.getElementById("result" + x);
  let check = document.forms[x];
  let value;
  let i;
  for (i = 0; i < check.length; i++) {
    if (check[i].checked) {
      value = check[i].id;
      //   console.log(check[i]);
      parentElement.removeChild(document.getElementById(value));
      console.log("Nilai" + value);
    }
  }
}
