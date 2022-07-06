import React, { useEffect, useState } from 'react';
import axios from "axios";
import { DisplayJob } from '../components/DisplayJob';
import { FormControl, FormLabel, Input, Button, Box, Heading } from '@chakra-ui/react';

export const JobList = () => {
    const [ jobData, setJobData ] = useState([]);
    const [ page, setPage ] = useState(1);
    const [ formData, setformData ] = useState({
        role: "",
        location: ""
    });
    const makeRequest = () => {
        axios(`http://localhost:8080/api/jobs?page=${page}`)
            .then((data) => setJobData(data.data))
            .then(err => console.log(err));

    };
    //${formData.jobTitle}&${formData.location}page=${page}
    const querySearch = () => {
        console.log('search fn');
        axios(`http://localhost:8080/api/jobs/search/?q=${formData.role}&loc=${formData.location}&page=${page}`)
            .then((data) => setJobData(data.data))
            .then(err => console.log(err));
        console.log(jobData);

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        querySearch();
    };

    const handleForm = (e) => {
        console.log(e.target.value);
        const { id, value } = e.target;
        setformData({
            ...formData,
            [ id ]: value
        });
    };

    useEffect(() => {
        makeRequest();
    }, [ page ]);
    return (
        <>
            <Box m="20px 0" >
                <FormControl display="flex" alignItems="center">
                    <FormLabel m="5px">Role</FormLabel>
                    <Input type="text" id='role' value={ formData.role } onChange={ handleForm } w="50%" />
                    <FormLabel m="5px">Location</FormLabel>
                    <Input type="text" id='location' value={ formData.location } onChange={ handleForm } w="50%" />
                    <Button onClick={ handleSubmit } bg="blue.300" m="5px">Submit</Button>
                    {/* <Input  /> */ }
                </FormControl>
            </Box>
            <Box m="10px" >
                <Heading as='h3' size='3xl' noOfLines={ 1 }>
                    Job Portal
                </Heading>
                { jobData.map((job) => (
                    <Box key={ job._id } m="10px 0" border="1px solid gray" padding="20px">
                        <DisplayJob  { ...job } />
                        <Button bg="blue.300">Apply</Button>
                    </Box>
                )) }
                <Box m="10px 0" textAlign={ "center" }>
                    <Button disabled={ page === 1} onClick={ () => setPage(page - 1) } bg="blue.300" m="4px">Prev</Button>
                    <Button onClick={ () => setPage(page + 1) } bg="blue.300" m="4px">Next</Button>
                </Box>
            </Box>
        </>
    );
};
