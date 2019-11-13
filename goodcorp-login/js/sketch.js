
  $( document ).ready(function() {
      console.log( "ready!" );
      var name = $('#name')

      $( "div" ).each(function() {
        $( this ).hide();
      });

      $( "#container" ).show();
      $( "#first" ).show();
      $( "#welcome" ).hide();


      $("#ButtonOne").click(function() {
        $( "div" ).each(function() {
          $( this ).hide();
          var name = $('#name').val();
          $('#bizname').text(name);

        });

        $( "#container" ).show();
        $( "#second" ).show();
        $( "#welcome" ).show();

      });
      $("#ButtonTwo").click(function() {
        $( "div" ).each(function() {
          $( this ).hide();
        });

        $( "#container" ).show();
        $( "#third" ).show();
      });
      $("#ButtonThree").click(function() {
        $( "div" ).each(function() {
          $( this ).hide();
        });

        $( "#container" ).show();
        $( "#fourth" ).show();
      });
      $("#ButtonFour").click(function() {
        $( "div" ).each(function() {
          $( this ).hide();
        });

        $( "#container" ).show();
        $( "#fifth" ).show();
      });
      $("#ButtonFourStop").click(function() {
        $( "div" ).each(function() {
          $( this ).hide();
        });

        $( "#container" ).show();
        $( "#fourthStop" ).show();
      });
      $("#ButtonFourStop1").click(function() {
        $( "div" ).each(function() {
          $( this ).hide();
        });

        $( "#container" ).show();
        $( "#fifth" ).show();
      });
      $("#ButtonFourStop2").click(function() {
        $( "div" ).each(function() {
          $( this ).hide();
        });

        $( "#container" ).show();
        $( "#fourthStopComplaint1" ).show();
      });

      $("#ButtonFive").click(function() {
        $( "div" ).each(function() {
          $( this ).hide();
        });
        $( "#container" ).show();
        $( "#sixth" ).show();
        $("#title").text("Senior Manager");
      });
      $("#ButtonFiveStop").click(function() {
        $( "div" ).each(function() {
          $( this ).hide();
        });

        $( "#container" ).show();
        $( "#fifthStop" ).show();
      });
      $("#ButtonFiveStop1").click(function() {
        $( "div" ).each(function() {
          $( this ).hide();
        });

        $( "#container" ).show();
        $( "#sixth" ).show();
      });
      $("#ButtonFiveStop2").click(function() {
        $( "div" ).each(function() {
          $( this ).hide();
        });

        $( "#container" ).show();
        $( "#fifthStopComplaint1" ).show();
      });
      $("#ButtonSix").click(function() {
        $( "div" ).each(function() {
          $( this ).hide();
        });

        $( "#container" ).show();
        $( "#seventh" ).show();
        $("#title").text("Senior Manager");

      });
      $("#ButtonSixStop").click(function() {
        $( "div" ).each(function() {
          $( this ).hide();
        });

        $( "#container" ).show();
        $( "#sixthStop" ).show();
        $("#title").text("Senior Manager");

      });
      $("#ButtonSixStop1").click(function() {
        $( "div" ).each(function() {
          $( this ).hide();
        });

        $( "#container" ).show();
        $( "#seventh" ).show();
        $("#title").text("Senior Manager");

      });
      $("#ButtonSixStop2").click(function() {
        $( "div" ).each(function() {
          $( this ).hide();
        });

        $( "#container" ).show();
        $( "#sixthStopComplaint1" ).show();
        $("#title").text("Senior Manager");

      });


  });





// function setup() {
//   // put setup code here
//   var firebaseConfig = {
//     apiKey: "AIzaSyDqKNSU5Y6qT-2dyAvgYt1ojY4w-38WCs0",
//     authDomain: "cclab-inclass-oct28.firebaseapp.com",
//     databaseURL: "https://cclab-inclass-oct28.firebaseio.com",
//     projectId: "cclab-inclass-oct28",
//     storageBucket: "cclab-inclass-oct28.appspot.com",
//     messagingSenderId: "610607810326",
//     appId: "1:610607810326:web:f32fd70c83446ae614b237",
//     measurementId: "G-TFS5SDGH6B"
//   };
//
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
//   console.log(firebase);
//
//   let database = firebase.database();
//
//   // Enter the name of your database in the ref('');
//   let responses = database.ref('Goodcorp-Names');
//
//   // Listen for changes and update (gotData) when something happens
//   responses.on('value', gotData, errData);
// }
//
// // Successful update will trigger this function
// function gotData(data) {
//   let responseList = selectAll('.responseList');
//   for (var i = 0; i < responseList.length; i++) {
//     responseList[i].remove();
//   }
//
//   console.log(data.val());
//   let responses = data.val();
//   let keys = Object.keys(responses);
//   console.log(keys);
//   for (let i = 0; i < keys.length; i++) {
//     var k = keys[i];
//     var names = responses[k].name;
//     var response = responses[k].value;
//     var li = createElement('li', names);
//     li.class('responseList');
//     li.parent('classResponses');
//   }
// }
//
// // Error handling function
// function errData(error) {
//   console.log('Error!');
//   console.log(error);
// }
//
// // Submission function
// function submitAnswer() {
//   let database = firebase.database();
//   let responses = database.ref('Goodcorp-Names');
//
//   // Get the values from the user and store them in the response object
//   // Enter code below:
//
//   let valueName = document.getElementById('name').value;
//   // let valueAnswer = document.getElementById('response').value;
//
//   let response = {
//     name: valueName
//     // value: valueAnswer
//   }
//
//   // Push the response to the database
//   responses.push(response, finished);
//   function finished(error) {
//     if (error) {
//       console.log('ooops');
//     } else {
//       console.log('data saved!');
//     }
//   }
// }
//
// function draw() {
//   // put drawing code here
// }
