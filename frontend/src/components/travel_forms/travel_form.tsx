import React, {useState} from 'react';
import styles from './travel_section.module.scss';

const TravelForm: React.FC = () => {
    const [formData, setFormData] = useState({
        destination: '',
        arrivalDate: '',
        departureDate: '',
        persons: '1',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);

        try {
            const response = await fetch('http://localhost:8000/submit-travel-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Something went wrong.');
            }

            const result = await response.json();
            console.log(result);
            setSuccess(true); // Form submission success
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message); // Type-safe error handling
            } else {
                setError('An unknown error occurred');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.div}>
            <section>
                <header>
                    <h1>Plan Your Trip</h1>
                </header>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="destination">Where are you traveling to?</label>
                        <input
                            type="text"
                            id="destination"
                            name="destination"
                            value={formData.destination}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="arrivalDate">Arrival date</label>
                        <input
                            type="date"
                            id="arrivalDate"
                            name="arrivalDate"
                            value={formData.arrivalDate}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="departureDate">Departure date</label>
                        <input
                            type="date"
                            id="departureDate"
                            name="departureDate"
                            value={formData.departureDate}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="persons">Persons</label>
                        <select
                            id="persons"
                            name="persons"
                            value={formData.persons}
                            onChange={handleChange}
                            required
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="8+">8+ persons</option>
                        </select>
                    </div>

                    <button type="submit" disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>

                    {error && <p style={{color: 'red'}}>{error}</p>}
                    {success && <p style={{color: 'green'}}>Form submitted successfully!</p>}
                </form>
            </section>
        </div>
    );
};

export default TravelForm;
