import React, { useState } from 'react';
import './Contact.css'; // Optional CSS for styling

const suggestions = [
    'Alice',
    'Bob',
    'Charlie',
    'David',
    'Eva',
    'Frank',
    'Grace',
    'Hannah',
    'Ian',
    'Jack',
];

const Contact = () => {
    const [input, setInput] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);

    const handleChange = (event) => {
        const value = event.target.value;
        setInput(value);

        if (value) {
            const filtered = suggestions.filter((suggestion) =>
                suggestion.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredSuggestions(filtered);
        } else {
            setFilteredSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setInput(suggestion);
        setFilteredSuggestions([]);
    };

    return (


        <div className='body23' >
            <h1>Medicine search</h1>
            <div className="search-container">
                <input
                    type="text"
                    value={input}
                    onChange={handleChange}
                    placeholder="Search medicines"
                />
                {filteredSuggestions.length > 0 && (
                    <div className="suggestions">
                        {filteredSuggestions.map((suggestion, index) => (
                            <div
                                key={index}
                                className="suggestion-item"
                                onClick={() => handleSuggestionClick(suggestion)}
                            >
                                {suggestion}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Contact;
