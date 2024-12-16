window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  function CreateInput(dataAttr, storylineVariable, options = {}) {
    var player = GetPlayer();
    var setVar = player.SetVar;
    const selectElement = document.querySelector(`div[data-acc-text='${dataAttr}']`);

    if (!selectElement) {
        console.error(`Element with data-acc-text='${dataAttr}' not found.`);
        return;
    }

    const input = document.createElement('input');
    const inputId = `input-${storylineVariable}`;
    input.id = inputId;

    input.style.width = '100%';
    input.style.height = '100%';
    input.style.boxSizing = 'border-box';
    input.style.backgroundColor = options.backgroundColor || 'white';
    input.style.color = options.textColor || 'black';
    input.style.border = options.border || 'none';
    input.style.fontSize = options.fontSize || '13px';

    input.type = options.type || 'text';

    if (options.placeholder) {
        input.placeholder = options.placeholder;
    }

    if (options.defaultValue !== undefined) {
        input.value = options.defaultValue;
        setVar(storylineVariable, options.defaultValue);
    }

    selectElement.appendChild(input);
    input.addEventListener('input', function() {
        const value = input.value;
        setVar(storylineVariable, value);
        
    });

    input.addEventListener('blur', function() {
        const value = input.value;
        setVar(storylineVariable, value);
        
    });
}


CreateInput('name', 'Name', {
	placeholder: 'Name',
    backgroundColor: 'white',
    textColor: 'black',
    border: 'none',
    fontSize: '18px',
    defaultValue: ''
});
}

window.Script2 = function()
{
  function CreateInput(dataAttr, storylineVariable, options = {}) {
    var player = GetPlayer();
    var setVar = player.SetVar;
    const selectElement = document.querySelector(`div[data-acc-text='${dataAttr}']`);

    if (!selectElement) {
        console.error(`Element with data-acc-text='${dataAttr}' not found.`);
        return;
    }

    const input = document.createElement('input');
    const inputId = `input-${storylineVariable}`;
    input.id = inputId;

    input.style.width = '100%';
    input.style.height = '100%';
    input.style.boxSizing = 'border-box';
    input.style.backgroundColor = options.backgroundColor || 'white';
    input.style.color = options.textColor || 'black';
    input.style.border = options.border || 'none';
    input.style.fontSize = options.fontSize || '13px';

    input.type = options.type || 'text';

    if (options.placeholder) {
        input.placeholder = options.placeholder;
    }

    if (options.defaultValue !== undefined) {
        input.value = options.defaultValue;
        setVar(storylineVariable, options.defaultValue);
    }

    selectElement.appendChild(input);
    input.addEventListener('input', function() {
        const value = input.value;
        setVar(storylineVariable, value);
        
    });

    input.addEventListener('blur', function() {
        const value = input.value;
        setVar(storylineVariable, value);
        
    });
}


CreateInput('email', 'Email', {
	placeholder: 'Email',
    backgroundColor: 'white',
    textColor: 'black',
    border: 'none',
    fontSize: '18px',
    defaultValue: ''
});
}

window.Script3 = function()
{
  function CreateInput(dataAttr, storylineVariable, options = {}) {
    var player = GetPlayer();
    var setVar = player.SetVar;
    const selectElement = document.querySelector(`div[data-acc-text='${dataAttr}']`);

    if (!selectElement) {
        console.error(`Element with data-acc-text='${dataAttr}' not found.`);
        return;
    }

    const input = document.createElement('input');
    const inputId = `input-${storylineVariable}`;
    input.id = inputId;

    input.style.width = '100%';
    input.style.height = '100%';
    input.style.boxSizing = 'border-box';
    input.style.backgroundColor = options.backgroundColor || 'white';
    input.style.color = options.textColor || 'black';
    input.style.border = options.border || 'none';
    input.style.fontSize = options.fontSize || '13px';

    input.type = options.type || 'text';

    if (options.placeholder) {
        input.placeholder = options.placeholder;
    }

    if (options.defaultValue !== undefined) {
        input.value = options.defaultValue;
        setVar(storylineVariable, options.defaultValue);
    }

    selectElement.appendChild(input);
    input.addEventListener('input', function() {
        const value = input.value;
        setVar(storylineVariable, value);
        
    });

    input.addEventListener('blur', function() {
        const value = input.value;
        setVar(storylineVariable, value);
        
    });
}


CreateInput('email', 'Email', {
	placeholder: 'Email',
    backgroundColor: 'white',
    textColor: 'black',
    border: 'none',
    fontSize: '18px',
    defaultValue: ''
});
}

window.Script3 = function()
{

var player = GetPlayer();


var name = player.GetVar("Name");
var email = player.GetVar("Email");
var question1 = player.GetVar("Question_1");
var question1Answer = player.GetVar("Question_1_Answer");
var answer1 = player.GetVar("Answer_1"); 
var question2 = player.GetVar("Question_2");
var question2Answer = player.GetVar("Question_2_Answer");
var answer2 = player.GetVar("Answer_2"); 
var timeSpendMs = player.GetVar("TimeSpend");
var score = player.GetVar("Score");
var status = score >= 80 ? "Pass" : "Fail";
var URRL = player.GetVar("URL");

var minutes = Math.floor(timeSpendMs / 60000);
var seconds = Math.floor((timeSpendMs % 60000) / 1000);
var timeFormatted = `${minutes.toString().padStart(2, "0")} Minute ${seconds.toString().padStart(2, "0")} Second`;


var data = {
    "Name": name,
    "Email": email,
    "Score": score,
    "Status": status,
    "Question_1": question1,
    "Question_1_Answer": question1Answer,
    "Answer_1": answer1, 
    "Question_2": question2,
    "Question_2_Answer": question2Answer,
    "Answer_2": answer2, 
    "TimeSpend": timeFormatted
};


var url = URRL;


fetch(url, {
    method: "POST",
    mode: "no-cors", 
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
})
.then(() => console.log("Data submitted successfully"))
.catch(error => console.error("Error submitting data:", error));
}

};
