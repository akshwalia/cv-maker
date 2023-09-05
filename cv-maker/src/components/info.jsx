import '../styles/InfoForm.css'

export default function InfoForm({ onNameChange, onRoleChange, onMailChange, onPhoneChange, onAddressChange, onObjectiveChange, onDateChange, onAgeChange, onGenderChange, onBirthChange }) {
    return (
        <div>
            <h2>Personal Information</h2>
            <form>
                <label htmlFor="name">Full Name: </label>
                <input type="text" name="name" id="name" onChange={onNameChange} />

                <label htmlFor="role">Current Role:</label>
                <input type="text" name="currentRole" id="role" onChange={onRoleChange} />

                <label htmlFor="mobile">Mobile Number:</label>
                <input type="number" name="mobile" id="mobile" onChange={onPhoneChange} />

                <label htmlFor="mail">Email:</label>
                <input type="email" name="mail" id="mail" onChange={onMailChange} />

                <div className='formWrapper'>
                    <div>
                        <label htmlFor="dob">Date of Birth:</label>
                        <input type="text" name='dob' id='dob' onChange={onDateChange} />
                    </div>

                    <div>
                        <label htmlFor="age">Age:</label>
                        <input type="number" name='age' id='age' onChange={onAgeChange} />
                    </div>

                    <div>
                        <label htmlFor="gender">Gender:</label>
                        <select name="gender" id="gender" onChange={onGenderChange}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="birthplace">Birth Place:</label>
                        <input type="text" name='birthplace' id='birthplace' onChange={onBirthChange} />
                    </div>
                </div>

                <label htmlFor="address">Address:</label>
                <input type="text" name='address' id='address' onChange={onAddressChange} />

                <label htmlFor="description">Career Objective:</label>
                <textarea name="description" id="description" cols="30" rows="7" onChange={onObjectiveChange}></textarea>
            </form>

        </div>
    );
}