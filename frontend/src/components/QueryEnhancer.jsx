import React, { useState } from 'react';
import './QueryEnhancer.css';

const QueryEnhancer = () => {
    const [query, setQuery] = useState('');
    const [enhancedQuery, setEnhancedQuery] = useState('');
    const [isEnhancing, setIsEnhancing] = useState(false);
    const [showEnhanceOptions, setShowEnhanceOptions] = useState(false);

    const enhanceQuery = async (instruction) => {
        setIsEnhancing(true);
        try {
            const response = await fetch('http://localhost:5000/enhance', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Instruction: instruction,
                    Query: query,
                }),
            });

            const data = await response.json();
            if (data.EnhancedQuery) {
                setEnhancedQuery(data.EnhancedQuery);
                setQuery(data.EnhancedQuery);
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsEnhancing(false);
            setShowEnhanceOptions(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitting query:', query);
    };

    return (
        <div className="query-enhancer">
            <form onSubmit={handleSubmit}>
                <div className="message_group">
                    {/* <div className="input-wrapper">
                        <textarea
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Ask a question here"
                            className="text_area_input chat_box_textarea"
                            disabled={isEnhancing}
                        />
                        <div className="button-group">
                            <button
                                type="button"
                                className="enhance-button"
                                onClick={() => setShowEnhanceOptions(!showEnhanceOptions)}
                                disabled={!query || isEnhancing}
                                title="Enhance"
                            >
                                <svg 
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path 
                                        d="M16 4L20 8M4 20L8 18L18 8L16 4L6 14L4 20Z" 
                                        stroke={!query || isEnhancing ? "#B7B7B8" : "#be322b"} 
                                        strokeWidth="2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                    />
                                    <path 
                                        d="M20 4L21 3M21 7L22 8M18 7L17 8" 
                                        stroke={!query || isEnhancing ? "#B7B7B8" : "#be322b"} 
                                        strokeWidth="1.5" 
                                        strokeLinecap="round"
                                    />
                                    <path 
                                        d="M19 2L20 3M20 1L19 2" 
                                        stroke={!query || isEnhancing ? "#B7B7B8" : "#be322b"} 
                                        strokeWidth="1.5" 
                                        strokeLinecap="round"
                                    />
                                    <path 
                                        d="M22 6L23 7M23 5L22 6" 
                                        stroke={!query || isEnhancing ? "#B7B7B8" : "#be322b"} 
                                        strokeWidth="1.5" 
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </button>
                            <button
                                type="submit"
                                className="chatbox_btn"
                                disabled={!query || isEnhancing}
                                title="Send"
                            >
                                <svg 
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path 
                                        d="M22 2L2 9L11 12L14 21L22 2Z" 
                                        stroke={!query || isEnhancing ? "#B7B7B8" : "#be322b"} 
                                        strokeWidth="2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                        fill="none"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div> */}
                    <div 
                    style={{display:'flex', justifyContent:'space-between', alignItems: 'center', width:'100%', border: '2px solid #dbdbdb', borderRadius: '10px'}}
                    >
                    <div style={{width:'80%'}}>
                    <textarea
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Ask a question here"
                            className="text_area_input chat_box_textarea"
                            disabled={isEnhancing}
                        />
                    </div>
                        <div className="button-group">
                            <button
                                type="button"
                                className="enhance-button"
                                onClick={() => setShowEnhanceOptions(!showEnhanceOptions)}
                                disabled={!query || isEnhancing}
                                title="Enhance"
                            >
                                <svg 
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path 
                                        d="M16 4L20 8M4 20L8 18L18 8L16 4L6 14L4 20Z" 
                                        stroke={!query || isEnhancing ? "#B7B7B8" : "#be322b"} 
                                        strokeWidth="2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                    />
                                    <path 
                                        d="M20 4L21 3M21 7L22 8M18 7L17 8" 
                                        stroke={!query || isEnhancing ? "#B7B7B8" : "#be322b"} 
                                        strokeWidth="1.5" 
                                        strokeLinecap="round"
                                    />
                                    <path 
                                        d="M19 2L20 3M20 1L19 2" 
                                        stroke={!query || isEnhancing ? "#B7B7B8" : "#be322b"} 
                                        strokeWidth="1.5" 
                                        strokeLinecap="round"
                                    />
                                    <path 
                                        d="M22 6L23 7M23 5L22 6" 
                                        stroke={!query || isEnhancing ? "#B7B7B8" : "#be322b"} 
                                        strokeWidth="1.5" 
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </button>
                            <button
                                type="submit"
                                className="chatbox_btn"
                                disabled={!query || isEnhancing}
                                title="Send"
                            >
                                <svg 
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path 
                                        d="M22 2L2 9L11 12L14 21L22 2Z" 
                                        stroke={!query || isEnhancing ? "#B7B7B8" : "#be322b"} 
                                        strokeWidth="2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                        fill="none"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {showEnhanceOptions && (
                        <div className="enhance-options">
                            <button
                                type="button"
                                onClick={() => enhanceQuery('Rephrase this')}
                                disabled={isEnhancing}
                            >
                                Rephrase this
                            </button>
                            <button
                                type="button"
                                onClick={() => enhanceQuery('Correct grammar')}
                                disabled={isEnhancing}
                            >
                                Correct grammar
                            </button>
                            <button
                                type="button"
                                onClick={() => enhanceQuery('Correct spellings')}
                                disabled={isEnhancing}
                            >
                                Correct spellings
                            </button>
                        </div>
                    )}

                    {isEnhancing && 
                    <div className="loading">Enhancing query...</div>
                     } 
                </div>
            </form>
        </div>
    );
};

export default QueryEnhancer; 