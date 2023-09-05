const levelUpExp = [
  0, 15, 34, 57, 92, 135, 372, 560, 840, 1242, 1242, 1242, 1242, 1242, 1242, 1490, 1788, 2145, 2574, 3088, 3705, 4446, 5335, 6402, 7682, 9218, 11061, 13273, 15927, 19112, 19112, 19112, 19112, 19112, 19112, 22934, 27520, 33024, 39628, 47553, 51357, 55465, 59902, 64694, 69869, 75458, 81494, 88013, 95054, 102658, 110870, 119739, 129318, 139663, 150836, 162902, 175934, 190008, 205208, 221624, 221624, 221624, 221624, 221624, 221624, 238245, 256113, 275321, 295970, 318167, 342029, 367681, 395257, 424901, 456768, 488741, 522952, 559558, 598727, 640637, 685481, 733464, 784806, 839742, 898523, 961419, 1028718, 1100728, 1177778, 1260222, 1342136, 1429374, 1522283, 1621231, 1726611, 1838840, 1958364, 2085657, 2221224, 2365603, 2365603, 2365603, 2365603, 2365603, 2365603, 2519367, 2683125, 2857528, 3043267, 3241079, 3451749, 3676112, 3915059, 4169537, 4440556, 4729192, 5036589, 5363967, 5712624, 6083944, 6479400, 6900561, 7349097, 7826788, 8335529, 8877338, 9454364, 10068897, 10723375, 11420394, 12162719, 12953295, 13795259, 14691950, 15646926, 16663976, 17747134, 18900697, 20129242, 21437642, 22777494, 24201087, 25713654, 27320757, 29028304, 30842573, 32770233, 34818372, 36994520, 39306677, 41763344, 44373553, 47146900, 50093581, 53224429, 56550955, 60085389, 63840725, 67830770, 72070193, 76574580, 81360491, 86445521, 91848366, 97588888, 103688193, 110168705, 117054249, 124370139, 132143272, 138750435, 145687956, 152972353, 160620970, 168652018, 177084618, 185938848, 195235790, 204997579, 215247457, 226009829, 237310320, 249175836, 261634627, 274716358, 288452175, 302874783, 318018522, 333919448, 350615420, 368146191, 386553500, 405881175, 426175233, 447483994, 469858193, 493351102, 518018657, 543919589, 571115568, 2207026470, 2471869646, 2768494003, 3100713283, 3472798876, 3889534741, 4356278909, 4879032378, 5464516263, 6120258214, 9792413142, 10869578587, 12065232231, 13392407776, 14865572631, 19325244420, 21064516417, 22960322894, 25026751954, 27279159629, 35462907517, 37945311043, 40601482816, 43443586613, 46484637675, 64148799991, 67356239990, 70724051989, 74260254588, 77973267317, 124757227707, 128499944538, 132354942874, 136325591160, 140415358894, 193773195273, 199586391131, 205573982864, 211741202349, 218093438419, 348949501470, 359417986514, 370200526109, 381306541892, 392745738148, 541989118644, 558248792203, 574996255969, 592246143648, 610013527957, 976021644731, 1005302294072, 1035461362894, 1066525203780, 1098520959893, 1131476588689, 1165420886349, 1200383512939, 1236395018327, 1273486868876, 2902427248153, 2931451520634, 2960766035840, 2990373696198, 3020277433159, 3050480207490, 3080985009564, 3111794859659, 3142912808255, 3174341936337, 6412170711400, 6476292418514, 6541055342699, 6606465896125, 6672530555086, 13478511721273, 14826362893400, 16308999182740, 17939899101014, 19733889011115, 39862455802452, 43848701382697, 48233571520966, 53056928673062, 58362621540368, 117892495511543, 129681745062697, 142649919568966, 156914911525862, 172606402678448, 348664933410464, 383531426751510, 421884569426661, 464073026369327, 510480329006259, 1031170264592640, 1134287291051900, 1247716020157090, 1372487622172800, 2058731433259200
];

