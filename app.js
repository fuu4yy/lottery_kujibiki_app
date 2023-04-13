// 入力された文字列を保存するための配列
let inputArray = [];

// 保存ボタンがクリックされたときの処理
document.getElementById("save").addEventListener("click", function() {
  let input = document.getElementById("input").value;
  if (input) {
    inputArray.push(input);
    document.getElementById("input").value = "";
    renderList();
    alert("保存しました。");
  } else {
    alert("入力してください。");
  }
});

// 削除ボタンがクリックされたときの処理
function deleteItem(index) {
  inputArray.splice(index, 1);
  renderList();
}

// リストを表示する関数
function renderList() {
  let list = document.getElementById("list");
  list.innerHTML = "";
  for (let i = 0; i < inputArray.length; i++) {
    let item = document.createElement("div");
    item.classList.add("item");
    let itemText = document.createElement("div");
    itemText.classList.add("item-text");
    itemText.innerHTML = inputArray[i];
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "×";
    deleteButton.addEventListener("click", function() {
      deleteItem(i);
    });
    item.appendChild(itemText);
    item.appendChild(deleteButton);
    list.appendChild(item);
  }
}

// 抽選ボタンがクリックされたときの処理
document.getElementById("draw").addEventListener("click", function() { if (inputArray.length > 0) { 
    
    // 3秒後に結果を表示する 
    setTimeout(function() { let index = Math.floor(Math.random() * inputArray.length); let result = document.getElementById("result"); result.innerHTML = "選ばれたのは・・・" + inputArray[index] + "！"; }, 3000); } else { alert("入力がありません。"); } });

// リストを初期表示する 
renderList();