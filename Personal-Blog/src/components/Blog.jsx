import { useState, useEffect } from 'react';
import "./Blog.css";

function Blog() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const [progress, setProgress] = useState(0);

    // Calculate timestamps for 3 days from tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1); // Tomorrow
    tomorrow.setHours(0, 0, 0, 0); // Start at midnight tomorrow

    const FIXED_START_TIMESTAMP = tomorrow.getTime(); // Start tomorrow at midnight
    const FIXED_TARGET_TIMESTAMP = tomorrow.getTime() + (3 * 24 * 60 * 60 * 1000); // 3 days from tomorrow

    // Calculate the total duration (3 days)
    const TOTAL_DURATION_MS = FIXED_TARGET_TIMESTAMP - FIXED_START_TIMESTAMP;

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = FIXED_TARGET_TIMESTAMP - now;

            if (distance <= 0) {
                clearInterval(timer);
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                });
                setProgress(100);
            } else {
                // Calculate time left 
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000)
                });

                // Calculate progress percentage
                const elapsed = now - FIXED_START_TIMESTAMP;
                let progressPercentage = 0;
                
                // Only show progress if we've passed the start time
                if (now >= FIXED_START_TIMESTAMP) {
                    progressPercentage = (elapsed / TOTAL_DURATION_MS) * 100;
                }
                
                setProgress(Math.min(Math.max(progressPercentage, 0), 100));
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return(
       <div className="maintenance-container">
            <div className="floating-particle"></div>
            <div className="floating-particle"></div>
            <div className="floating-particle"></div>
            <div className="floating-particle"></div>
            <div className="floating-particle"></div>
            
            <div className="loading-bar"></div>
            
            <div className="maintenance-content">
                <div className="maintenance-icon">🔧</div>
                <h1 className="maintenance-title">We'll Be Back Soon!</h1>
                <p className="maintenance-message">
                    Our website is currently undergoing scheduled maintenance. We're working hard to improve your experience and will be back shortly.
                </p>
                
                <div className="countdown-timer">
                    <div className="countdown-title">Estimated time remaining:</div>
                    <div className="timer-grid">
                        <div className="timer-item">
                            <span className="timer-number">{timeLeft.days}</span>
                            <span className="timer-label">Days</span>
                        </div>
                        <div className="timer-item">
                            <span className="timer-number">{timeLeft.hours}</span>
                            <span className="timer-label">Hours</span>
                        </div>
                        <div className="timer-item">
                            <span className="timer-number">{timeLeft.minutes}</span>
                            <span className="timer-label">Minutes</span>
                        </div>
                        <div className="timer-item">
                            <span className="timer-number">{timeLeft.seconds}</span>
                            <span className="timer-label">Seconds</span>
                        </div>
                    </div>
                </div>
                
                <div className="progress-container">
                    <div className="progress-bar">
                        <div 
                            className="progress-fill" 
                            style={{width: `${progress}%`}}
                        ></div>
                    </div>
                    <div className="progress-text">
                        Maintenance Progress: {Math.round(progress)}% Complete
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;