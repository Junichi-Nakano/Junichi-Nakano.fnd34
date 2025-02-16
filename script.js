'use strict'
// 1行目に記載している 'use strict' は削除しないでください


function change() {
  // 画像を切り替える処理
  console.log("連携確認　ｏｋ")
  alert("現在、切替コード作成中。機能追加まで お待ちください。")
  // const folder = "C:\Users\jnaka\Documents\10_電算\20_JavaScript\01_会社教育\" 　//データの場所を指定
  // let picture = document.getElementById("pict")
  // picture.src = folder + ".jpg"; //ここがデータを読まない
  
    // if (img.src.match(/folder\.jpg/)) {
    //   img.src = "長方形.jpg";
    // } else {
    //   img.src = "円.jpg";
    // }
    return
}



// console.log("num1.value:" + document.getElementById("number1").value);
// console.log("num1.value:" + num1.value);


function calculate() {
  let result = 0
  let result2 = 0
  // 入力値を取得
  // const number1 = parseFloat(num1.value);
  // const number1 = parseFloat(document.getElementById("number1").value);
  // const number2 = parseFloat(document.getElementById("number2").value);
  // const number3 = parseFloat(document.getElementById("number3").value);
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