const questRequiredLevel = [
  200, 210, 220, 225, 230, 235, 245, 250, 255, 260, 265, 270, 275
];

const dailyQuestExp = [
  563178660, 1647429420, 2453152500, 2542452030, 3383281665, 3485264580, 5598365850, 6038460000, 6391088550, 13713068400, 14350209192, 19371792600, 32127015480
];

//0 means incomplete, 1 means complete
var dailyCompleteList = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];

var questAreaNames = [
  'vanishing', 'chuchu', 'lachein', 'arcana', 'morass', 'esfera', 'moonbridge', 'labyrinth', 'limen', 'cernium', 'burningcernium', 'arcus', 'odium'
];

const parkRequiredLevel = [
  105, 105, 105, 105, 105, 140, 140, 140, 140, 140, 140, 180, 180, 180, 180, 200, 210, 220, 225, 230, 235, 240, 245, 250, 255, 260
];

const parkMaxLevel = [
  139, 139, 139, 139, 139, 179, 179, 179, 179, 179, 179, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300
];

const parkExp = [
  3908220, 5989675, 7311630, 8129820, 11524015, 11665170, 13378390, 15311670, 19345565, 26950030, 27953565, 33576980, 35340485, 39775800, 40650435, 179957540, 642539340, 1608830495, 2413245742, 2724323200, 3146303350, 3630339550, 4686646600, 7029450500, 7776278700, 0
];

var parkAreaNames = [
  'ASA', 'MTF', 'SFTC', 'SPH', 'OB', 'DIF', 'FT', 'CR', 'RC', 'FDT', 'WT', 'DN', 'TO', 'KS', 'SV', 'vanishing', 'chuchu', 'lachein', 'arcana', 'morass', 'esfera', 'sellas', 'moonbridge', 'labyrinth', 'limen', 'extreme'
];

var checkBoxs = [];
for (var i = 0; i < 13; i++) {
  checkBoxs.push(document.getElementById(`daily-${questAreaNames[i]}-check`));
}

for (let i = 0; i < 13; i++) {
  checkBoxs[i].addEventListener('change', () => changeQuestStatus(i));
}

for (let i = 0; i < 26; i++) {
  document.getElementById(`park-${parkAreaNames[i]}-select`).addEventListener('change', () => parkSelected(i));
}

const inputLevel = document.getElementById('level-input');

function changeQuestStatus(index) {
  const area = questAreaNames[index];
  const box = document.getElementById(`daily-${area}-check`);
  var numLabel = document.getElementById(`daily-${area}-exp`);
  var pctLabel = document.getElementById(`daily-${area}-percent`);

  if (box.checked) {
    numLabel.textContent = `${dailyQuestExp[index].toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}`;
    pctLabel.textContent = `${((dailyQuestExp[index] / levelUpExp[parseInt(inputLevel.value)] * 100) || 0).toFixed(3)}%`;
    dailyCompleteList[index] = 1;
  } else {
    numLabel.textContent = '0';
    pctLabel.textContent = '0.000%';
    dailyCompleteList[index] = 0;
  }
  updateExpDisplay();
}

function totalCompleteExp() {
  var ans = 0;
  for (var i = 0; i < 13; i++) {
    ans += dailyQuestExp[i] * dailyCompleteList[i];
  }
  return ans;
}

