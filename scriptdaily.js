const dailyQuestExp = [
  563178660, 1647429420, 2453152500, 2542452030, 3383281665, 3485264580
]

//0 means incomplete, 1 means complete
var dailyCompleteList = [
  0, 0, 0, 0, 0, 0
]

var sum = 0;
var totalExp = document.getElementById('daily-total-exp');
// all checkbox
var vanishing = document.getElementById('daily-vanishing-check');
var chuchu = document.getElementById('daily-chuchu-check');
var lachein = document.getElementById('daily-lachein-check');
var arcana = document.getElementById('daily-arcana-check');
var morass = document.getElementById('daily-morass-check');
var esfera = document.getElementById('daily-esfera-check');

function totalCompleteExp(){
  var ans = 0;
  for (var i = 0; i < 6; i++){
    ans += dailyQuestExp[i] * dailyCompleteList[i];
  }
  return ans;
}

function updateExpDisplay(){
  totalExp.textContent = `${totalCompleteExp().toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}`;
}

function changeQuestStatus(box, content, index){
  if (box.checked){
    content.textContent = `${dailyQuestExp[index].toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}`;
    dailyCompleteList[index] = 1;
  } else {
    content.textContent = '0';
    dailyCompleteList[index] = 0;
  }
  updateExpDisplay();
}

vanishing.addEventListener('change', () => changeQuestStatus(vanishing, document.getElementById('daily-vanishing-exp'), 0));
chuchu.addEventListener('change', () => changeQuestStatus(chuchu, document.getElementById('daily-chuchu-exp'), 1));
lachein.addEventListener('change', () => changeQuestStatus(lachein, document.getElementById('daily-lachein-exp'), 2));
arcana.addEventListener('change', () => changeQuestStatus(arcana, document.getElementById('daily-arcana-exp'), 3));
morass.addEventListener('change', () => changeQuestStatus(morass, document.getElementById('daily-morass-exp'), 4));
esfera.addEventListener('change', () => changeQuestStatus(esfera, document.getElementById('daily-esfera-exp'), 5));

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
    checkboxLock(lachein, level, 220);
    checkboxLock(arcana, level, 225);
    checkboxLock(morass, level, 230);
    checkboxLock(esfera, level, 235);
});