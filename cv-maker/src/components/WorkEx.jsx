export default function WorkEx({onCompanyChange,onPositionChange,onFromChange,onToChange,ona1Change,ona2Change,ona3Change}) {
    return (
        <div>
            <h2>Work Experience</h2>
            <form>
                <label htmlFor="uni">Company Name: </label>
                <input type="text" name="uni" id="uni" onChange={onCompanyChange}/>

                <label htmlFor="city">Position:</label>
                <input type="text" name="city" id="city" onChange={onPositionChange}/>

                <label htmlFor="from">From:</label>
                <input type="text" name="from" id="from" onChange={onFromChange}/>

                <label htmlFor="to">To:</label>
                <input type="text" name="to" id="to" onChange={onToChange}/>

                <label htmlFor="point1">Achievements in the company:</label>
                <input type="text" name="point" id="point1"  onChange={ona1Change}/>
                <input type="text" name="point" id="point2"  onChange={ona2Change}/>
                <input type="text" name="point" id="point3"  onChange={ona3Change}/>

            </form>
        </div>
    )
}