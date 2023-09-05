export default function Education() {
    return (
        <div>
            <h2>Education</h2>
            <form>
                <label htmlFor="uni">School/University: </label>
                <input type="text" name="uni" id="uni" />

                <label htmlFor="city">City/Country:</label>
                <input type="text" name="city" id="city" />

                <label htmlFor="degree">Degree:</label>
                <input type="text" name="degree" id="degree" />

                <label htmlFor="from">From:</label>
                <input type="text" name="from" id="from" />

                <label htmlFor="to">From:</label>
                <input type="text" name="to" id="to" />

            </form>
        </div>
    )
}