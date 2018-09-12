        var config = {
          apiKey: "AIzaSyCWjxWPm3T61gSGffILVXt3UDnWcC8Koqc",
          authDomain: "jonathan-awsome-project.firebaseapp.com",
          databaseURL: "https://jonathan-awsome-project.firebaseio.com",
          projectId: "jonathan-awsome-project",
          storageBucket: "jonathan-awsome-project.appspot.com",
          messagingSenderId: "439582308516"
        };
        firebase.initializeApp(config);

        var database = firebase.database();
        

        var trainName= "";
        var destination= "";
        var firstTrainTime= "";
        var frequency= 0;

       
        $("#add-user").on("click",function() {
            event.preventDefault();

            trainName = $("#trainName-input").val().trim();
            destination = $("#destination-input").val().trim();
            firstTrainTime = $("#firstTrainTime-input").val().trim();
            frequency = $("#frequency-input").val().trim();

            // var firstTimeConverted = moment(firstTrainTime, "HH:mm").subtract(1, "years");
            // console.log(firstTimeConverted);
        
            // // Current Time
            // var currentTime = moment();
            // console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
        
            // // Difference between the times
            // var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
            // console.log("DIFFERENCE IN TIME: " + diffTime);
        
            // // Time apart (remainder)
            // var tRemainder = diffTime % Frequency;
            // console.log(tRemainder);
        
            // // Minute Until Train
            // var tMinutesTillTrain = tFrequency - tRemainder;
            // console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
        
            // // Next Train
            // var nextTrain = moment().add(tMinutesTillTrain, "minutes");
            // console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

            database.ref().push({
                trainName: trainName,
                destination: destination,
                firstTrainTime: firstTrainTime,
                frequency: frequency  
            });
           console.log(trainName);
           console.log(destination);
           console.log(firstTrainTime);
           console.log(frequency);
    
        })

       database.ref().on("child_added", function (childSnapshot) {
       
        var firstTimeConverted = moment(firstTrainTime, "HH:mm").subtract(1, "years");
        console.log(firstTimeConverted);
    
        // Current Time
        var currentTime = moment();
        console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
    
        // Difference between the times
        var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
        console.log("DIFFERENCE IN TIME: " + diffTime);
    
        // Time apart (remainder)
        var tRemainder = diffTime % frequency;
        console.log(tRemainder);
    
        // Minute Until Train
        var tMinutesTillTrain = frequency - tRemainder;
        console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
    
        // Next Train
        var nextTrain = moment().add(tMinutesTillTrain, "minutes");
        console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
     


           var newRow = $('<tr>');
           var tableDataName = $("<td>").text(childSnapshot.val().trainName);
           var tableDataRole = $("<td>").text(childSnapshot.val().destination);
           var tableDataMonths = $("<td>").text(childSnapshot.val().frequency);
           var tableDataRate = $("<td>").text(nextTrain)
           var tableDateTotal = $("<td>").text(tMinutesTillTrain);

           newRow.append(tableDataName, tableDataRole,tableDataMonths, tableDataRate, tableDateTotal);

           $("#table-data").append(newRow);

         


            



        })
