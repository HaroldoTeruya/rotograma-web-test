//#################FUNCTIONS PROFILE################
var getParameterByName = (function (name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
});


var populate_profile = (function(){
    var kind = getParameterByName('kind');
    var id = getParameterByName('id');
    var user;
    if (kind=="veteran"){
        user = veteran_list[id];
    }
    else{
        user = freshman_list[id];
    }
    document.getElementById('prof_name').innerHTML = user.name;
    document.getElementById('prof_campus').innerHTML = user.campus;
    document.getElementById('prof_university').innerHTML = user.university;
    document.getElementById('prof_course').innerHTML = user.course;
    document.getElementById('prof_email').innerHTML = user.email;
    console.log(kind);
    console.log(id)
});

$(document).ready(function()
{
    populate_profile();
});

