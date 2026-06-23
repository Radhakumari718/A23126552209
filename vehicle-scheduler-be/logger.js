const axios = require("axios");

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJrYWphcmFkaGFrdW1hcmkuMjMuY3NtQGFuaXRzLmVkdS5pbiIsImV4cCI6MTc4MjE5ODY4NCwiaWF0IjoxNzgyMTk3Nzg0LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiZTEzMmNjY2YtNjZmNC00OWU1LTg3N2UtMWNiNDkzYzAwM2Q2IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoia2FqYSByYWRoYSBrdW1hcmkiLCJzdWIiOiIyYWEyODFjOS00Y2UzLTRmNjMtODIwMC1jZDMwYzAzZjE3NTAifSwiZW1haWwiOiJrYWphcmFkaGFrdW1hcmkuMjMuY3NtQGFuaXRzLmVkdS5pbiIsIm5hbWUiOiJrYWphIHJhZGhhIGt1bWFyaSIsInJvbGxObyI6ImEyMzEyNjU1MjIwOSIsImFjY2Vzc0NvZGUiOiJNVHF4YXIiLCJjbGllbnRJRCI6IjJhYTI4MWM5LTRjZTMtNGY2My04MjAwLWNkMzBjMDNmMTc1MCIsImNsaWVudFNlY3JldCI6IkNNc3JhalBqeXpCUEVxamQifQ.OQTmbQexzIXBrfeFyqFasUGNsPsKRuM4FtJdUVksIaQ";

async function Log(stack, level, pkg, message) {

    try {

        await axios.post(
            "http://4.224.186.213/evaluation-service/logs",
            {
                stack,
                level,
                package: pkg,
                message
            },
            {
                headers: {
                    Authorization: `Bearer ${TOKEN}`,
                    "Content-Type": "application/json"
                }
            }
        );

    } catch (error) {
        // Don't crash application
    }
}

module.exports = Log;