   
        let myArray = ['Apple', 'Banana', 'Cherry'];


        function addElement() {
            myArray.push('Orange');
            displayArray();
        }


        function removeElement() {
            myArray.pop();
            displayArray();
        }


        function displayArray() {
            document.getElementById('arrayOutput').innerText = `Array: ${myArray.join(', ')}`;
        }