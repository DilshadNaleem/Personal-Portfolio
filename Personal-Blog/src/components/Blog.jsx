import { useState, useEffect } from 'react';
import "./Blog.css";

function Blog() {
    const [timeLeft, setTimeLeft] = useState({
        days: 3,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Set target date to 3 days from now
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 3);
        const totalDuration = 3 * 24 * 60 * 60 * 1000; // 3 days in milliseconds
        
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
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
                const elapsed = totalDuration - distance;
                const progressPercentage = (elapsed / totalDuration) * 100;
                setProgress(Math.min(progressPercentage, 100));
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