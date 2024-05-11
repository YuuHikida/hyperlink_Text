// 'use strict';

//項目を保存する用
const items=[];
//submitボタン指定子カウント変数
let countnum = 0;
// 登録ボタン
const submit = document.getElementById('submit'+countnum);

/*連想配列を入れる配列作って配列に入れ込む用*/
const memoList = [];

// //ストレージ登録用
const storage = localStorage;
let list = [];


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
        
        items.push(item.itemInput);
        listConv(itemInput.value,contentTextarea.value);
        console.log(memoList);
    }
    else
    {
        ///保存できなかった入力フォームをリセット(項目名)
        resetform(itemInput,contentTextarea);
    }
    //配列に項目要素だけを要素を追加

});

function listConv(itemInput,contentTextarea)
{
    //連想配列（保存してハイパーリンク探索用）ß
    //連想配列へ要素を追加
    const memo = {
        item:itemInput,
        content:contentTextarea,
        hyperProcess:function()
        {
            //ここにハイパーリンクを埋め込む処理
            listSerch(this.content);
        }
    };
    //連想配列を配列用に変換
    memo.hyperProcess();
    memoList.push(memo);
}

function listSerch(content)
{
    const index = items.indexOf(content);
    //配列内捜査
    if( index !== -1)
    {
        console.log(index);
        //文字を入れ替える(今は色を変える処理)
        content = content.replace(new RegExp(items[index], 'g'), `<span style="color: red;">${content}</span>`);
        // content = content.replace(new RegExp(items[index], 'g'), `<span style="color: ${red};">${targetText}</span>`);
        //htmlから対象タグを取得
        //console.log(content);
        //変更
    }
        
}
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
    //項目が一致している場合はリターン(後で修正)
    for(let i = 0; i <items.length;i++)
     {
        if( item.itemInput == items[i])
        {
            window.alert('同じ項目名が既に存在しています');
            return false;
        }
    }
    if (item.itemInput != '' && item.contentTextarea != '') {
        return true;
    } else {
        window.alert('項目名または内容が空白です');
        return false; 
    }
    
}

// // フォームをリセット
function resetform(itemInput,contentTextarea)
{
    itemInput.value = '';
    contentTextarea.value = '';
};

// フォームの追加
function addform() {
    countnum++;

    // input要素を作成
    const inputElement = document.createElement('input');
    inputElement.type = 'text'; // type属性を追加
    inputElement.value = '';
    inputElement.id = 'item'+ countnum;
    inputElement.placeholder = '項目'; // プレースホルダーを設定

    // input要素をラベルでラップ
    const labelA = document.createElement('label');
    labelA.textContent = '項目: '; // ラベルのテキストを設定 
    labelA.appendChild(inputElement); // input要素をラベルに追加

    // 改行要素を作成
    const brTag1 = document.createElement('br');
    const brTag2 = document.createElement('br');
    const brTag3 = document.createElement('br');
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

    // フォームの後に改行要素を追加
    formContainer.appendChild(brTag1);

    // フォーム要素を追加
    formContainer.appendChild(labelA);
    formContainer.appendChild(brTag2); // 改行要素を追加
    formContainer.appendChild(labelB);
    formContainer.appendChild(brTag3);

    // ボタン作成
    const newButton = document.createElement('button');
    newButton.type = 'button'; // type属性を追加
    newButton.id = 'submit' + countnum;
    newButton.textContent = '登録'; // ボタンのテキストを設定
    // 新たな登録ボタンにイベントリスナーを追加
    newButton.addEventListener('click',()=>{
        const item = {};
        // 項目と内容の要素を取得する
        const itemInput = document.getElementById('item'+countnum);
        const contentTextarea = document.getElementById('content'+countnum);
        item.itemInput = itemInput.value;
        item.contentTextarea = contentTextarea.value;

        if(checkform(item)) {
            addform();
            items.push(item.itemInput);
            listConv(itemInput.value,contentTextarea.value);
            console.log(memoList);
        } else {
            resetform(itemInput,contentTextarea);
        }
    });
    
    // ボタンをフォームの直後に追加
    formContainer.appendChild(newButton);
}
