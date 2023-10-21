import {useDispatch, useSelector} from "react-redux"
import {useState} from "react";

const Form =()=>{
   const dispatch = useDispatch()
    const user = useSelector((state)=>state)

    const [formData, setFormData] = useState({ name: '', age: 0, gender: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        dispatch({ type: 'UPDATE_USER', payload: formData });
    };


    return (
        <div>
            <h1>User Information</h1>
            <form>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Age:</label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Gender:</label>
                    <select name="gender" value={formData.gender} onChange={handleInputChange}>
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <button type="button" onClick={handleSubmit}>
                    Save
                </button>
            </form>
            <div>
                <h2>User Information:</h2>
                <p>Name: {user.name}</p>
                <p>Age: {user.age}</p>
                <p>Gender: {user.gender}</p>
            </div>
        </div>
    );
};

export default Form;
