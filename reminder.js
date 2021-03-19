 function appendDiv() {
            if (document.getElementById(inputText).value == ) {
                alert(Please type a task for your to do list!)
            } else {
                 Create div
                var count = document.querySelectorAll('#demo [id$=task]');
                var text = document.getElementById(inputText).value;
                var listed_div = document.createElement(div);
                listed_div.setAttribute(class, listed);
                listed_div.setAttribute(id, (count.length + 1 + _task));  Unique div identifier
                document.getElementById(demo).appendChild(listed_div);

                 Create checkbox
                var newCheckbox = document.createElement(input);
                newCheckbox.type = checkbox;
                newCheckbox.value = document.getElementById(inputText).value;
                newCheckbox.id =  (count.length + 1) + _task;  To check the checked boxes
                listed_div.appendChild(newCheckbox);

                 Create label
                var label = document.createElement('label');
                label.htmlFor = document.getElementById(inputText).value;
                label.setAttribute(class, strikethrough);
                label.appendChild(document.createTextNode(document.getElementById(inputText).value));
                label.innerHTML = document.getElementById(inputText).value;
                listed_div.appendChild(label);
                document.getElementById(inputText).value = ;

            }
        }
        document.getElementById(inputText)
            .addEventListener(keyup, function (event) {
                event.preventDefault();
                if (event.keyCode === 13) {
                    document.getElementById(myBtn).click();
                }
            });


        function clearCompleted() {
            var checkedIds = getCheckedIds();
            for (var i = 0; icheckedIds.length; i++) {
                var obj = document.getElementById(checkedIds[i]);
                obj.remove();
            }
        }

         get the unique checked boxes
        function getCheckedIds() {
            var checkedCbs = document.querySelectorAll('#demo input[type=checkbox]checked');
            var ids = [];
            for (var i = 0; i  checkedCbs.length; i++) ids.push(checkedCbs[i].id);
            return ids;
        }