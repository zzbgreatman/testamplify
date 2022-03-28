import { useState } from 'react';

export default function RegistrationForm() {

// States for registration
    const [name, setName] = useState('');
    const [bucket, setBucket] = useState('');
    const [region, setRegion] = useState('');
    const [key, setKey] = useState('');
    const [snapshotFrequency, setSnapshotFrequency] = useState('daily');
    const [fileRetention, setFileRetention] = useState('30');
    const [snapshotRetention, setSnapshotRetention] = useState('30');

// States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };

// Handling the bucket change
    const handleBucket = (e) => {
        setBucket(e.target.value);
        setSubmitted(false);
    };

// Handling the region change
    const handleRegion = (e) => {
        setRegion(e.target.value);
        setSubmitted(false);
    };

// Handling the key change
    const handleKey = (e) => {
        setKey(e.target.value);
        setSubmitted(false);
    };

    // Handling the snapshot frequency change
    const handleSnapshotFrequency = (e) => {
        setSnapshotFrequency(e.target.value);
        setSubmitted(false);
    };

    // Handling file retention change
    const handleFileRetention = (e) => {
        setFileRetention(e.target.value);
        setSubmitted(false);
    };

    // Handling snapshot retention change
    const handleSnapshotRetention = (e) => {
        setSnapshotRetention(e.target.value);
        setSubmitted(false);
    };

// Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (bucket === '' || region === '' || key === '' || name == '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
        window.location.href="/dashboard"
    };

// Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h3>User successfully registered!!</h3>
            </div>
        );
    };

// Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h3>Please enter all the fields</h3>
            </div>
        );
    };

    return (
        <div className="registration-form-container">
            <div className="registration-form">
                <div>
                    <h1>User Registration</h1>
                </div>

                {/* Calling to the methods */}
                <div className="messages">
                    {errorMessage()}
                    {successMessage()}
                </div>

                <form>
                    {/* Labels and inputs for form data */}
                    <div className="form-item">
                        <label className="form-label">Name</label>
                        <input onChange={handleName} className="input"
                               value={name} type="text" />
                    </div>

                    <div className="form-item">
                        <label className="form-label">AWS S3 Bucket</label>
                        <input onChange={handleBucket} className="input"
                               value={bucket} type="text" />
                    </div>

                    <div className="form-item">
                        <label className="form-label">AWS S3 Region</label>
                        <input onChange={handleRegion} className="input"
                               value={region} type="text" />
                    </div>

                    <div className="form-item">
                        <label className="form-label">AWS Account Key</label>
                        <input onChange={handleKey} className="input"
                               value={key} type="password" />
                    </div>

                    <div className="form-item">
                        <label className="form-label">(Optional) Set frequency of snapshot generation.</label>
                        <select onChange={handleSnapshotFrequency} value={snapshotFrequency}>
                            <option value="daily" selected>Daily (every 24 hours)</option>
                            <option value="weekly">Weekly (every 7 days)</option>
                        </select>
                    </div>

                    <div className="form-item">
                        <label className="form-label">(Optional) Set file retention policy.</label>
                        <select onChange={handleFileRetention} value={fileRetention}>
                            <option value="30" selected>Every 30 days</option>
                            <option value="60">Every 60 days</option>
                            <option value="90">Every 90 days</option>
                        </select>
                    </div>

                    <div className="form-item">
                        <label className="form-label">(Optional) Set snapshot retention policy.</label>
                        <select onChange={handleSnapshotRetention} value={snapshotRetention}>
                            <option value="30" selected>Every 30 days</option>
                            <option value="60">Every 60 days</option>
                            <option value="90">Every 90 days</option>
                        </select>
                    </div>

                    <button onClick={handleSubmit} className="btn" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
