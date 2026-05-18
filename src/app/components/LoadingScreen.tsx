import React, { useEffect, useState } from 'react';
import './LoadingScreen.css'; // We will create this next

const LoadingScreen = () => {
    const [stars, setStars] = useState<{ id: number; left: number; top: number; size: number; delay: number }[]>([]);

    useEffect(() => {
        // Generate stars only on the client side to avoid hydration errors
        const numStars = 25;
        const generatedStars = Array.from({ length: numStars }).map((_, i) => ({
            id: i,
            left: Math.floor(Math.random() * window.innerWidth),
            top: Math.floor(Math.random() * window.innerHeight),
            size: Math.floor(Math.random() * 3) + 1,
            delay: Math.random() * 4,
        }));
        setStars(generatedStars);
    }, []);

    return (
        <div className="loading-overlay">
            <div id="star-field">
                {stars.map((star) => (
                    <div
                        key={star.id}
                        className="star"
                        style={{
                            left: `${star.left}px`,
                            top: `${star.top}px`,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            animationDelay: `${star.delay}s`,
                        }}
                    />
                ))}
            </div>

            <div className="loading-container">
                <div className="bed-wrapper">
                    <div className="z-container">
                        <div className="z z1">Z</div>
                        <div className="z z2">z</div>
                        <div className="z z3">z</div>
                    </div>
                    <div className="mattress">
                        <div className="mattress-line"></div>
                        <div className="mattress-line"></div>
                        <div className="mattress-line"></div>
                        <div className="mattress-line"></div>
                    </div>
                    <div className="pillow"></div>
                    <div className="base"></div>
                    <div className="legs">
                        <div className="leg"></div>
                        <div className="leg"></div>
                    </div>
                    <div className="headboard"></div>
                </div>

                <h1>VeroStays</h1>
                <p>Finding your perfect stay...</p>

                <div className="loading-dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
