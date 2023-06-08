import {useState,  useEffect} from 'react';
import Clock from 'react-clock';


const CustomClock = () => {

     //for time
        const [currentTime, setCurrentTime] = useState(new Date());

        function formatTime(time) {
            const hours = time.getHours().toString().padStart(2, '0');
            const minutes = time.getMinutes().toString().padStart(2, '0');
            return `${hours}:${minutes}`;
          }
          
      
        useEffect(() => {
          const timer = setInterval(() => {
            setCurrentTime(new Date());
          }, 1000);
      
          return () => {
            clearInterval(timer);
          };
        }, []);
      
        return (
          <div>
            <Clock/>
            <div className="time-text">{formatTime(currentTime)}</div>
          </div>
        );
      }
      


export default CustomClock
