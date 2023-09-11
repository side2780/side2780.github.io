const itemNames = ['選擇型8格欄位擴充券', '卡勒馬黑色輪迴星火'];
const itemStatGroup = ['無法交換', '同帳號內移動'];
const itemStats = ['同帳號內移動', '同帳號內移動'];

function createTable(){
    var tableNode = document.createElement('table');
    tableNode.setAttribute('id', 'shop-table');
    var row = itemNames.length + 2;
    var col = 4 + 1; //商品 性質 價格 數量 剩餘
    const titleList = ['商品', '交易狀態', '價格', '角色1', '剩餘數量'];
    const secondList = ['硬幣數量', '', '', `<input type='number' id='coin-character-1' style='width: 80%;'></div>`, '', ''];
    for (var i = 0; i < row; i++){
        var trnode = tableNode.insertRow();
        for (var j = 0; j < col; j++){
            var tdnode = trnode.insertCell();
            tdnode.style.width = "100px";
             if (i == 0){
                tdnode.innerHTML = titleList[j];
                if (j == 3){
                    tdnode.setAttribute('id', `shop-table-title-char-1`);
                } else {
                    tdnode.setAttribute('id', `shop-table-title-${j}`);
                }
            } else if (i == 1){
                tdnode.innerHTML = secondList[j];
            } else if (i > 1){
                if (j == 0){
                    tdnode.innerHTML = itemNames[i-2];
                }
                else if (j == 1){
                    tdnode.innerHTML = itemStats[i-2];
                }
            }
        }
    }
    
    document.getElementById('div-shop-table').appendChild(tableNode);
}

function addRole(){
    var table = document.getElementById(`shop-table`);
    var rows = table.getElementsByTagName('tr');
    var col = table.rows[0].cells.length;
    for (var i = 0; i < rows.length; i++){
        var tdnode = rows[i].insertCell(col-1);
        tdnode.style.width = "100px";
        if (i == 0){
            tdnode.innerHTML = `角色${col-3}`;
            tdnode.setAttribute('id', `shop-table-title-char-${col-3}`);
        } else if (i == 1){
            tdnode.innerHTML = `<input type='number' id='coin-character-${col-3}' style='width: 80%;'></div>`;
        } else {
            // 
        }
    }

    changeTableSize(col + 2);
}

function deleteRole(){
    var table = document.getElementById(`shop-table`);
    var rows = table.getElementsByTagName('tr');
    var col = table.rows[0].cells.length;
    
    if (col <= 5){
        alert('角色數量無法再減少');
        return;
    }

    for (var i = 0; i < rows.length; i++){
        rows[i].deleteCell(col-2);
    }

    changeTableSize(col);
}

function changeTableSize(n){
    document.getElementById(`shop-container`).style.maxWidth = `${100 * n}px`; //沒用處
}

window.onload = function(){
    createTable();
}

