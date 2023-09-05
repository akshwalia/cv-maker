export default function CareerObjective({text}) {
    return (
        <section className='cvsection objective'>
            <h2>Career Objective</h2>
            <p>{text || `To excel as a full stack developer, leveraging my skills in both front-end and back-end development to create innovative and user-centric web applications that drive business growth and provide exceptional user experiences.`}</p>
        </section>
    )
}