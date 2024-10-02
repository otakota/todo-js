import "./styles.css";

const onClickAdd = () => {
  //document.getElementById()で指定したIdから.valueで取得
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //liの生成
  const li = document.createElement("li");
  //divの生成
  const div = document.createElement("div");
  div.className = "list-row";
  //pの生成
  const p = document.createElement("p");
  p.className = "todo-items";
  p.innerText = inputText;

  //子要素の設定
  div.appendChild(p);
  li.appendChild(div);

  //リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
