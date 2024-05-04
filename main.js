// 'use strict';

//項目を保存する用
const items=[];
// 登録ボタン
const submit = document.getElementById('submit');
// 項目と内容の要素を取得する
const itemInput = document.getElementById('item');
const contentTextarea = document.getElementById('content');

// const table = document.querySelector('table');     // 表
// const todo = document.getElementById('todo');      // TODO
// const priority = document.querySelector('select'); // 優先度
// const deadline = document.querySelector('input[type="date"]');  // 締切
// const submit = document.getElementById('submit');  // 登録ボタン

// //ストレージ登録用
// const storage = localStorage;
// let list = [];


submit.addEventListener('click',()=>{
    ///ここに処理
    const item = {};

    item.itemInput = itemInput.value;
    item.contentTextarea = contentTextarea.value;

    // console.log(item);
    if(checkform(item))
    {
        resetform();
        addform(item);
    }
    //配列に項目要素だけを要素を追加
    items.push();

});
//document.addEventListener('DOMContentLoaded',()=>{
    
//     // 1. ストレージデータ（JSON）の読み込み
//     const json = storage.todoList;
//     if( json == undefined)
//     {
//         return;
//     }
//     // 2. JSONをオブジェクトの配列に変換して配列listに代入
//     list = JSON.parse(json);
//     // 3. 配列listのデータを元にテーブルに要素を追加
//     for(const item of list)
//     {
//         addItem(item);
//     }
// });



//     list.push(item);
//     storage.todoList = JSON.stringify(list);
//     console.log(JSON.parse(storage.todoList));
// });


// // JSONデータがあったら読み込む(アロー関数)
// const addItem = (item) => {
//     const tr = document.createElement('tr');
//     //ここのforは'td'要素の追加
//     for (const prop in item) {
//       const td = document.createElement('td');
//       if (prop == 'done') {
//         const checkbox = document.createElement('input');
//         checkbox.type = 'checkbox';
//         checkbox.checked = item[prop];
//         td.appendChild(checkbox);
//       } else {
//         td.textContent = item[prop];
//       }
//       tr.appendChild(td);
//     }
  
//     table.append(tr);
//   };

// バリデーション
function checkform(item) {
    if (item.itemInput != '' && item.contentTextarea != '') {
        return true;
    } else {
        window.alert('項目名または内容が空白です');
        return false; 
    }
}

// // フォームをリセット
function resetform()
{
    itemInput.value = '';
    contentTextarea.value = '';
};

// //フォームの追加
// function addform(item)
// {
//     const tr = document.createElement('tr');
    
//     for (const prop in item) {
//       const td = document.createElement('td'); // td要素を生成
//       if(prop == 'done')
//       {
//         const checkbox = document.createElement('input');
//         checkbox.type = 'checkbox';    // type属性をcheckboxに
//         checkbox.checked = item[prop]; // checked属性を設定
//         td.appendChild(checkbox);
//       }
//       else
//       {
//         td.textContent = item[prop];
//       }
//       tr.appendChild(td);  // 生成したtd要素をtr要素に追加
//     //   console.log(tr);
//     }
    
//     table.append(tr);
// }