import { asyncScheduler } from 'rxjs';


// setTimeout(() => {
    
// }, 3000);

// setInterval(() => {}, 3000)

const saludar = () => console.log('hola mundo');
const saludar2 = nombre => console.log(`Hola ${nombre}`);

// asyncScheduler.schedule( saludar2, 2000)

// asyncScheduler.schedule( saludar2, 2000, 'Jorge' )

asyncScheduler.schedule( function(state) {
    console.log('state', state);

    this.schedule(state + 1);
}, 3000, 0)