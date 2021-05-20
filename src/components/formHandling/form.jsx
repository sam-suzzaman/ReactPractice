import React, { useState } from "react";

const Form = () => {
    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        select: "",
        check: false,
    });

    const { userName, email, select, check } = formData;

    const handleChange = (e) => {
        setFormData({
            // Spreeding the object
            ...formData,
            userName: e.target.value,
        });
    };

    const handleEmail = (e) => {
        setFormData({
            ...formData,
            email: e.target.value,
        });
    };

    const handleSelect = (e) => {
        setFormData({
            ...formData,
            select: e.target.value,
        });
    };

    const handleCheck = (e) => {
        setFormData({
            ...formData,
            check: e.target.checked,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        console.log("calling");
    };
    return (
        <div className="row justify-content-center">
            <div className="col-md-4 bg-dark text-light rounded py-5 px-3">
                <form onSubmit={handleSubmit}>
                    <div className="form-controll">
                        <label htmlFor="nameInput">Your Name</label>
                        <input
                            value={userName}
                            onChange={handleChange}
                            type="text"
                            placeholder="Enter Your Name"
                            className="form-control mt-2"
                            id="nameInput"
                        />
                    </div>
                    <div className="form-controll">
                        <label htmlFor="mailInput">Your Email</label>
                        <input
                            value={email}
                            onChange={handleEmail}
                            type="mail"
                            placeholder="Enter Your Email"
                            className="form-control mt-2"
                            id="mailInput"
                        />
                    </div>
                    <div className="form-controll">
                        <select value={select} onChange={handleSelect}>
                            choose one
                            <option value="Css">Css</option>
                            <option value="Html">Html</option>
                            <option value="Javascript">Javascript</option>
                            <option value="Bootstrap">Bootstrap</option>
                        </select>
                    </div>
                    <div className="form-controll">
                        <input
                            type="checkbox"
                            checked={check}
                            onChange={handleCheck}
                        />
                        cilck on the checkbox
                    </div>
                    <p>
                        <input type="submit" value="Submit" />
                    </p>
                </form>
            </div>
        </div>
    );
};
export default Form;
