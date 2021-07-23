function validateForm(event) {
  "use strict";
  event.preventDefault();
  const form = document.getElementById("create-page");
  if (!form.checkValidity()) {
    event.stopPropagation();
    form.classList.add("was-validated");
    return false;
  }
  return submitForm();
}

function submitForm() {
  console.log("get Form content");
  const name = document.getElementById("name").value;
  console.log("Name Value -->", name);
  clearForm();
  return true;
}

function clearForm() {
  /**
   * Get name field and reser its value
   */

  const nameField = document.getElementById("name");
  nameField.value = "";

  const form = document.getElementById("create-page");
  form.classList.remove("was-validated");
}
