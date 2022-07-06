import { Heading, Text } from '@chakra-ui/react';
import React from 'react';

export const DisplayJob = ({ role, companyName, location, nosOfEmployees, aboutCompany, keySkills, aboutJob, qualifications, date }) => {
    return (
        <>
            <Heading as="h5" size="5xl">Role: { role }</Heading>
            <Heading as="h6" size="6xl">Company: { companyName }</Heading>
            <Text><b>Location:</b> { location }</Text>
            <Text><b>Employees:</b> { nosOfEmployees }</Text>
            <Text><b>About Company:</b> { aboutCompany }</Text> 
            <Text><b>Key skills:</b> { keySkills }</Text>
            <Text><b>About Job:</b> { aboutJob }</Text>
            <Text><b>Qualification:</b> { qualifications }</Text>
            <Text><b>Posted On:</b> { date } </Text>

        </>
    );
};