function updateExpDisplay() {

  //每日任務
  var questExpNumber = totalCompleteExp();
  var questExpPercet = ((questExpNumber / levelUpExp[parseInt(inputLevel.value)] * 100) || 0).toFixed(3);
  const questString = `${questExpNumber.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}`
  document.getElementById('daily-total-exp').textContent = questString;
  document.getElementById('daily-total-percent').textContent = `${questExpPercet.toString()}%`;
  document.getElementById('daily-summary-quest').textContent = `每日任務: ${questString} (${questExpPercet.toString()}%)`;

  //怪物公園
  var parkCount = 0;
  for (var i = 0; i < 26; i++) {
    parkCount += parseInt(document.getElementById(`park-${parkAreaNames[i]}-select`).value);
  }
  document.getElementById('park-total-count').textContent = parkCount;
  var extremeCount = parseInt(document.getElementById('park-extreme-select').value);
  if (parkCount - extremeCount > 7) {
    document.getElementById('park-total-count').style.color = "red";
    document.getElementById('daily-summary-park').style.backgroundColor = "rgba(255, 0, 0, 0.8)";
    document.getElementById('daily-summary-park').style.borderColor = "red";
    document.getElementById('daily-summary-park').style.color = "white";
  } else {
    document.getElementById('park-total-count').style.color = "black";
    document.getElementById('daily-summary-park').style.backgroundColor = "rgb(255, 252, 67)";
    document.getElementById('daily-summary-park').style.borderColor = "rgba(255, 192, 3, 0.858)";
    document.getElementById('daily-summary-park').style.color = "black";
  }

  var parkExpNumber = 0;
  for (var i = 0; i < 26; i++) {
    parkExpNumber += parkExp[i] * parseInt(document.getElementById(`park-${parkAreaNames[i]}-select`).value);
  }
  if (document.getElementById('park-sundaymaple-check').checked) {
    parkExpNumber *= 2;
  } else if (document.getElementById('park-sunday-check').checked) {
    parkExpNumber *= 1.5;
  }
  document.getElementById('park-total-exp').textContent = parkExpNumber.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  var parkExpPercet = ((parkExpNumber / levelUpExp[parseInt(inputLevel.value)] * 100) || 0).toFixed(3);
  const parkString = `${parkExpNumber.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}`
  document.getElementById('park-total-percent').textContent = `${parkExpPercet.toString()}%`;
  document.getElementById('daily-summary-park').textContent = `怪物公園: ${parkString} (${parkExpPercet.toString()}%)`;

  //合計部分
  var totalExpNumber = questExpNumber + parkExpNumber;
  var totalExpPercet = ((totalExpNumber / levelUpExp[parseInt(inputLevel.value)] * 100) || 0).toFixed(3);
  const resultString = `${totalExpNumber.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}`

  document.getElementById('daily-summary-total').textContent = `合計: ${resultString} (${totalExpPercet.toString()}%)`;
}

inputLevel.addEventListener('input', function (event) {
  const level = parseInt(event.target.value);
  /* NEW AGE VERSION
  260~264 204000000
  265~269 265200000
  270~274 420000000
  275~279 537600000
  280~ 583200000
  */
  if (level >= 260 && level <= 269) {
    parkExp[25] = level * 204000000;
  } else if (level >= 270 && level <= 274) {
    parkExp[25] = level * 300000000;
  } else if (level >= 275 && level <= 279) {
    parkExp[25] = level * 384000000;
  } else if (level >= 280) {
    parkExp[25] = level * 432000000;
  } else {
    parkExp[25] = 0;
  }

  for (var i = 0; i < 13; i++) {
    questBlockLock(i, level);
  }

  for (var i = 0; i < 26; i++) {
    parkBlockLock(i, level);
  }

  updateExpDisplay();
});

function questBlockLock(i, level) {
  const limitLevel = questRequiredLevel[i];
  var box = checkBoxs[i];
  var block = document.getElementById(`daily-${questAreaNames[i]}-block`);

  if (isNaN(level) || level < limitLevel) {
    block.style.display = "none";
    box.disabled = true;
    box.checked = false;
    box.dispatchEvent(new Event('change'));
  } else {
    block.style.display = "";
    box.disabled = false;
  }

  box.dispatchEvent(new Event('change'));
}

function parkBlockLock(i, level) {
  const lower = parkRequiredLevel[i];
  const upper = parkMaxLevel[i];
  var box = document.getElementById(`park-${parkAreaNames[i]}-select`);
  var block = document.getElementById(`park-${parkAreaNames[i]}-block`);

  if (isNaN(level) || level < lower || level > upper) {
    block.style.display = "none";
    box.value = 0;
  } else {
    block.style.display = "";
  }

  box.dispatchEvent(new Event('change'));
}

