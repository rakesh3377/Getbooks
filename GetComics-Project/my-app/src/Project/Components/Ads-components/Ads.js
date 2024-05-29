import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/ads.css';

const Dogform = () => {

    const [id, setId] = useState("");
    const [username, setName] = useState("");
    const [price, setPrice] = useState("₹");
    const [description, setDescription] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [title, setTitle] = useState("");

    const [image, setImage] = useState(null);


    const navigate = useNavigate();

    const isValidate = () => {
        let isProceed = true;
        let errorMessage = '';
        if (!phone) {
            isProceed = false;
            errorMessage += 'please enter phone Number';
        }
        if (phone && !/^[6-9]\d{9}$/) {
            isProceed = false;
            errorMessage += 'please enter valid phone Number';
        }
        if (!username) {
            isProceed = false;
            errorMessage += 'Please enter the Full Name. ';
        }
        if (!address) {
            isProceed = false;
            errorMessage += 'Please enter the Address. ';
        }
        if (!id) {
            isProceed = false;
            errorMessage += 'Please enter the Email. ';
        }
        if (id && !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(id)) {
            isProceed = false;
            errorMessage += 'Please enter a valid email. ';
        }
        if (!description) {
            isProceed = false;
            errorMessage += 'Please enter the description. ';
        }
        if (!price) {
            isProceed = false;
            errorMessage += 'Please enter the price. ';
        }

        if (!image) {
            isProceed = false;
            errorMessage += 'Please upload image. ';
        }
        if (!title) {
            isProceed = false;
            errorMessage += 'Please upload title. ';
        }


        setErrorMessage(errorMessage);
        return isProceed;
    }
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            // Convert the image file to a base64 string
            const imageData = reader.result;
            setImage(imageData);
        };

        reader.readAsDataURL(file);
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (isValidate()) {
            const formData = { username, id, phone, address, image, description, price };

            fetch("http://localhost:8000/ads", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            }).then((res) => {
                navigate('/home');
            }).catch((err) => {
                console.error('Failed :' + err.message);
            });
        }
    }


    return (
        <div>
            <div className="ads-maincontainer">
                <form className="ads-form" onSubmit={handleSubmit}>
                    <div className="ads-card">
                        <div className="ads-card-header">
                            <h1>Post a ads for your books</h1>
                        </div>
                        <div className="ads-card-body">

                            <div className="row">
                                <div className="col-l">
                                    <div className="form-group">
                                        <label>Email<span className="errmsg">*</span></label>
                                        <input value={id} onChange={e => setId(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="form-group">
                                    <label>AD Title <span className="errmsg">*</span></label>
                                    <input value={title} onChange={e => setTitle(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="form-group">
                                    <label>Description <span className="errmsg">*</span></label>
                                    <textarea value={description} onChange={e => setDescription(e.target.value)} className="form-control" />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="form-group">
                                    <label>SET A PRICE <span className="errmsg">*</span></label>
                                    <input value={price} onChange={e => setPrice(e.target.value)} defaultValue="₹" className="form-control"></input>
                                </div>
                                <div className="col-1">
                                    <div className="form-group">
                                        <label>Profile Image</label>
                                        <input type="file" onChange={handleImageChange} className="form-control-file"></input>
                                    </div>
                                </div>
                                <div className="col-1">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <textarea value={address} onChange={e => setAddress(e.target.value)} className="form-control"></textarea>
                                    </div>
                                </div>
                                <div className="col-1">
                                    <div className="form-group">
                                        <label>Full Name <span className="errmsg">*</span></label>
                                        <input value={username} onChange={e => setName(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-l">
                                    <div className="form-group">
                                        <label>Phone <span className="errmsg"></span></label>
                                        <input value={phone} onChange={e => setPhone(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="error-message">
                                    {errorMessage && <p className="text-danger">{errorMessage}</p>}
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Post now</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Dogform;
