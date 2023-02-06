const mergeArrays = {firstArray, secondArray} => {
    return [...firstArray, ...secondArray];
};

const meds = [
    {
        "id": 1,
        "name": "Xanax",
        "description": "Relaxe your pet a lot"
    },
    {
        "id": 2,
        "name": "Hetox",
        "description": "Feel the power"
    },
    {
        "id": 3,
        "name": "Fajax",
        "description": "Use carefuly"
    },
    {
        "id": 4,
        "name": "Aspirin",
        "description": "very good"
    },
    {
        "id": 5,
        "name": "Sun",
        "description": "Vitamin D"
    },
    {
        "id": 6,
        "name": "Test",
        "description": "Very good drug"
    },
    {
        "id": 7,
        "name": "Ibuprofen",
        "description": "For pain"
    },
    {
        "id": 8,
        "name": "Dimedrol",
        "description": "Raminamieji"
    },
    {
        "id": 9,
        "name": "Test",
        "description": "Teeeeeeeeeeeeeeest"
    },
    {
        "id": 10,
        "name": "Fdgffg",
        "description": "Dfgfdgfdg"
    },
    {
        "id": 11,
        "name": "Terafen",
        "description": "Nuo karsciavimo"
    },
    {
        "id": 12,
        "name": "Fgh",
        "description": "Fgh"
    },
    {
        "id": 13,
        "name": "Fghfgh",
        "description": "Fghgfh"
    },
    {
        "id": 14,
        "name": "Aspirin",
        "description": "Nuo galvos skausmo"
    },
    {
        "id": 15,
        "name": "Sinupret",
        "description": "Isvalot jusu sinusus"
    },
    {
        "id": 16,
        "name": "Dfgfg",
        "description": "Dfg"
    },
    {
        "id": 17,
        "name": null,
        "description": null
    },
    {
        "id": 18,
        "name": null,
        "description": null
    },
    {
        "id": 19,
        "name": null,
        "description": null
    },
    {
        "id": 20,
        "name": null,
        "description": null
    },
    {
        "id": 21,
        "name": null,
        "description": null
    },
    {
        "id": 22,
        "name": null,
        "description": null
    },
    {
        "id": 23,
        "name": "Validolis",
        "description": "To validate dog"
    },
    {
        "id": 24,
        "name": null,
        "description": null
    },
    {
        "id": 25,
        "name": null,
        "description": null
    },
    {
        "id": 26,
        "name": "klizma",
        "description": "10 kartu i diena"
    },
    {
        "id": 27,
        "name": "Ghjhgj",
        "description": "Hgj"
    },
    {
        "id": 28,
        "name": "Sdfdfs",
        "description": "Sdf"
    },
    {
        "id": 29,
        "name": "Test1",
        "description": "Makes you feel good"
    },
    {
        "id": 30,
        "name": "Test2",
        "description": "very good"
    },
    {
        "id": 31,
        "name": "xanny",
        "description": "makes u feel gud"
    },
    {
        "id": 32,
        "name": "drug1",
        "description": "very good drug"
    },
    {
        "id": 33,
        "name": "fsfs",
        "description": "sfsf"
    },
    {
        "id": 34,
        "name": "GELOR",
        "description": "GELIS KOJOM"
    },
    {
        "id": 35,
        "name": "hgfch",
        "description": "gfhfg"
    },
    {
        "id": 36,
        "name": "hgj",
        "description": "hgjh"
    },
    {
        "id": 37,
        "name": "LMedEx",
        "description": "Meds for all"
    },
    {
        "id": 38,
        "name": null,
        "description": null
    },
    {
        "id": 39,
        "name": null,
        "description": null
    },
    {
        "id": 40,
        "name": null,
        "description": null
    },
    {
        "id": 41,
        "name": null,
        "description": null
    },
    {
        "id": 42,
        "name": null,
        "description": null
    },
    {
        "id": 43,
        "name": "wtf",
        "description": "Are you serious?"
    },
    {
        "id": 44,
        "name": null,
        "description": null
    },
    {
        "id": 45,
        "name": null,
        "description": null
    },
    {
        "id": 46,
        "name": null,
        "description": null
    },
    {
        "id": 47,
        "name": null,
        "description": null
    },
    {
        "id": 48,
        "name": "testMed",
        "description": "123 test 123"
    },
    {
        "id": 49,
        "name": "test123123",
        "description": "nenenene"
    },
    {
        "id": 50,
        "name": null,
        "description": null
    }
]; 
    // medication_id: Joi.number().required(),
    // pet_id:Joi.number().required(),
    // comment: Joi.string().trim().required();

    const prescriptions = [
        {medication_id:1 , pet_id: 266, comment:"maniakas"}
    ];

    const pet = getPrescriptions(pet_id);
    
    prescriptions.map (prescription => <div className="card">
        {meds.find(med=> med.id === prescription.medication_id)}
    </div>)

    //<div>Xanax - med name
    // <div>prescription.comment</div>
    // <p class='birthdate'>new Date(pet.dob).toLocaleString(</p>
    //</div>



    //https://glittery-dull-snickerdoodle.glitch.me/v1/meds


