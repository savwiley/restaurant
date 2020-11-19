function init() {
    const mainContent = document.querySelector(".mainContent");
    const inner = document.getElementById("inner");
        inner.remove();
    const body = document.createElement("div");
        body.setAttribute("id", "inner");
        mainContent.appendChild(body);
};

function locationInfo() {
    const body = document.getElementById("inner");
        const info = document.createElement("div");
            info.setAttribute("class", "info");
            const mainLocHeader = document.createElement("h2");
                mainLocHeader.textContent = "Main Store Location";
                info.appendChild(mainLocHeader);
            const mainAddress = document.createElement("span");
                mainAddress.textContent = "4973 Lake Forest Dr. \r\n";
                mainAddress.textContent += "Garden City, NY 11530 \r\n";
                mainAddress.textContent += "555-555-8403 \r\n \r\n";
                info.appendChild(mainAddress);
            const secLocHeader = document.createElement("h2");
                secLocHeader.textContent = "Off-Site Locations";
                info.appendChild(secLocHeader);
            const otherAddress = document.createElement("span");

                otherAddress.textContent = "2779 Patterson Rd. \r\n";
                otherAddress.textContent += "Garden City, NY 11530 \r\n";
                otherAddress.textContent += "555-555-3665 \r\n \r\n";

                otherAddress.textContent += "1292 Mount Tabor \r\n";
                otherAddress.textContent += "Putnam Valley, NY 10579 \r\n";
                otherAddress.textContent += "555-555-9477 \r\n \r\n";

                otherAddress.textContent += "4786 Cherry Ridge Dr. \r\n";
                otherAddress.textContent += "Oakfield, NY 14125 \r\n";
                otherAddress.textContent += "555-555-1668 \r\n \r\n";

                info.appendChild(otherAddress);

            const hoursHeader = document.createElement("h2");
                hoursHeader.textContent = "Business Hours";
                info.appendChild(hoursHeader);
            const hours = document.createElement("span");
                hours.textContent = "Monday-Friday: 11am-8pm \r\n";
                hours.textContent += "Saturday: 9am-10pm \r\n";
                hours.textContent += "Sunday: 9am-8pm";
                info.appendChild(hours);
            body.appendChild(info);
}

function contactForm() {
    const body = document.getElementById("inner");
        const formHeader = document.createElement("h1");
            formHeader.setAttribute("id", "formHeader");
            formHeader.textContent = "Get In Touch!";
            body.appendChild(formHeader);
        const form = document.createElement("form");
            form.setAttribute("class", "form");

            const nameForm = document.createElement("label");
                nameForm.textContent = "Name:";
                form.appendChild(nameForm);

            const nameField = document.createElement("input");
                form.appendChild(nameField);

            const emailForm = document.createElement("label");
                emailForm.textContent = "\r\n Email:";
                form.appendChild(emailForm);

            const emailField = document.createElement("input");
                form.appendChild(emailField);

            const subForm = document.createElement("label");
                subForm.textContent = "\r\n Subject:";
                form.appendChild(subForm);
    
            const subField = document.createElement("input");
                form.appendChild(subField);

            const commForm = document.createElement("label");
                commForm.textContent = "\r\n Comment:";
                form.appendChild(commForm);
        
            const commField = document.createElement("textarea");
                commField.setAttribute("id", "commField");
                form.appendChild(commField);

            const submitBtn = document.createElement("input");
                submitBtn.setAttribute("type", "submit");
                submitBtn.setAttribute("value", "Submit");
                submitBtn.setAttribute("id", "submitBtn");
                form.appendChild(submitBtn);
                
            body.appendChild(form);
}

function contactPage() {
    init();
    locationInfo();
    contactForm();
};

export default contactPage;