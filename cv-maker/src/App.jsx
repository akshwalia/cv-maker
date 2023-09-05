import { useState, useSyncExternalStore } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import InfoForm from './components/info'
import Education from './components/Education'
import './styles/CV.css'

import Header from './components/CV/Header'
import CareerObjective from './components/CV/CareerObjective'
import Experience from './components/CV/Experience'
import EducationCV from './components/CV/EducationCV'
import image from './assets/Aksh.png'
import AboutMe from './components/CV/AboutMe'
import Contact from './components/CV/contact'


function App() {
  const [fullName, setFullName] = useState('Aksh Walia');
  const [currentRole, setCurrentRole] = useState('Full Stack Developer');
  const [email, setEmail] =  useState(null);
  const [phone, setPhone] =  useState(null);
  const [address, setAddress] =  useState(null);
  const [objective, setObjective] =  useState(null);
  const [dob, setDOB] =  useState(null);
  const [age, setAge] =  useState(null);
  const [gender, setGender] = useState('Male');
  const [birthPlace, setBirthPlace] = useState('Dehradun, Uttarakhand, India');

  const onNameChange = (e) => {
    setFullName(e.target.value);
  };

  const onRoleChange = (e) => {
    setCurrentRole(e.target.value);
  };

  const onMailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPhoneChange = (e) => {
    setPhone(e.target.value);
  }

  const onAddressChange = (e) => {
    setAddress(e.target.value);
  }

  const onObjectiveChange = (e) => {
    setObjective(e.target.value);
  }

  const onDateChange = (e) => {
    setDOB(e.target.value);
  }
  
  const onAgeChange = (e) => {
    setAge(e.target.value);
  }

  const onGenderChange = (e) => {
    setGender(e.target.value);
  }

  const onBirthChange = (e) => {
    setBirthPlace(e.target.value);
  }

  return (
    <>
      <section id="left">
        <InfoForm onNameChange={onNameChange}  
                  onRoleChange={onRoleChange}       
                  onMailChange={onMailChange}
                  onPhoneChange={onPhoneChange}
                  onAddressChange={onAddressChange}
                  onObjectiveChange={onObjectiveChange}
                  onDateChange={onDateChange}
                  onAgeChange={onAgeChange}
                  onGenderChange={onGenderChange}
                  onBirthChange={onBirthChange}> 

        </InfoForm>

        <Education> </Education>
      </section>

      <section id='right'>
        <div className="leftpanel">
          <img id="pfp" src={image} alt="" />

          <AboutMe DOB={dob} age={age} gender={gender} birthPlace={birthPlace}></AboutMe>
          <Contact phone={phone} email={email} address={address}></Contact>
          
        </div>
        <div className="rightpanel">
          <Header fullName={fullName} currentRole={currentRole}></Header>
          <CareerObjective text={objective}></CareerObjective>
          <EducationCV></EducationCV>
          <Experience></Experience>
          
        </div>
      </section>
    </>
  )
}

export default App
