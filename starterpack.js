 $("#addtext").click(function(){
                 
            var texttoAdd  = $("#newtext").val();
            var newText = $("<span></span>").css({"font-size": "20px", "color": "black", "font-family":"Arial"}).html(texttoAdd);
            var canvas = $("#canvas");
            canvas.append(newText);
           
            makeSelectable(newText);
            makeResizable(newText);
            makeDraggable(newText);
            console.log($('#canvas').children().size());
        
            // clear output
            $("#newtext").val("");

      



        });


        $("#clear").click(function(){

                $("#canvas").empty();
                  console.log($('#canvas').children().size());

      
               
        });

        function makeDraggable(element){

                element.draggable({containment: "#canvas"});

        }

        
 function makeSelectable(element){

  $toggle = 0;

   element.click(function(){
        if ($toggle == 0){

          console.log("clicked once");
          element.addClass("ui-selected").css({"background-color":"lightyellow", "border":"0.5px solid black"});
          $toggle  = 1;
        }

        else {

          console.log("clicked again");
          element.removeClass("ui-selected").css({"background-color":"white", "border":"none"});
          $toggle = 0;
        }

   });

}


	   

      function makeResizable(element){

          element.resizable({containment: "#canvas"});
       // adjust font size
               element.resizable({

             resize: function(event, ui){
                   
                   var width = ui.size.width;
                   var height = ui.size.height;

                   $(this).css("font-size", width * height/1000 + "px");

             }
          });

      }


      function  makeImageResizable(element){

             element.resizable({containment: "#canvas"});

      }


      function makeImageSelectable(element){

      	 $toggle = 0;

   element.click(function(){
        if ($toggle == 0){

          console.log("clicked once");
          element.addClass("ui-selected").css({ "border":"1px solid black"});
          $toggle  = 1;
        }

        else {

          console.log("clicked again");
          element.removeClass("ui-selected").css({ "border":"none"});
          $toggle = 0;
        }

   });



      }



    function addImage(event){

  var canvas = $("#canvas");
  var image = $("<img style='width:200px; height: 200px'>").attr('src', URL.createObjectURL(event.target.files[0]));

    


       var div = $('<div style="display: inline-block;"></div>'); // canvas div takes up full width, so draggable side-to-side
       div.prepend(image);
       canvas.append(div);
       makeDraggable(div);
       makeImageResizable(image);
       makeImageSelectable(div);


 

}




$("#clearselected").click(function(){

 
  $('.ui-selected').remove();

});




$("#download").click(function(){


	// trouble with converting to div, but rest works

	console.log("download clicked");
	

    html2canvas($("#canvas"), {
      onrendered: function(canvas) {

      	// this works beautifully for an already-canvas object, but trouble with rendering HTML elements
        Canvas2Image.saveAsPNG(canvas, 400, 400);
       
      
      }
    });




    });




