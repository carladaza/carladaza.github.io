function submitButton(){
    // get file name
    const path = window.location.pathname;
    const filename = path.split("/").pop();
    
    // get item name from filename
    const itemname = "";
    if (filename = "contact.html"){
        itemname = contact-data;
    }
    
    // get stored data
    let data = JSON.parse(localStorage.getItem(itemname)) || [];
    
    // get button and text value
    const textvalue = document.getElementById("contact-message").value()
    const button = document.getElementById("contact-submit-button")
    
    // create new data entry
    const newEntry = {
        date: new Date().toISOString(),
        text: textvalue
    };
    
    // add new data entry, save to local storage
    localStorage.setItem(data.length, JSON.stringify(newEntry));
    
    alert('Thanks for submitting!');
    console.log(data);
}