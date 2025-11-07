import { useState, useEffect, useRef } from 'react';
import "./Blog.css";

function Blog() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const [progress, setProgress] = useState(0);
    const [isClient, setIsClient] = useState(false);

    // Use useRef to store fixed timestamps (calculated only on client)
    const timestamps = useRef(null);

    useEffect(() => {
        setIsClient(true);
        
        const now = new Date().getTime();
        
        // Fixed target date: November 15, 2025 at 12:00 AM
        const FIXED_TARGET_DATE = new Date('2025-11-15T00:00:00');
        const FIXED_TARGET_TIMESTAMP = FIXED_TARGET_DATE.getTime();
        
        // Fixed start date: November 6, 2025 at 12:00 AM (for progress calculation)
        const FIXED_START_DATE = new Date('2025-11-06T00:00:00');
        const FIXED_START_TIMESTAMP = FIXED_START_DATE.getTime();
        
        // Calculate total duration for progress from START date to TARGET date
        const TOTAL_DURATION_MS = FIXED_TARGET_TIMESTAMP - FIXED_START_TIMESTAMP;
        
        timestamps.current = {
            target: FIXED_TARGET_TIMESTAMP,
            start: FIXED_START_TIMESTAMP, // Fixed start date for progress
            total: TOTAL_DURATION_MS
        };

        const timer = setInterval(() => {
            const currentTime = new Date().getTime();
            const distance = timestamps.current.target - currentTime;
            
            // Calculate elapsed time from the FIXED START date (Nov 6, 2025)
            const elapsed = currentTime - timestamps.current.start; 

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
                // Calculate time left from NOW to target date
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000)
                });

                // Calculate progress percentage based on elapsed time from FIXED START to total duration
                let progressPercentage = (elapsed / timestamps.current.total) * 100;
                
                // Ensure progress stays between 0% and 100%
                setProgress(Math.min(Math.max(progressPercentage, 0), 100));
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Don't render anything until we're on the client side
    if (!isClient) {
        return (
            <div className="maintenance-container">
                <div className="maintenance-content">
                    <div className="maintenance-icon">🔧</div>
                    <h1 className="maintenance-title">We'll Be Back Soon!</h1>
                    <p className="maintenance-message">
                        Loading...
                    </p>
                </div>
            </div>
        );
    }

    return(
       <div className="maintenance-container">
            {/* Floating particles */}
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

                {/* Display both start and target dates */}
                <div className="targeted-date">
                    Maintenance Period: November 6, 2025 12:00 AM - November 15, 2025 12:00 AM
                </div>
            </div>
        </div>
    )
}

export default Blog;