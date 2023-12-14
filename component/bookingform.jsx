import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function BookingForm({availableTimes, dispatch, submitForm}) {
    console.log(dispatch)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        contactNumber: "",
        date: "",
        time: "00:00",
        noOfGuests: 1,
        occasion: "Birthday"
    })

    const handleFormChange = (event) => {
      const { name, value } = event.target
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }))
    }

    const handleDateChange = async (event) => {
      const { name, value } = event.target
      
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }))
     dispatch({ type: 'UPDATE_TIMES', payload: value })
    }

    const handleSubmit = (event) => {
      event.preventDefault()}
      