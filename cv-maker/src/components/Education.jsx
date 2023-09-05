

export default function Education({onSchoolChange,onLocationChange,onDegreeChange,onFromEdChange,onToEdChange}) {

    return (
        <div>
            <h2>Education</h2>
            <form>
                <label htmlFor="uni">School/University: </label>
                <input type="text" name="uni" id="uni" onChange={onSchoolChange}/>

                <label htmlFor="city">City/Country:</label>
                <input type="text" name="city" id="city" onChange={onLocationChange}/>

                <label htmlFor="degree">Degree:</label>
                <input type="text" name="degree" id="degree" onChange={onDegreeChange}/>

                <label htmlFor="from">From:</label>
                <input type="text" name="from" id="from" onChange={onFromEdChange}/>

                <label htmlFor="to">To:</label>
                <input type="text" name="to" id="to" onChange={onToEdChange}/>

            </form>
        </div>
    )
}