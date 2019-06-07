function addItem(x){
        //console.log("hi")
        //console.log(x)
        y = document.getElementById("chosen").innerHTML;
        //console.log(y)
        if (x == 'empty') {
          document.getElementById("chosen").innerHTML = "";
        }
        else if (y != "") {
          document.getElementById("chosen").innerHTML = y + ", " + x
        }
        else {
          document.getElementById("chosen").innerHTML = x;
        }
        var list = document.getElementById("submit");
        list.value = document.getElementById("chosen").innerHTML;
    }
