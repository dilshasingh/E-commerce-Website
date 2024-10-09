const fname=document.querySelector('#fname');
const lname=document.querySelector('#lname');
const address1=document.querySelector('#address1');
const address2=document.querySelector('#address2');
const landmark=document.querySelector('#landmark');
const phone=document.querySelector('#phone');
const addinfo=document.querySelector('#addinfo');


let cardNumInput = 
    document.querySelector('#cardNum')

cardNumInput.addEventListener('keyup', () => {
    let cNumber = cardNumInput.value
    cNumber = cNumber.replace(/\s/g, "")

    if (Number(cNumber)) {
        cNumber = cNumber.match(/.{1,4}/g)
        cNumber = cNumber.join(" ")
        cardNumInput.value = cNumber
    }
})

////////////////////////////////////////////////////////////////
function storeCheckoutData() {
    // Retrieve the dynamically calculated total cost from localStorage
    const totalCost = localStorage.getItem('totalPrice');
    

    // Get the address details
    const address = {
        fname: document.getElementById('fname').value,
        lname: document.getElementById('lname').value,
        address1: document.getElementById('address1').value,
        address2: document.getElementById('address2').value,
        landmark: document.getElementById('landmark').value,
        phone: document.getElementById('phone').value,
        addinfo: document.getElementById('addinfo').value
    };

    // Store the data in localStorage
    localStorage.setItem('totalCost', totalCost);
    localStorage.setItem('address', JSON.stringify(address));
}


function displayTotalCost() {
    // Retrieve the total cost from localStorage
    const totalCost = localStorage.getItem('totalPrice');

    // Get the paragraph element by its id
    const totalCostDisplay = document.getElementById('totalCostDisplay');

    // Set the total cost to the paragraph's content
    totalCostDisplay.textContent = totalCost ? `Total Cost: $${totalCost}` : "Total Cost: $0.00";
}
displayTotalCost();


function displayAddress() {
    // Retrieve and parse the address from localStorage
    const addressData = JSON.parse(localStorage.getItem('address'));
    
    // Check if address data exists
    if (addressData) {
        // Format the address in a more readable way
        const formattedAddress = `
    Name: ${addressData.fname} ${addressData.lname} \n
    ${addressData.address1}\n
    ${addressData.address2 ? addressData.address2 : ''}\n
    ${addressData.landmark ? 'Landmark: ' + addressData.landmark : ''}
    Phone: ${addressData.phone}
    ${addressData.addinfo ? 'Additional Info: ' + addressData.addinfo : ''}
`.trim().replace(/^\s*\n/gm, ''); 

        const addressDisplay = document.getElementById('addressDisplay');
        
        // Set the formatted address to the paragraph's content
        addressDisplay.textContent = formattedAddress;
    } else {
        // If no address data exists, display a default message
        addressDisplay.textContent = "Address: Not Available";
    }
}

// Call the function to update the display
displayAddress();
