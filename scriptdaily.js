const requiredLevel = [
  200, 210, 220, 225, 230, 235, 245, 250, 255, 260, 265, 270, 275
]

const dailyQuestExp = [
  563178660, 1647429420, 2453152500, 2542452030, 3383281665, 3485264580, 5598365850, 6038460000, 6391088550, 13713068400, 14350209192, 19371792600, 32127015480
]

//0 means incomplete, 1 means complete
var dailyCompleteList = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
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
var moonbridge = document.getElementById('daily-moonbridge-check');
var labyrinth = document.getElementById('daily-labyrinth-check');
var limen = document.getElementById('daily-limen-check');
var cernium = document.getElementById('daily-cernium-check');
var burningcernium = document.getElementById('daily-burningcernium-check');
var arcus = document.getElementById('daily-arcus-check');
var odium = document.getElementById('daily-odium-check');

//-----------------------------------------------------------------------------
var checkBoxs = [vanishing, chuchu, lachein, arcana, morass, esfera, moonbridge, labyrinth, limen, cernium, burningcernium, arcus, odium];

function totalCompleteExp() {
  var ans = 0;
  for (var i = 0; i < 13; i++) {
    ans += dailyQuestExp[i] * dailyCompleteList[i];
  }
  return ans;
}

function updateExpDisplay() {
  const resultString = `${totalCompleteExp().toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}`
  totalExp.textContent = resultString;
  document.getElementById('daily-summary-quest').textContent = `每日任務: ${resultString} (0%)`;
}

function changeQuestStatus(box, content, index) {
  if (box.checked) {
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
moonbridge.addEventListener('change', () => changeQuestStatus(moonbridge, document.getElementById('daily-moonbridge-exp'), 6));
labyrinth.addEventListener('change', () => changeQuestStatus(labyrinth, document.getElementById('daily-labyrinth-exp'), 7));
limen.addEventListener('change', () => changeQuestStatus(limen, document.getElementById('daily-limen-exp'), 8));
cernium.addEventListener('change', () => changeQuestStatus(cernium, document.getElementById('daily-cernium-exp'), 9));
burningcernium.addEventListener('change', () => changeQuestStatus(burningcernium, document.getElementById('daily-burningcernium-exp'), 10));
arcus.addEventListener('change', () => changeQuestStatus(arcus, document.getElementById('daily-arcus-exp'), 11));
odium.addEventListener('change', () => changeQuestStatus(odium, document.getElementById('daily-odium-exp'), 12));

function checkboxLock(box, level, limitLevel) {
  if (isNaN(level) || level < limitLevel) {
    box.disabled = true;
    box.checked = false;
    box.dispatchEvent(new Event('change'));
  } else {
    box.disabled = false;
  }
}

const inputLevel = document.getElementById('level-input');

inputLevel.addEventListener('input', function (event) {
  const level = parseInt(event.target.value);
  for (var i = 0; i < 13; i++) {
    checkboxLock(checkBoxs[i], level, requiredLevel[i]);
  }
});

function all_selected() {
  for (var i = 0; i < 13; i++) {
    if (checkBoxs[i].disabled == false) {
      checkBoxs[i].checked = true;
      checkBoxs[i].dispatchEvent(new Event('change'));
    }
  }
}

function all_canceled() {
  for (var i = 0; i < 13; i++) {
    checkBoxs[i].checked = false;
    checkBoxs[i].dispatchEvent(new Event('change'));
  }
}