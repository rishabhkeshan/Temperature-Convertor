document.querySelector('#Celsius > input').addEventListener('input',function(){
  const c1=parseFloat(document.querySelector('#Celsius > input').value);
  const f1=(c1 * (9/5))+32;
  const k1=c1+273;
  document.querySelector('#Fahrenheit > input').value=f1;
  document.querySelector('#Kelvin > input').value=k1;
});
document.querySelector('#Fahrenheit > input').addEventListener('input',function(){
  const f2=parseFloat(document.querySelector('#Fahrenheit > input').value);
  const c2=(f2-32)*(5/9);
  const k2=c2-273;
  document.querySelector('#Celsius > input').value=c2;
  document.querySelector('#Kelvin > input').value=k2;
});
document.querySelector('#Kelvin > input').addEventListener('input',function(){
  const k3=parseFloat(document.querySelector('#Kelvin > input').value);
  const c3=k3-273;
  const f3=9/5*(k3-273)+32;
  document.querySelector('#Fahrenheit > input').value=f3;
  document.querySelector('#Celsius > input').value=c3;
})