function all_quest_selected() {
  for (var i = 0; i < 13; i++) {
    if (checkBoxs[i].disabled == false) {
      checkBoxs[i].checked = true;
      checkBoxs[i].dispatchEvent(new Event('change'));
    }
  }
}

function all_quest_canceled() {
  for (var i = 0; i < 13; i++) {
    checkBoxs[i].checked = false;
    checkBoxs[i].dispatchEvent(new Event('change'));
  }
}

document.getElementById("park-sunday-check").addEventListener("change", function (event) {
  if (this.checked) {
    document.getElementById("park-sundaymaple-block").style.visibility = "";
  } else {
    document.getElementById("park-sundaymaple-block").style.visibility = "hidden";
    document.getElementById("park-sundaymaple-check").checked = false;
  }
  for (var i = 0; i < 26; i++) {
    parkSelected(i);
  }
  updateExpDisplay();
});

document.getElementById("park-sundaymaple-check").addEventListener("change", function (event) {
  for (var i = 0; i < 26; i++) {
    parkSelected(i);
  }
  updateExpDisplay();
});

function all_park_canceled() {
  for (var i = 0; i < 26; i++) {
    document.getElementById(`park-${parkAreaNames[i]}-select`).value = 0;
    document.getElementById(`park-${parkAreaNames[i]}-select`).dispatchEvent(new Event('change'));
  }
}

function parkSelected(index) {
  const name = parkAreaNames[index];
  const selection = document.getElementById(`park-${name}-select`);
  const n = selection.value;
  const isSunday = document.getElementById(`park-sunday-check`).checked;
  const isSundayMaple = document.getElementById(`park-sundaymaple-check`).checked;
  var numLabel = document.getElementById(`park-${name}-exp`);
  var percentLabel = document.getElementById(`park-${name}-percent`);

  if (isSundayMaple) {
    numLabel.textContent = (parkExp[index] * 2 * n).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    percentLabel.textContent = `${((parkExp[index] / levelUpExp[parseInt(inputLevel.value)] * 2 * n * 100) || 0).toFixed(3)}%`;
  } else if (isSunday) {
    document.getElementById(`park-${name}-exp`).textContent = (parkExp[index] * 1.5 * n).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    percentLabel.textContent = `${((parkExp[index] / levelUpExp[parseInt(inputLevel.value)] * 1.5 * n * 100) || 0).toFixed(3)}%`;
  } else {
    document.getElementById(`park-${name}-exp`).textContent = (parkExp[index] * n).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    percentLabel.textContent = `${((parkExp[index] / levelUpExp[parseInt(inputLevel.value)] * n * 100) || 0).toFixed(3)}%`;
  }
  updateExpDisplay();
}

function informationOver(name) {
  var block = document.getElementById('information-block');
  if (name == 'park') {
    if (parseInt(document.getElementById(`park-total-count`).textContent) > 7) {
      block.style.display = `block`;
      block.style.backgroundColor = `rgba(255, 0, 0, 0.8)`;
      block.textContent = `Warning: 怪物公園完成數量超過上限(7場)`;
    }
  }

  if (name == 'total') {
    var questExp = parseInt(document.getElementById('daily-total-exp').textContent.replace(/[,]+/g,""));
    var parkExp = parseInt(document.getElementById(`park-total-exp`).textContent.replace(/[,]+/g,""));
    var days = Math.ceil(levelUpExp[parseInt(inputLevel.value)] / (questExp + parkExp));
    if (!isFinite(days)) {
      return;
    }
    block.style.display = `block`;
    block.style.backgroundColor = `rgba(4, 214, 32, 0.8)`;
    block.textContent = `重複 ${days} 天就可以升等囉`;
  }
}

function informationLeave(name) {
  document.getElementById(`information-block`).style.display = `none`;
};
