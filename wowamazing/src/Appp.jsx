import React from 'react';

function Appp(){
    let curDate = new Date(2020,5,5,16);
curDate = curDate.getHours();
let greeting = '';
const cssStyle={
};

if(curDate>=1 && curDate<12){
  greeting= 'Good Morning';
  cssStyle.color="green";
}else if(curDate>=12 && curDate<19){
  greeting = 'Good Afternoon';
  cssStyle.color="orange";
}else{
  greeting='Good Night';
  cssStyle.color="blue";
}
return (
    <>
<div>
<h1>
 Hello Sir,<span style={cssStyle}> { greeting }</span>
</h1>
</div>
</>
);
}

export default Appp;