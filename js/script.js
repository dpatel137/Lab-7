function init() {
  var msg = document.getElementById('entryinput');	
  var eb = document.getElementById('entrybutton');
  
  eb.addEventListener('click', function() {
    alert('Darsh Patel: ' + msg.value);
    document.getElementById('textoutput').innerHTML = msg.value; });
}
window.addEventListener('load', init);
