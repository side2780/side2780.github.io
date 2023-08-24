document.getElementById('calculateBtn').addEventListener('click', function () {
  const cerniumBefore = parseFloat(document.getElementById('cernium before').value);
  const cerniumAfter = parseFloat(document.getElementById('cernium after').value);
  const arcusBefore = parseFloat(document.getElementById('arcus before').value);
  
  const arcusAfter = parseFloat(document.getElementById('arcus after').value);
  const odiumBefore = parseFloat(document.getElementById('odium before').value);
  const odiumAfter = parseFloat(document.getElementById('odium after').value);

  const cerniumCosts = cerniumCost(cerniumBefore, cerniumAfter);
  const arcusCosts = arcusCost(arcusBefore, arcusAfter);
  const odiumCosts = odiumCost(odiumBefore, odiumAfter);
  const totalCosts = cerniumCosts + arcusCosts + odiumCosts;

  document.getElementById('cernium result').textContent = `${cerniumCosts.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}楓幣`;
  document.getElementById('arcus result').textContent = `${arcusCosts.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}楓幣`;
  document.getElementById('odium result').textContent = `${odiumCosts.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}楓幣`;
  document.getElementById('total result').textContent = `${totalCosts.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}楓幣`;
});

function cerniumCost(before, after) {
  var cost = 0;
  for (var i = before; i < after; i ++) {
    cost += (96900000 + 88500000 * i);
  }
  return cost
}

function arcusCost(before, after) {
  var cost = 0;
  for (var i = before; i < after; i ++) {
    cost += (106600000 + 97300000 * i);
  }
  return cost
}

function odiumCost(before, after) {
  var cost = 0;
  for (var i = before; i < after; i ++) {
    cost += (117400000 + 107100000 * i);
  }
  return cost
}