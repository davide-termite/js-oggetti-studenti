$(document).ready(
  function() {

    // CONSEGNA //
    // Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
    // Stampare a schermo attraverso il for in tutte le proprietà.
    // END CONSEGNA //

    // Oggetto Studente
    var student = {
      "nome": 'Davide',
      "cognome": 'Termite',
      "age": 25,
    }

    // Ciclo for in per stampare proprietà
    for (var key in student) {
      console.log(student[key])
    }


    // CONSEGNA //
    // Creare un array di oggetti di studenti.
    // Ciclare su tutti gli studenti e stampare per ognuno nome e cognome.
    // END CONSEGNA //

    // Oggetto studente
    var student2 = {
      "nome": 'Andrea',
      "cognome": 'Maschietto',
      "age": 32,
    }
    // Oggetto studente
    var student3 = {
      "nome": 'Vito',
      "cognome": 'Antonio',
      "age": 28,
    }

    // Creo array studenti e stampo in console nome e cognome
    var studentList = [student, student2, student3]

    for (var i = 0; i < studentList.length; i++) {
      console.log(studentList[i].nome, studentList[i].cognome);
    }

    // CONSEGNA //
    // Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo
    // oggetto studente inserendo nell’ordine: nome, cognome e età.
    // END CONSEGNA //

    $('#add-student').click(function(){

      // Prompt per popolare oggetto userStudente
      var userName = prompt("Qual è il tuo nome?");
      var userSurname = prompt("Qual è il tuo cognome?");
      var userAge = parseInt(prompt("Quanti anni hai?"));

      // Oggetto userStudente
      var userStudent = {
        "nome": userName,
        "cognome": userSurname,
        "age": userAge,
      }

      studentList.push(userStudent);

      console.log(studentList);
    });

    // Stampo a schermo nomi studenti
    for (var x = 0; x < studentList.length; x++) {
      var source = $("#template").html();
      var template = Handlebars.compile(source);

      var context = {
        title: (studentList[x].nome),
        body: ("Nome Completo: " + studentList[x].nome + " " + studentList[x].cognome + "Anni: " + studentList[x].age)
      };

      var html = template(context);
      $(".container").append(html);
    };
});
