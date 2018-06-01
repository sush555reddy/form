var tuser = "";

function removeOrAddAlert(fieldIDValue, idToBeCreated) {
    if (document.getElementById(fieldIDValue).value == "") {
        if (document.contains(document.getElementById(idToBeCreated))) {
            document.getElementById(idToBeCreated).remove();
        }
        document.getElementById(fieldIDValue).insertAdjacentHTML('afterend', "<p id=" + idToBeCreated + ">please enter the " + fieldIDValue + "</p>");
    }
    else if (document.contains(document.getElementById(idToBeCreated))) {
        document.getElementById(idToBeCreated).remove();
    }
}
var users = [];
if (localStorage.a_users) {
    users = JSON.parse(localStorage.a_users);
    for(var i=0; i<users.length; i++){
        tuser = tuser +"<tr><td>" + users[i].username + "</td>" + "<td>" + users[i].firstname + "</td>" + "<td>" + users[i].emailid + "</td>" + "<td>" + users[i].password +"</td>" + "<td>" + users[i].location +"</td>" + "<td>" + users[i].company + "</td>"+"<td>"+ users[i].gender + "</td></tr>";
    }
    displayUsers();
}
function displayUsers() {    
    document.getElementById("table").insertAdjacentHTML("beforeend",`<table id="table_users"><thead><tr><th>username</th><th>firstname</th><th>emaild</th><th>password</th><th>location</th><th>company</th><th>gender</th><tr></thead><tbody>${tuser}</tbody></table>`);

}
document.getElementById('btn').addEventListener('click', function () {

    removeOrAddAlert("username", "un_Warn");
    removeOrAddAlert("firstname", "un_Warn2");
    removeOrAddAlert("emailid", "un_Warn3");
    removeOrAddAlert("password", "un_Warn4");
    removeOrAddAlert("location", "un_Warn5");
    removeOrAddAlert("company", "un_Warn6");

    if (document.getElementById('p_elem_7').checked == false && document.getElementById('p_elem_8').checked == false) {
        if (document.contains(document.getElementById('un_Warn7'))) {
            document.getElementById('un_Warn7').remove();
        }
        document.getElementById('p_elem_8').insertAdjacentHTML('afterend', '<p id="un_Warn7">please enter the gender</p>');
    }
    else if (document.contains(document.getElementById('un_Warn7'))) {
        document.getElementById('un_Warn7').remove();
    }
    if (document.querySelectorAll('[id^="un_Warn"]').length == 0) {
        console.log("hello");
        var user = {
            'username': document.getElementById('username').value,
            'firstname': document.getElementById('firstname').value,
            'emailid': document.getElementById('emailid').value,
            'password': document.getElementById('password').value,
            'location': document.getElementById('location').value,
            'company': document.getElementById('company').value,
          //  'gender':document.getElementById('p_elem_7').value
        };
        //console.log(user);
        users.push(user);
        localStorage.a_users = JSON.stringify(users);
    }

    tuser = tuser +"<tr><td>" + users[users.length-1].username + "</td>" + "<td>" + users[users.length-1].firstname + "</td>" + "<td>" + users[users.length-1].emailid + "</td>" + "<td>" + users[users.length-1].password +"</td>" + "<td>" + users[i].location +"</td>" + "<td>" + users[i].company +"</td>" + "<td>" + users[i].gender + "</td></tr>";
    
    if(document.contains(document.getElementById("table_users"))){
    document.getElementById("table_users").remove();
    displayUsers();
    }else{
        displayUsers();
    }
    clear("myinput");
});
function clear(myinput) {

    var ele = document.getElementsByClassName(myinput);
    for (i = 0; i < ele.length; i++) {
        ele[i].value = "";
    }
}

