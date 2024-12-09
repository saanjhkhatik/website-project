// message.js
window.onload = function() {
    var welcomeMessage = document.createElement('div');
    welcomeMessage.id = 'welcomeMessage';
    welcomeMessage.style.padding = '20px';
    welcomeMessage.style.backgroundColor = '#fff8e1';
    welcomeMessage.style.color = '#333';
    welcomeMessage.style.textAlign = 'center';
    welcomeMessage.style.border = '2px solid #333';
    welcomeMessage.style.borderRadius = '10px';
    welcomeMessage.style.marginBottom = '20px';
    welcomeMessage.innerHTML = `
        <h2>Welcome to the Wonders Of India</h2>
        <p>This website is made through HTML, CSS and JavaScript coding. I downloaded a website template from the recommended website first and then made changes through CSS and JS coding. I have added a welcome message at the top and my Name and ID in the footer.</p>
    `;
    document.body.insertBefore(welcomeMessage, document.body.firstChild);
}
