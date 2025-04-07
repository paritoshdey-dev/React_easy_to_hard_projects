import React,{useState} from 'react'

function FormComponent() {
    const [formData,setFormData]=useState({
        name:'',
        email:''
    });
    function handleChange(e){
        const {name,value}=e.target;
        setFormData((prevData)=>({
            ...prevData,
            [name]:value
        })
    )
    }
    function handleSubmit(e){
        e.preventDefault();
        alert(`submitted: ${formData.name} ${formData.email}`)
        setFormData({name:'',email:''})
    }
  return (
    <div>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
            <label>Name:</label>
            <input type='text'
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            />
        </div>
        <div>
            <label>Email:</label>
            <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default FormComponent
