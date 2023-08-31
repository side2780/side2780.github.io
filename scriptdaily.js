var exptable = [
  120,
  140,
  160
]

var vanishing = document.getElementById('daily-vanishing-check');
var chuchu = document.getElementById('daily-chuchu-check');

vanishing.addEventListener('change', function(){
  var content = document.getElementById('daily-vanishing-exp');
  if (vanishing.checked){
    content.textContent = '563,178,660';
  } else {
    content.textContent = '0';
  }
});

chuchu.addEventListener('change', function(){
  var content = document.getElementById('daily-chuchu-exp');
  if (chuchu.checked){
    content.textContent = '1,647,429,420';
  } else {
    content.textContent = '0';
  }
});

function checkboxLock(box, level, limitLevel){
  if (isNaN(level) || level < limitLevel){
    box.disabled = true;
    box.checked = false;
    box.dispatchEvent(new Event('change'));
  } else {
    box.disabled = false;
  }
}

const inputLevel = document.getElementById('level-input');

inputLevel.addEventListener('input', function(event){
    const level = parseInt(event.target.value);
    checkboxLock(vanishing, level, 200);
    checkboxLock(chuchu, level, 210);
});