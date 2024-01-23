        var ot = document.getElementById("Output");
        var eq = document.getElementById("eaq");
        var text = "";

        function updateOutput() {
            ot.innerText = text;
        }

        function isOperator(char) {
            return ['+', '-', '*', '/'].includes(char);
        }

        document.getElementById("btn1").addEventListener("click", function() {
            text += "1";
            updateOutput();
        });

        document.getElementById("btn2").addEventListener("click", function() {
            text += "2";
            updateOutput();
        });

        document.getElementById("btn3").addEventListener("click", function() {
            text += "3";
            updateOutput();
        });

        document.getElementById("btna").addEventListener("click", function() {
            if (!isOperator(text.slice(-1))) {
                text += "+";
                updateOutput();
            }
        });

        document.getElementById("btn4").addEventListener("click", function() {
            text += "4";
            updateOutput();
        });

        document.getElementById("btn5").addEventListener("click", function() {
            text += "5";
            updateOutput();
        });

        document.getElementById("btn6").addEventListener("click", function() {
            text += "6";
            updateOutput();
        });

        document.getElementById("btns").addEventListener("click", function() {
            if (!isOperator(text.slice(-1))) {
                text += "-";
                updateOutput();
            }
        });

        document.getElementById("btn7").addEventListener("click", function() {
            text += "7";
            updateOutput();
        });

        document.getElementById("btn8").addEventListener("click", function() {
            text += "8";
            updateOutput();
        });

        document.getElementById("btn9").addEventListener("click", function() {
            text += "9";
            updateOutput();
        });

        document.getElementById("btnm").addEventListener("click", function() {
            if (!isOperator(text.slice(-1))) {
                text += "*";
                updateOutput();
            }
        });

        document.getElementById("btnd").addEventListener("click", function() {
            if (!isOperator(text.slice(-1))) {
                text += "/";
                updateOutput();
            }
        });

        document.getElementById("btnb").addEventListener("click", function() {
            text = text.slice(0, -1);
            updateOutput();
        });
        document.getElementById("btnca").addEventListener("click", function() {
            text = "";
            eq.innerText = "";
            updateOutput();
        });

        document.getElementById("btne").addEventListener("click", function() {
            try {
                eq.innerText = "= " + eval(text).toString();
            } catch (error) {
                eq.innerText = "Error";
            }
        });
