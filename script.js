var array1 = ["C", "Php", "SQL"];
array1.forEach(function (element) {
    console.log(element);
});

function printLanguageName(languageName) {
    alert(languageName);
}


window.addEventListener('load', function () {
    var employees = [{"name": "Alex", "department": "Marketing"},
        {"name": "Bob", "department": "Engineering"}];

    for (i = 0; i <= employees.length; i++) {
        document.getElementById("employee1").innerHTML = "<ul><li>name:" + employees[0].name + '</li><li>department:' + employees[0].department + '</li></ul>';
        document.getElementById("employee2").innerHTML = "<ul><li>name:" + employees[1].name + '</li><li>department:' + employees[1].department + '</li></ul>';
    }


    var points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b){return b-a});
    document.getElementById("largest-number").innerHTML = points;
}, true);
