//console.log('button clicked fill added')
document.getElementById('button-login').addEventListener('click',function(event)
{
    event.preventDefault();
    console.log('button clicked fill added');

    const phoneNumber = document.getElementById('phone-number').value;
   const pinNumber = document.getElementById('pin-number').value;
   console.log(phoneNumber,pinNumber);

   //this is temporary ..you should do like this
   if(phoneNumber === '5' && pinNumber === '1234')
   {
    console.log('you are logged in ');
    window.location.href = '/home.html';

   }
   else
   {
    alert('wrong phone number or pin number');

   }
});

