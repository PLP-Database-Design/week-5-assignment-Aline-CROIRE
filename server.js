const express = require('express')
const app = express()


// Question 1 goes here



// Mock data for providers
const providers = [
    { first_name: "John", last_name: "Doe", provider_specialty: "Cardiology" },
    { first_name: "Jane", last_name: "Smith", provider_specialty: "Pediatrics" },
    { first_name: "Robert", last_name: "Johnson", provider_specialty: "Dermatology" },
];

// GET endpoint to fetch all providers
app.get('/providers', (req, res) => {
    res.json(providers);
});



// Question 2 goes here
const patients = [
    { patient_id: 1, first_name: "John", last_name: "Doe", date_of_birth: "1990-01-15" },
    { patient_id: 2, first_name: "Jane", last_name: "Smith", date_of_birth: "1985-06-20" },
    { patient_id: 3, first_name: "Michael", last_name: "Johnson", date_of_birth: "1993-08-10" },
];

// GET endpoint to fetch all patients
app.get('/patients', (req, res) => {
    res.json(patients);
});

// Question 3 goes here
// GET endpoint to fetch all patients by first name
app.get('/patients', (req, res) => {
    const { first_name } = req.query;

    if (first_name) {
        const filteredPatients = patients.filter(patient => patient.first_name.toLowerCase() === first_name.toLowerCase());
        return res.json(filteredPatients);
    }

    res.json(patients); // Return all patients if no first_name is provided
});


// Question 4 goes here

// GET endpoint to fetch all providers by specialty
app.get('/providers', (req, res) => {
    const { provider_specialty } = req.query;

    if (provider_specialty) {
        const filteredProviders = providers.filter(provider => provider.provider_specialty.toLowerCase() === provider_specialty.toLowerCase());
        return res.json(filteredProviders);
    }

    res.json(providers); // Return all providers if no provider_specialty is provided
});

// listen to the server
const PORT = 3000
app.listen(PORT, () => {
  console.log(`server is runnig on http://localhost:${PORT}`)
})