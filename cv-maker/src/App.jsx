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
import WorkEx from './components/WorkEx'


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

  const [school, setSchool] = useState('Delhi Technological University');
  const [degree, setDegree] = useState('B.Tech');
  const [location, setLocation] = useState('Delhi, India');
  const [fromEd, setFromEd] = useState('2022');
  const [toEd, setToEd] = useState('2026');

  const [company, setCompany] = useState('Apple Inc.');
  const [position, setPosition] = useState('Full Stack Developer');
  const [from, setFrom] = useState('2026');
  const [to, setTo] = useState('Present');
  const [a1, seta1] = useState('Led development of robust version upgrade to ABC works 2.0 Engineering softwarerelease for speed and improved the user experience.');
  const [a2, seta2] = useState('A 25% increase in the incremental revenues(multi-million dollar growth) within one year.');
  const [a3, seta3] = useState('Award for "Best Web Developer of the year"');


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

  const onSchoolChange = (e) => {
    setSchool(e.target.value);
  }

  const onDegreeChange = (e) => {
    setDegree(e.target.value);
  }

  const onLocationChange = (e) => {
    setLocation(e.target.value);
  }

  const onFromEdChange = (e) => {
    setFromEd(e.target.value);
  }

  const onToEdChange = (e) => {
    setToEd(e.target.value);
  }

  const onCompanyChange = (e) => {
    setCompany(e.target.value);
  }

  const onPositionChange = (e) => {
    setPosition(e.target.value);
  }

  const onFromChange = (e) => {
    setFrom(e.target.value);
  }

  const onToChange = (e) => {
    setTo(e.target.value);
  }

  const ona1Change = (e) => {
    seta1(e.target.value);
  }

  const ona2Change = (e) => {
    seta2(e.target.value);
  }

  const ona3Change = (e) => {
    seta3(e.target.value);
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

        <Education onSchoolChange={onSchoolChange}
                   onLocationChange={onLocationChange}
                   onDegreeChange={onDegreeChange}
                   onFromEdChange={onFromEdChange}
                   onToEdChange={onToEdChange}> </Education>

        <WorkEx onCompanyChange={onCompanyChange}
                onPositionChange={onPositionChange}
                onFromChange={onFromChange}
                onToChange={onToChange}
                ona1Change={ona1Change}
                ona2Change={ona2Change}
                ona3Change={ona3Change}> </WorkEx>
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
          <EducationCV school={school} location={location} degree={degree} fromEd={fromEd} toEd={toEd}></EducationCV>
          <Experience company={company} position={position} from={from} to={to} a1={a1} a2={a2} a3={a3}></Experience>
          
        </div>
      </section>
    </>
  )
}

export default App
