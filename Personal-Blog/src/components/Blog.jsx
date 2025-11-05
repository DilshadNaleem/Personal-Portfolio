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

    // --- FIXED TIMESTAMP CALCULATION ---

    // 1. Calculate the Target (End) Timestamp: 3 days from tomorrow at midnight
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1); // Tomorrow
    tomorrow.setHours(0, 0, 0, 0); // Start at midnight tomorrow

    // Target (End) Time: 3 days from tomorrow at midnight
    const FIXED_TARGET_TIMESTAMP = tomorrow.getTime() + (3 * 24 * 60 * 60 * 1000); 

    // Total duration is a fixed 3 days
    const TOTAL_DURATION_MS = 3 * 24 * 60 * 60 * 1000;

    // Start Time: 3 days BEFORE the Target Time. 
    // This allows the progress bar to start showing a value immediately if 
    // the maintenance started in the past (which it must to show progress > 0).
    const FIXED_START_TIMESTAMP = FIXED_TARGET_TIMESTAMP - TOTAL_DURATION_MS;

    // --- EFFECT HOOK FOR TIMER AND PROGRESS UPDATE ---

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = FIXED_TARGET_TIMESTAMP - now;
            
            // Calculate elapsed time from the fixed start
            const elapsed = now - FIXED_START_TIMESTAMP; 

            if (distance <= 0) {
                // Maintenance is complete
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
                let progressPercentage = (elapsed / TOTAL_DURATION_MS) * 100;
                
                // Ensure progress stays between 0% and 100%
                setProgress(Math.min(Math.max(progressPercentage, 0), 100));
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // --- RENDER FUNCTION ---

    return(
       <div className="maintenance-container">
            {/* ... Floating particles remain here ... */}
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