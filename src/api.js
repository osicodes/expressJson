const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        "applications": [
        {
            "id": 1,
            "title": "Technology and Innovation Management",
            "start": "No start date",
            "end": "15 December for the following summer semester 15 June for the following winter semester",
            "link": "https://www2.daad.de/deutschland/studienangebote/international-programmes/en/detail/5591/",
            "remark": "No remark",
            "comment": "This course of study is currently not open for application (as of 5th August 2021)"
        },
        {
            "id": 2,
            "title": "Systems Engineering and Automation",
            "start": "No start date",
            "end": "Non-EU applicants: 1 March for the following winter semester EU applicants: 15 July for the following winter semester Non-EU applicants: 1 September for the following summer semester EU applicants: 15 January for the following summer semester",
            "link": "https://www2.daad.de/deutschland/studienangebote/international-programmes/en/detail/5227/",
            "remark": "Application is submitted.",
            "comment": "No comment"
        },
        {
            "id": 3,
            "title": "Process Engineering and Energy Technology",
            "start": "No start date",
            "end": "Applicants with a non-European Bachelor's degree: Winter semester: 31 May, Summer semester: 30 November Applicants with a European Bachelor's degree: Winter semester: 15 July, Summer semester: 15 January",
            "link": "https://www2.daad.de/deutschland/studienangebote/international-programmes/en/detail/4068/",
            "remark": "No remark",
            "comment": "30 EUR (uniassist payment)"
        },
        {
            "id": 4,
            "title": "MSc Systems Engineering & Engineering Management Specialisation: Mechatronic Systems",
            "start": "No start date",
            "end": "15 May for the winter semester 15 November for the summer semester",
            "link": "https://www2.daad.de/deutschland/studienangebote/international-programmes/en/detail/4062/",
            "remark": "No remark",
            "comment": "75 EUR (uniassist payment)"
        },
        {
            "id": 5,
            "title": "Mechatronic and Cyber-Physical Systems (MEng)",
            "start": "15 April for October entries (winter semester), 15 November for March entries (summer semester)",
            "end": "15 July for October entries (winter semester), 15 January for March entries (summer semester) extended application deadline August 15",
            "link": "https://www2.daad.de/deutschland/studienangebote/international-programmes/en/detail/5378/",
            "remark": "Application sent. Check progress in the portal.",
            "comment": "https://www3.primuss.de/cgi-bin/bew_anmeldung_v2/index.pl?Session=&FH=thd&Email=&Portal=1&Language=en"
        }
    ]
    });
});

router.get('/test', (req, res) => {
    res.json({
        'hi': 'test'
    });
});

app.use('/.netlify/functions/api',router);

module.exports.handler = serverless(app);
