export const clearHTML = function (currentHTML) {
  currentHTML.innerHTML = '';
};

// form validation
// function ValidateActInsert() {
//     var specialChars = /[^a-zA-Z ]/g;
//     if (document.actorInsert.actInsert.value.match(specialChars)) {
//         alert ("Only characters A-Z, a-z are allowed!")
//         document.actorInsert.actInsert.focus();
//         return false;
//     }
//     return (true);
// }

// <form name = "actorInsert" align = "center" action="actorInserting.php" onSubmit="return ValidateActInsert()">
//     Actor name:<br>
//     <input type = "text" name = "actInsert"
//     <br><br>
//     <input type = "submit" value = "Insert">
// </form>