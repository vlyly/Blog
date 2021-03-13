const ID_input = document.getElementById("ID_input");
const password_input = document.getElementById("password_input");
const password_check_input = document.getElementById("password_check_input");
const name_input = document.getElementById("name_input");
const birthday_year_input = document.getElementById("birthday_year_input");
const birthday_month_input = document.getElementById("birthday_month_input");
const birthday_day_input = document.getElementById("birthday_day_input");
const gender_input = document.getElementById("gender_input");
const email_input = document.getElementById("email_input");
const phoneNumber_first_input = document.getElementById(
  "phoneNumber_first_input"
);
const phoneNumber_second_input = document.getElementById(
  "phoneNumber_second_input"
);
const phoneNumber_third_input = document.getElementById(
  "phoneNumber_third_input"
);

const ID_wrong_warning = document.getElementById("ID_wrong_warning");
const ID_sameID_warning = document.getElementById("ID_sameID_warning");
const ID_length_warning = document.getElementById("ID_length_warning");
const ID_enabled = document.getElementById("ID_enabled");
const password_wrong_warning_container = document.getElementById(
  "password_wrong_warning_container"
);
const password_guid_button = document.getElementById("password_guid_button");
const password_guid_messageBox = document.getElementById(
  "password_guid_messageBox"
);
const password_lenght_warning = document.getElementById(
  "password_length_warning"
);
const password_check_warning = document.getElementById(
  "password_check_warning"
);
const name_warning = document.getElementById("name_warning");
const name_length_warning = document.getElementById("name_length_warning");
const birthday_warning = document.getElementById("birthday_warning");
const gender_warning = document.getElementById("gender_warning");
const email_warning = document.getElementById("email_warning");
const phoneNumber_warning = document.getElementById("phoneNumber_warning");

const ID_pattern = /^\w*$/;
const password_pattern = /^(?=.*?[\w])(?=.*?[\d])(?=.*?[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]).{0,20}$/;
const name_pattern = /^[a-zA-Z가-힣]*$/;
const number_pattern = /^\d*$/;
const email_pattern = /^[\w]([-_\.]?[\w])*@[\w]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

function check_ID() {
  ID_length_warning.style.display = "";
  ID_wrong_warning.style.display = "";

  if (
    ID_input.value.length < 4 ||
    ID_input.value.length > 12 ||
    ID_input.value === ""
  ) {
    ID_length_warning.style.display = "block";
    return false;
  } else {
    ID_length_warning.style.display = "";
  }

  if (ID_pattern.test(ID_input.value) === false) {
    ID_wrong_warning.style.display = "block";
    return false;
  } else {
    ID_wrong_warning.style.display = "";
    return true;
  }
}

function check_password() {
  password_lenght_warning.style.display = "";
  password_wrong_warning_container.style.display = "";

  if (
    password_input.value.length < 8 ||
    password_input.value.length > 20 ||
    password_input.value === ""
  ) {
    password_lenght_warning.style.display = "block";
    return false;
  } else {
    password_lenght_warning.style.display = "";
  }

  if (password_pattern.test(password_input.value) === false) {
    password_wrong_warning_container.style.display = "block";
    return false;
  } else {
    password_wrong_warning_container.style.display = "";
    return true;
  }
}

function check_password_correct() {
  password_check_warning.style.display = "";

  if (password_check_input.value !== password_input.value) {
    password_check_warning.style.display = "block";
    return false;
  } else {
    password_check_warning.style.display = "";
    return true;
  }
}

function check_name() {
  name_length_warning.style.display = "";
  name_warning.style.display = "";

  if (name_input.value.ength < 2) {
    name_length_warning.style.display = "block";
    return false;
  } else {
    name_length_warning.style.display = "";
  }

  if (name_pattern.test(name_input.value) === false) {
    name_warning.style.display = "block";
    return false;
  } else {
    name_warning.style.display = "";
    return true;
  }
}

function check_birthday_year() {
  birthday_warning.style.display = "";

  if (
    birthday_year_input.value.length < 4 ||
    birthday_year_input.value > 2021 ||
    !number_pattern.test(birthday_year_input.value)
  ) {
    birthday_warning.style.display = "block";
    return false;
  } else {
    birthday_warning.style.display = "";
    check_valid_birthday();
  }
}

