export default function Header({fullName,currentRole}) {
    return (
        <div className='cvHeader'>
            <h1>{fullName}</h1>
            <hr />
            <div className="position">{currentRole}</div>
        </div>
    )
}