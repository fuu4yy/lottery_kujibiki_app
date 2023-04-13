// 入力された文字列を保存するための配列
let inputArray = [];
// 保存ボタンがクリックされたときの処理 
document.getElementById("save").addEventListener("click", function() { let input = document.getElementById("input").value; if (input) { inputArray.push(input); document.getElementById("input").value = ""; alert("保存しました。"); } else { alert("入力してください。"); } });

// 抽選ボタンがクリックされたときの処理 
document.getElementById("draw").addEventListener("click", function() { if (inputArray.length > 0) { 

    // 3秒後に結果を表示する 
    setTimeout(function() { let index = Math.floor(Math.random() * inputArray.length); let result = document.getElementById("result"); result.innerHTML = "選ばれたのは・・・" + inputArray[index] + "！"; }, 3000); } else { alert("入力がありません。"); } });