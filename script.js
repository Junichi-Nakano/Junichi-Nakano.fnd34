'use strict'
// 1行目に記載している 'use strict' は削除しないでください

let cont = 0;
function change() {
  // 画像を切り替える処理
  console.log("連携確認　ｏｋ");
  
  // alert("現在、切替コード作成中。機能追加まで お待ちください。");
  const img1 = document.getElementById("pctImage1");
  const img2 = document.getElementById("pctImage2");



    cont = cont + 1
   console.log(cont);
  if (cont % 3 === 0) {
    img1.src = ""
    img2.src = "円.jpg";
  } else if (cont % 3 === 1){
    img1.src = "長方形.jpg"
    img2.src = "";
  } else {
    img1.src = "長方形.jpg"
    img2.src = "円.jpg";
  }
}
    

function calculate() {
  let result = 0
  let result2 = 0
  // 入力値を取得
  const number1 = document.getElementById("number1").value;
  const number2 = document.getElementById("number2").value;
  const number3 = document.getElementById("number3").value;
  console.log("number1:" +number1+ ":"+ typeof number1);
  console.log("number2:" +number2+ ":" + typeof number2);
  console.log("number3:" +number3+ ":" + typeof number3);
  // 計算（断面係数）
  result = number1 * number2** 2 / 6;
  result = parseFloat(result).toFixed(2);

  result2 = 3.14 * number3** 3 / 32;
  result2 = parseFloat(result2).toFixed(2);

  console.log("１）result:" +result+ ":"+ typeof result);
  console.log("２）result2:" +result2+ ":"+ typeof result2);

  if (result == 0 || result2 == 0) {
    console.log(" If 文の中に入ってます。" );
    alert("断面係数を計算する数値が入っていません。問題ないか確認ください。");
  }

  console.log("長方形断面係数：" + result);
  console.log("丸断面係数：" + result2);
  // 結果を表示
  

  document.getElementById("result").innerText = "長方形 断面係数（Z）: " + result +"(mm3)";
  document.getElementById("result2").innerText = "丸　　 断面係数（Z）: " + result2 +"(mm3)";

  return;
}
