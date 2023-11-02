function orderSummary() { 
    // Customer name textbox input
    const fullNameInput = document.getElementById("full-name").value;
    // Drink radio
    const drinkInputs = document.getElementsByName("drinks");
    let drinkName; 
    // Additives checkboxes inputs
    const additiveInputs = document.getElementsByName("additives");
    let checkedAddIns = [];
    // Milk radio inpiuts
    const milkInputs = document.getElementsByName("milk");
    let milkName = ""; 
    // Email textbox inputs
    const emailInput = document.getElementById("email-address").value;

    // loop for drink values
    for(let i = 0; i < drinkInputs.length; i++) {
        if(drinkInputs[i].checked === true) {
            drinkName = drinkInputs[i].value; 
        } 
    } 
    // loop for additive values
    for(let i = 0; i < additiveInputs.length; i++) {
        if(additiveInputs[i].checked) {
            checkedAddIns.push(additiveInputs[i].value);
        }
    } checkedAddIns = checkedAddIns.join(", ") ; 
    // loop for milk values
    for(let i = 0; i < milkInputs.length; i++) {
        if(milkInputs[i].checked == true) {    
            milkName = `and ${milkInputs[i].value}`;
        }
    }
    
    alert(`Hello, ${fullNameInput}! Your ${drinkName} with ${checkedAddIns} ${milkName} will be ready shortly. An email will be sent to ${emailInput} when it's ready!`);         
}

