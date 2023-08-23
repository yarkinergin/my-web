import React, { useEffect, useState } from "react";

import { useSignOut } from 'react-auth-kit'

import 'bootstrap/dist/css/bootstrap.css';
import Button from "react-bootstrap/esm/Button";
import { Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { useFormik } from "formik";

const AdminPage: React.FC = () => {
    const signOut = useSignOut()
    const navigate = useNavigate()

    const [name, setName] = useState("");
    const [info, setInfo] = useState("");
    const [aboutme, setAboutme] = useState("");
    const [location, setLoc] = useState("");
    const [nationality, setNat] = useState("");
    const [study, setStu] = useState("");
    const [age, setAge] = useState("");
    const [interests, setInt] = useState("");
    const [employment, setEmp] = useState("");

    const [header, setHead] = useState("");
    const [text, setText] = useState("");
    const [skillErr, setSkillErr] = useState("");

    const [skillItems, setSKi] = useState("");

    const [count, setCount] = useState(0);

    const [error, setError] = useState("");

    let data = ""    
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://yarkinergin.cyclic.cloud/api/info/about',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
    };
    
    useEffect(() => {
        console.log("s")
        axios.request(config)
        .then((response) => {
            setName(response.data.name)
            setInfo(response.data.info)
            setAboutme(response.data.aboutme)
            setLoc(response.data.location)
            setNat(response.data.nationality)
            setStu(response.data.study)
            setAge(response.data.age)
            setInt(response.data.interests)
            setEmp(response.data.employment)
        })
        .catch((error) => {
            console.log(error);
        });

        axios.request({
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://yarkinergin.cyclic.cloud/api/blog/skills',
            headers: { 
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                "email": "yarkinerg@gmail.com"
            })
        })
        .then((response) => {
            setSKi((response.data.skill).map((ski: any) => 
                <div key={ski._id}>
                    <Form.Group className="mb-3 mx-4">
                        <Form.Label>Header</Form.Label>
                        <Form.Control disabled type="header" placeholder="Header" defaultValue={ski.header}/>
                    </Form.Group>
                    <Form.Group className="mb-1 mx-4">
                        <Form.Label>Text</Form.Label>
                        <Form.Control id={ski._id} type="text" as="textarea" rows={3} placeholder="Text" defaultValue={ski.text}/>
                    </Form.Group>
                    <Button id={ski.header} type="button" className="btn btn-danger mx-3 my-2" onClick={onDelete}>Delete</Button>
                    <hr style={{background: 'grey', color: 'grey', borderColor: 'grey', height: '2px'}}/>
                </div>
            )); 
        })
        .catch((error) => {
            console.log(error);
        });
    }, [count])

    const onSubmit = async (values: any) => {
        console.log("Values: ", values);
        setError("");
        try {
            const response = await axios.post(
                "https://yarkinergin.cyclic.cloud/api/info/about-reg",
                values
            );
        } catch (err) {
            if (err && err instanceof AxiosError){
                setError(err.response?.data.message);
            }
            else if (err && err instanceof Error) setError(err.message);

            console.log("Error: ", err);
        }
        // update skills
        try {
            axios.request({
                method: 'post',
                maxBodyLength: Infinity,
                url: 'https://yarkinergin.cyclic.cloud/api/blog/skills',
                headers: { 
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify({
                    "email": "yarkinerg@gmail.com"
                })
            })
            .then((response) => {
                for(let i = 0; i < Object.keys(response.data.skill).length; i++){
                    axios.request({
                        method: 'post',
                        maxBodyLength: Infinity,
                        url: 'https://yarkinergin.cyclic.cloud/api/blog/skills-reg',
                        headers: { 
                            'Content-Type': 'application/json'
                        },
                        data: JSON.stringify({
                            email: "yarkinerg@gmail.com",
                            header: response.data.skill[i].header,
                            text: (document.getElementById(`${response.data.skill[i]._id}`) as HTMLInputElement).value
                        })
                    })
                    .then((response) => {
                        console.log(JSON.stringify(response.data));
                      })
                }
            })
            .catch((error) => {
                console.log(error);
            });
        } catch (err) {
            if (err && err instanceof AxiosError){
                setError(err.response?.data.message);
            }
            else if (err && err instanceof Error) setError(err.message);

            console.log("Error: ", err);
        }
        setCount(count + 1)
    }

    const onDelete = async (event: any) => {
        const header = event.currentTarget.id
        console.log(JSON.stringify({
            "email": "yarkinerg@gmail.com",
            "header": header
        }))
        await axios.request({
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://yarkinergin.cyclic.cloud/api/blog/skills-del',
            headers: { 
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                "email": "yarkinerg@gmail.com",
                "header": header
            })
        })
        setCount(count + 1)
    }

    const addSkill = async () => {
        try {
            if (header !== "") {
                const response = await axios.post(
                    'https://yarkinergin.cyclic.cloud/api/blog/skills-add',
                    {
                        "email": "yarkinerg@gmail.com",
                        "header": header,
                        "text": text
                    }
                );
                setSkillErr("");
                (document.getElementById(`header-skill`) as HTMLInputElement).value = "";
                (document.getElementById(`text-skill`) as HTMLInputElement).value = "";
            }
            else setSkillErr("Please enter an header!")
        } catch (err) {
            if (err && err instanceof AxiosError){
                setError(err.response?.data.message);
                if (err.response?.status === 400) {
                    setSkillErr("Header already exists!")
                }
            }
            else if (err && err instanceof Error) setError(err.message);

            console.log("Error: ", err);
        }
        setCount(count + 1)
    }

    const logout = () => {
        signOut()
        navigate('/')
    }

    const formik = useFormik({
        initialValues: {
          email: "yarkinerg@gmail.com",
          name: "",
          info: "",
          aboutme: "",
          location: "",
          nationality: "",
          study: "",
          age: "",
          interests: "",
          employment: "",
        },
        onSubmit,
      });

    return (
        <div>
            <h1 className="text-center">Admin Page</h1>
            <Form onSubmit={formik.handleSubmit}>
                <h2 className="mx-3">Header</h2>
                <Form.Group className="mb-3 mx-4 w-25" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control disabled name="name" type="name" placeholder="Enter your full name" defaultValue={name} onChange={formik.handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3 mx-4" controlId="info">
                    <Form.Label>Bio</Form.Label>
                    <Form.Control disabled  type="info" as="textarea" rows={3} placeholder="Bio" defaultValue={info} onChange={formik.handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3 mx-4" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <h2 className="mx-3 mt-3">About Me</h2>
                <Form.Group className="mb-3 mx-4">
                    <Form.Label>About</Form.Label>
                    <Form.Control disabled  id="aboutme" type="aboutme" as="textarea" rows={3} placeholder="Info" defaultValue={aboutme} onChange={formik.handleChange}/>
                    <InputGroup className="my-3">
                        <Form.Control disabled  id="location" type="location" placeholder="Location" defaultValue={location} onChange={formik.handleChange}/>
                        <Form.Control disabled  id="nationality" type="nationality" placeholder="Nationality" defaultValue={nationality} onChange={formik.handleChange}/>
                        <Form.Control disabled  id="study" type="study" placeholder="Study" defaultValue={study} onChange={formik.handleChange}/>
                    </InputGroup>
                    <InputGroup>
                        <Form.Control disabled  id="age" type="age" placeholder="Age" defaultValue={age} onChange={formik.handleChange}/>
                        <Form.Control disabled  id="interests" type="interests" placeholder="Interests" defaultValue={interests} onChange={formik.handleChange}/>
                        <Form.Control disabled  id="employment" type="employment" placeholder="Employment" defaultValue={employment} onChange={formik.handleChange}/>
                    </InputGroup>
                </Form.Group>
                <h2 className="mx-3 mt-3">Skills</h2>
                {skillItems}
                <Form.Group className="mb-3 mx-4">
                    <Form.Label>Header</Form.Label>
                    <Form.Control disabled id="header-skill" type="header" onChange={(event) => {setHead(event.target.value)}} placeholder="Header"/>
                </Form.Group>
                <Form.Group className="mb-1 mx-4">
                    <Form.Label>Text</Form.Label>
                    <Form.Control disabled  id="text-skill" type="text" as="textarea" rows={3} onChange={(event) => {setText(event.target.value)}} placeholder="Text"/>
                    <p className="text-danger">{skillErr}</p>
                    <Button className="btn btn-success mx-3 my-2" variant="primary" onClick={addSkill}>Add</Button>
                </Form.Group>
                <Button className="mx-3 mb-3" variant="primary" type="submit" onClick={onSubmit}>
                    Submit
                </Button>
                <Button variant="dark" className="mb-3" onClick={logout}>Log Out</Button>
            </Form>
        </div>
    );
}
    
  export default AdminPage;
