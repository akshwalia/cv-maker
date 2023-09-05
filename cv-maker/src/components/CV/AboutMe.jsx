export default function AboutMe({DOB,age,gender,birthPlace}) {
    return (
        <section className="leftcvsection">
            <h2>About Me</h2>
            <div className="dob">Date of Birth: {DOB || `25 June, 2004`}</div>
            <div className="age">Age: {age || `19`}</div>
            <div className="gender">Gender: {gender}</div>
            <div className="birthplace">Birth Place: {birthPlace}</div>
        </section>
    )
}