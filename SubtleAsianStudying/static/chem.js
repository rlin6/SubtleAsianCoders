var elements = []
function addItem(x){
        y = document.getElementById("chosen").innerHTML;

        //clears elements and the chosen text box
        if (x == 'empty') {
          elements = []
          document.getElementById("chosen").innerHTML = "";
        }

        //if the box is not empty
        else if (y != "") {
          if (elements.includes(x)) {
            alert('You already added this!');
          }
          else {
            elements.push(x);
            document.getElementById("chosen").innerHTML = y + ", " + x
          }
        }

        //if the text box is empty
        else {
          elements.push(x);
          document.getElementById("chosen").innerHTML = x;
        }

        //console.log(elements)

        //updates submit value for the /receive route to get the list
        var list = document.getElementById("submit");
        list.value = document.getElementById("chosen").innerHTML;
}
