//chp 49 t0 52 start.
//01
function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Display form data on the web page
    var formDataElement = document.getElementById('formData');
    formDataElement.innerHTML = '<h2>Form Data:</h2>' +
      '<p><strong>Name:</strong> ' + name + '</p>' +
      '<p><strong>Email:</strong> ' + email + '</p>' +
      '<p><strong>Password:</strong> ' + password + '</p>';
  
    // Clear form fields
    document.getElementById('name').value = 'name';
    document.getElementById('email').value = 'email';
    document.getElementById('password').value = 'password';
  }

  //02
  function showFullDetails(elementId) {
    var element = document.getElementById(elementId);
  
    if (element.classList.contains('hidden')) {
      element.classList.remove('hidden');
    } else {
      element.classList.add('hidden');
    }
  }

  //03
   
   const studentForm = document.getElementById('studentForm');
   const nameInput = document.getElementById('name');
   const ageInput = document.getElementById('age');

   const studentTable = document.getElementById('studentTable');
   const tableBody = studentTable.querySelector('tbody');

   const editForm = document.getElementById('editForm');
   const editNameInput = document.getElementById('editName');
   const editAgeInput = document.getElementById('editAge');
   const updateBtn = document.getElementById('updateBtn');
   const cancelBtn = document.getElementById('cancelBtn');

   let editRowIndex = -1;
   function createRow(name, age) {
     const row = document.createElement('tr');

     const nameCell = document.createElement('td');
     nameCell.textContent = name;
     row.appendChild(nameCell);

     const ageCell = document.createElement('td');
     ageCell.textContent = age;
     row.appendChild(ageCell);

     const actionsCell = document.createElement('td');
     const editButton = document.createElement('button');
     editButton.textContent = 'Edit';
     editButton.addEventListener('click', () => {
       showEditForm(row);
     });
     actionsCell.appendChild(editButton);

     const deleteButton = document.createElement('button');
     deleteButton.textContent = 'Delete';
     deleteButton.addEventListener('click', () => {
       deleteRow(row);
     });
     actionsCell.appendChild(deleteButton);

     row.appendChild(actionsCell);

     return row;
   }
   function addStudent(name, age) {
     const newRow = createRow(name, age);
     tableBody.appendChild(newRow);
   }

   //04
   function Display() {
    DisWin = window.open('', ' NewWin' , 'toolbar=no, status=no, width=300, height=200')
    message = "<ul><li><b>NAME: </b>" + document.form1.yourname.value;
    message = "<ul><li><b>ADDRESS: </b>" + document.form1.address.value;
    message = "<ul><li><b>PHONE: </b>" + document.form1.phone.value;
    DisWin.document.write(message);
   }

   
   //chp 49 to 52 end.

   //chp 53 to 58 start.
   // 01
