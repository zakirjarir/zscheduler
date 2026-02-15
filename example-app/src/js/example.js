import { ZScheduler } from 'zscheduler';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    ZScheduler.echo({ value: inputValue })
}
