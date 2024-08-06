document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('appForm');
    const degreeSelect = document.getElementById('degree');
    const degreeDetailsContainer = document.getElementById('degreeDetailsContainer');
    const contactType = document.getElementById('contactType');
    const contactFieldContainer = document.getElementById('contactFieldContainer');

    function updateDegreeDetails() {
        degreeDetailsContainer.innerHTML = ''; 

        const selectedDegree = degreeSelect.value;

        let label = '';
        let options = '';

        switch (selectedDegree) {
            case 'elementary':
                label = 'Elementary:';
                options = `<select name="elementaryYear" required>
                             <option value="" disabled selected>Select year</option>
                             <option value="1">1</option>
                             <option value="2">2</option>
                             <option value="3">3</option>
                             <option value="4">4</option>
                             <option value="5">5</option>
                           </select>`;
                break;
            case 'primary':
                label = 'Primary:';
                options = `<select name="primaryYear" required>
                             <option value="" disabled selected>Select year</option>
                             <option value="6">6</option>
                             <option value="7">7</option>
                             <option value="8">8</option>
                             <option value="9">9</option>
                             <option value="10">10</option>
                           </select>`;
                break;
            case 'intermediate':
                label = 'Intermediate:';
                options = `<select name="intermediateYear" required>
                             <option value="" disabled selected>Select year</option>
                             <option value="1">1</option>
                             <option value="2">2</option>
                           </select>`;
                break;
            case 'degree':
                label = 'Degree:';
                options = `<select name="degreeYear" required>
                             <option value="" disabled selected>Select year</option>
                             <option value="1">1</option>
                             <option value="2">2</option>
                             <option value="3">3</option>
                           </select>`;
                break;
            case 'btech':
                label = 'B.Tech:';
                options = `<select name="btechYear" required>
                             <option value="" disabled selected>Select year</option>
                             <option value="1">1</option>
                             <option value="2">2</option>
                             <option value="3">3</option>
                             <option value="4">4</option>
                           </select>`;
                break;
        }

        if (label && options) {
            degreeDetailsContainer.innerHTML = `
                <label>${label}</label>
                ${options}
            `;
        }
    }

    function updateContactField() {
        contactFieldContainer.innerHTML = ''; 

        const selectedType = contactType.value;

        if (selectedType === 'email') {
            contactFieldContainer.innerHTML = `
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
            `;
        } else if (selectedType === 'phone') {
            contactFieldContainer.innerHTML = `
                <label for="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" required pattern="[0-9]{10}" title="Phone number must be exactly 10 digits">
            `;
        }
    }

    function clearForm() {
        form.reset();

       
        degreeDetailsContainer.innerHTML = '';
        contactFieldContainer.innerHTML = '';

        degreeSelect.value = '';
        contactType.value = '';
    }

    form.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value.trim();
        const institute = document.getElementById('institute').value.trim();
        const phone = document.getElementById('phone') ? document.getElementById('phone').value.trim() : '';
        const email = document.getElementById('email') ? document.getElementById('email').value.trim() : '';
        
        const namePattern = /^[A-Za-z\s]+$/;
        const phonePattern = /^[0-9]{10}$/;
        const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; 
        
        let isValid = true;

        
        if (!namePattern.test(name)) {
            alert('Name must contain only alphabets.');
            isValid = false;
        }

        if (!namePattern.test(institute)) {
            alert('Name of Institute must contain only alphabets.');
            isValid = false;
        }

        if (phone && !phonePattern.test(phone)) {
            alert('Phone number must be exactly 10 digits.');
            isValid = false;
        }

        if (email && !emailPattern.test(email)) {
            alert('Email must be in the format example@gmail.com.');
            isValid = false;
        }
        if (!isValid) {
            event.preventDefault(); 
        }
    });

    degreeSelect.addEventListener('change', updateDegreeDetails);
    contactType.addEventListener('change', updateContactField);

    clearForm();
});
