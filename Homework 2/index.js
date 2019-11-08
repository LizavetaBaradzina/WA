    window.onload = function()
    {
        var first_name = this.prompt("Enter any name: ");
        var second_name;
        
        if (this.hasNumber(first_name) == true)
        {
            second_name = this.reverseString(first_name); 
            this.document.getElementById("chgNameH").innerHTML = "Name with numbers. Reverse.";
        }
        else
        {
            second_name = this.change_Cases(first_name);
            this.document.getElementById("chgNameH").innerHTML = "Name without numbers. Change cases.";
        }

        document.getElementById("name").innerHTML = first_name;
        document.getElementById("chgName").innerHTML = second_name;

    }

    function hasNumber(myString) {
        return /\d/.test(myString);
    };

    function reverseString(str) {
        return str.split("").reverse().join("");
    }

    function change_Cases(str) {
        str = str.split("");
        console.log(str);
        for (i=0; i < str.length; i++)
        {
            if (i % 2 == 0)
            {
                str[i]=str[i].toUpperCase();
            }
            else
            {
                str[i]=str[i].toLowerCase();
            }console.log(str);
        }
        str = str.join("");
        return str;
    }
