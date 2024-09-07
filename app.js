
let second_put;
let minute_put;
let hour_put;


let second_take;
let minute_take;
let hour_take;
let submit_time_button;
let time_form=document.getElementById(`time_form`)

// let store_1=new String();

let second_store;
let minute_store;
let hour_store;


second_take=document.getElementById(`for_seconds`);
minute_take=document.getElementById(`for_minutes`);
hour_take=document.getElementById(`for_hours`);
submit_time_button=document.getElementById(`submit_button`);





second_put=document.getElementById('seconds');
minute_put=document.getElementById('minutes');
hour_put=document.getElementById('hours');
second_put.style.fontSize="2em"
minute_put.style.fontSize="2em"
hour_put.style.fontSize="2em"
second_put.style.textWrap="nowrap"
minute_put.style.textWrap="noWrap"
hour_put.style.textWrap="noWrap"






// addEventListener()
time_form.addEventListener('submit',(submit_event)=>{
    submit_event.preventDefault();
    console.log("entered");
    second_store=second_take.value;
    minute_store=minute_take.value;
    hour_store=hour_take.value;
    console.log(second_store);
    console.log(minute_store);
    console.log(hour_store);

    
    let time_interval=setInterval(() => {
        console.log("seconds changed");
        // second_put.innerHTML=second_store;
        // minute_put.innerHTML=minute_store;
        // hour_put.innerHTML=hour_store;
        second_put.innerHTML=`${second_store}`;
        minute_put.innerHTML=`${minute_store}`;
        hour_put.innerHTML=`${hour_store}`;
        console.log(second_store);
        console.log(minute_store);
        console.log(hour_store);
        
        
        
        second_store--;
        if (second_store==0) {
            second_store=59;
            minute_store--;
            console.log("minutes changed");
        }
        else if (minute_store==0 && second_store==0) {
            minute_store=0;
            hour_store--;
            second_put=0;
            console.log("hours changed");
        }
        else if (second_store==0 && minute_store==0 && hour_store==0 ) {
            second_put.innerHTML="👍🏻";
            minute_put.innerHTML="👍🏻";
            hour_put.innerHTML="👍🏻"
            clearInterval(time_interval)
        }

        

    }, 1000);


})