function check_birthday_month() {
  birthday_warning.style.display = "";

  if (
    birthday_month_input.value > 12 ||
    birthday_month_input.value < 1 ||
    !number_pattern.test(birthday_month_input.value) ||
    birthday_month_input.value.length < 1
  ) {
    birthday_warning.style.display = "block";
    return false;
  } else {
    birthday_warning.style.display = "";
  }

  if (birthday_month_input.value.length === 1) {
    birthday_month_input.value = `0${birthday_month_input.value}`;
    check_valid_birthday();
  } else {
    check_valid_birthday();
  }
}

function check_birthday_day() {
  birthday_warning.style.display = "";

  if (
    birthday_day_input.value < 1 ||
    birthday_day_input.value > 31 ||
    !number_pattern.test(birthday_day_input.value) ||
    birthday_day_input.value.length < 1
  ) {
    birthday_warning.style.display = "block";
    return false;
  } else {
    birthday_warning.style.display = "";
  }

  if (birthday_day_input.value.length === 1) {
    birthday_day_input.value = `0${birthday_day_input.value}`;
    check_valid_birthday();
  } else {
    check_valid_birthday();
  }
}

function check_valid_birthday() {
  if (
    !birthday_year_input.value ||
    !birthday_month_input.value ||
    !birthday_day_input.value
  ) {
    birthday_warning.style.display = "block";
    return false;
  }

  if (
    (birthday_month_input.value == 4 ||
      birthday_month_input.value == 6 ||
      birthday_month_input.value == 9 ||
      birthday_month_input.value == 11) &&
    birthday_day_input.value > 30
  ) {
    birthday_warning.style.display = "block";
    return false;
  }

  if (birthday_month_input.value == 2 && birthday_day_input.value > 29) {
    birthday_warning.style.display = "block";
    return false;
  }

  if (birthday_month_input.value == 2 && birthday_day_input.value == 29) {
    if (
      birthday_year_input.value % 4 === 0 &&
      birthday_year_input.value % 100 !== 0
    ) {
      return true;
    } else {
      birthday_warning.style.display = "block";
      return false;
    }
  }

  return true;
}

function check_gender() {
  if (gender_input.value === "") {
    gender_warning.style.display = "block";
    return false;
  } else {
    gender_warning.style.display = "";
    return true;
  }
}

function check_email() {
  if (email_pattern.test(email_input.value) === false) {
    email_warning.style.display = "block";
    return false;
  } else {
    email_warning.style.display = "";
    return true;
  }
}

function check_phoneNumber() {
  const phoneNumber = event.target.value;

  if (phoneNumber === "" || number_pattern.test(phoneNumber) === false) {
    phoneNumber_warning.style.display = "block";
    return false;
  } else {
    phoneNumber_warning.style.display = "";
  }

  if (
    phoneNumber_first_input.value &&
    phoneNumber_second_input.value &&
    phoneNumber_third_input.value
  ) {
    return true;
  } else {
    return false; //제출시 공란 확인용
  }
}

function show_messageBox() {
  password_guid_messageBox.style.display = "block";
}

function hidden_messageBox() {
  password_guid_messageBox.style.display = "";
}

ID_input.addEventListener("change", check_ID);
password_input.addEventListener("change", check_password);
password_check_input.addEventListener("change", check_password_correct);
name_input.addEventListener("change", check_name);
birthday_year_input.addEventListener("change", check_birthday_year);
birthday_month_input.addEventListener("change", check_birthday_month);
birthday_day_input.addEventListener("change", check_birthday_day);
gender_input.addEventListener("change", check_gender);
email_input.addEventListener("change", check_email);
phoneNumber_first_input.addEventListener("change", check_phoneNumber);
phoneNumber_second_input.addEventListener("change", check_phoneNumber);
phoneNumber_third_input.addEventListener("change", check_phoneNumber);
password_guid_button.addEventListener("mouseover", show_messageBox);
password_guid_button.addEventListener("mouseleave", hidden_messageBox);
