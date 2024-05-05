// 'use strict';

//項目を保存する用
const items=[];
//submitボタン指定子カウント変数
let countnum = 0;
// 登録ボタン
const submit = document.getElementById('submit'+countnum);

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
    // 項目と内容の要素を取得する
    const itemInput = document.getElementById('item'+countnum);
    const contentTextarea = document.getElementById('content'+countnum);
    item.itemInput = itemInput.value;
    item.contentTextarea = contentTextarea.value;

    // console.log(item);
    if(checkform(item))
    {
        //resetform();
        addform();
    }
    //配列に項目要素だけを要素を追加
    items.push(item.itemInput);
    console.log(items);

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

// フォームの追加
function addform() {
    
    countnum++;

    // input要素を作成
    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.value = '';
    inputElement.id = 'item'+ countnum;
    inputElement.placeholder = '項目'; // プレースホルダーを設定

    // input要素をラベルでラップ
    const labelA = document.createElement('label');
    labelA.textContent = '項目: '; // ラベルのテキストを設定    
    labelA.appendChild(inputElement); // input要素をラベルに追加


    // textarea要素を作成
    const textareaElement = document.createElement('textarea');
    textareaElement.value = '';
    textareaElement.placeholder = '内容'; // プレースホルダーを設定
    textareaElement.cols = '50'; // cols属性を設定
    textareaElement.id = 'content'+countnum;

    // textarea要素をラベルでラップ
    const labelB = document.createElement('label');
    labelB.textContent = '内容: '; // ラベルのテキストを設定
    labelB.appendChild(textareaElement); // textarea要素をラベルに追加

    // input要素とtextarea要素を追加するdiv要素を作成
    const formContainer = document.getElementById('input');
    formContainer.classList.add('center-text'); // クラスを追加
    formContainer.appendChild(labelA);
    formContainer.appendChild(document.createElement('br')); // <br> 要素を追加
    formContainer.appendChild(labelB);
    

    //ボタン作成
    const newButton = document.createElement('button');
    newButton.id = 'submit' + countnum;
    //新たな登録ボタンにイベントリスナーを追加
    newButton.addEventListener('click',()=>{
        ///ここに処理
        const item = {};
        // 項目と内容の要素を取得する
        const itemInput = document.getElementById('item'+countnum);
        const contentTextarea = document.getElementById('content'+countnum);
        item.itemInput = itemInput.value;
        console.log(item.itemInput);

        item.contentTextarea = contentTextarea.value;
    
        // console.log(item);
        if(checkform(item))
        {
            //resetform();
            addform();
        }
        //配列に項目要素だけを要素を追加
        items.push(item.itemInput);
        console.log(items);
    
    });
    formContainer.appendChild(newButton);

}


// // //フォームの追加
// function addform(item)
// {
//     const adderea = document.getElementById('main');
//     adderea.appendChild = document.createElement('input');
//     adderea.appendChild = document.createElement('textarea');
    
    

// }