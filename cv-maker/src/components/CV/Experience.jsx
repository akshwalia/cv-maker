export default function Experience({company,position,from,to,a1,a2,a3}) {
    return (
        <section className='cvsection'>
            <h2>Work Experience</h2>
            <h3>{company}</h3>
            <div className="timeandname">{from} to {to} | {position}</div>
            <div className="location">Gurugram, India</div>
            <ul>
                <li>{a1}</li>
                <li>{a2}</li>
                <li>{a3}</li>
            </ul>

        </section>
    )
}