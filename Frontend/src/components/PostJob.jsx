import {Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';

export const PostJob = () => {
    const [ formData, setFromData ] = useState({
        role: "",
        companyName: "",
        location: '',
        nosOfEmployees: "",
        aboutCompany: "",
        keySkills: "",
        aboutJob: "",
        qualifications: "",
    });

    const postFunction = async () => {
        await axios("http://localhost:8080/api/post/job", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: formData
        })
            .then((res) => {
                if (res.status === 201) {
                    alert("Job Posted");
                } else {
                    alert("something went wrong");
                }
            });
    };

    const handleForm = (e) => {
        e.preventDefault();
        const { className, value } = e.target;
        setFromData({
            ...formData,
            [ className ]: value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        let callFn = false
        Object.entries(formData).forEach(([key,value]) => {
            if (value === "") {
                callFn = false
                return alert(`Please Fill ${key}`);
            }else{
                callFn = true
            }

        });

        if(callFn){
            postFunction();
        }

    };

    const clearForm = () => {
        setFromData({
            role: "",
            companyName: "",
            location: '',
            nosOfEmployees: "",
            aboutCompany: "",
            keySkills: "",
            aboutJob: "",
            qualifications: "",

        });
    };
    return (
        <>
        <Box> 
            <FormControl >
                    <FormLabel>Role</FormLabel>
                    <Input type="text" className='role' value={ formData.role } onChange={ handleForm } />
                <FormLabel>Company Name</FormLabel>
                    <Input type="text" className='companyName' value={ formData.companyName } onChange={ handleForm } />
                <FormLabel>Location</FormLabel>
                    <Input type="text" className='location' value={ formData.location } onChange={ handleForm } />
                <FormLabel>No of Employees</FormLabel>
                <Input type="text" className='nosOfEmployees' value={ formData.nosOfEmployees } onChange={ handleForm } />
                <FormLabel>About Company</FormLabel>
                <textarea className='aboutCompany' value={ formData.aboutCompany } onChange={ handleForm }></textarea>
                <FormLabel>Key Skills</FormLabel>
                <Input type="text" className='keySkills' value={ formData.keySkills } onChange={ handleForm } />
                <FormLabel>About Job</FormLabel>
                <Input type="text" className='aboutJob' value={ formData.aboutJob } onChange={ handleForm } />
                <FormLabel>Qualification</FormLabel>
                <Input type="text" className='qualifications' value={ formData.qualifications } onChange={ handleForm } />
                    <Button type="submit" bg="blue.300" onClick={ handleSubmit } >Submit</Button>
            </FormControl>
            </Box>
        </>
    );
};
