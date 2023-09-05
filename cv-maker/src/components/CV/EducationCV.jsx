export default function EducationCV({school,location,degree,fromEd,toEd}) {
    return (
        <section className='cvsection'>
            <h2>Education</h2>
            <div className="wrapper education">
                <h3>{fromEd} to {toEd}</h3>
                <div>
                    <div className="schoolname">{school}</div>
                    <div className="degree">{degree}</div>
                    <div className="location">{location}</div>
                </div>

                
            </div>
        </section>
    );
}