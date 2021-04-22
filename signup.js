const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


//Show input error message
function ShowError(input, message) 
{
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Show input success
function ShowSuccess(input) 
{
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

//Check email
function CheckEmail(input) 
{
    const char = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (char.test(input.value.trim())) 
    {
        ShowSuccess(input);
    }
    else 
    {
        ShowError(input, "Email is not valid");
    }
}

//Check Phone number
function CheckPhone(input)
{
    const chars = /^([1-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9])/;
    var num = 10;
    if((input.value.length === num) && (chars.test(input.value.trim())))
    {
        ShowSuccess(input);
    }
    else
    {
        ShowError(input, "Phone number is not valid");
    }
}

function CheckUserName(input)
{
    var ad = "admin";
    if(input !== ad)
    {
        ShowError(input, "Username is not valid");
    }
    else
    {
        ShowSuccess(input);
    }
}

function CheckPassword(input)
{
    var num = "12345";
    if(input === num)
    {
        ShowSuccess(input);
    }
    else
    {
        ShowError(input, "Password is not valid");
    }
}
function CheckRequired(inputErr) 
{
    inputErr.forEach(function(input)
    {
        if (input.value.trim() === "") 
        {
            ShowError(input, `${getFieldName(input)} is required`);
        }
        else 
        {
            ShowSuccess(input);
        }
    });
}
  


function CheckPasswordsMatch(input1,input2) 
{
    if (input1.value !== input2.value) 
    {
        ShowError(input2, "Password do not match");
    }
}

function getFieldName(input) 
{
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}








form.addEventListener('submit', function(e)
{
  e.preventDefault();

  CheckRequired([username, email, phone, password, password2 ]);
  CheckUserName(username);
  CheckEmail(email);
  CheckPhone(phone);
  CheckPassword(password);
  CheckPasswordsMatch(password, password2);
});