import "./styles.css";

const ClickAddButton = () => {
  // 入力されたスケジュール情報を取得し、入力を初期化する
  const scheduleTime = document.getElementById("schedule-time").value;
  const scheduleName = document.getElementById("schedule-name").value;
  document.getElementById("schedule-time").value = "";
  document.getElementById("schedule-name").value = "";

  // divタグを生成し、クラス名を付与する
  const div = document.createElement("div");
  div.className = "schedule-element";

  // liタグを生成し、時間とスケジュール名を挿入する
  const li = document.createElement("li");
  li.innerText = `${scheduleTime}　から 「${scheduleName}」`;

  // 削除ボタンを生成し、ボタンを押したときの動作を定義する
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 削除するスケジュールのdiv要素を取り出して削除する
    const deletePosition = deleteButton.parentNode;
    document.getElementById("schedule-list").removeChild(deletePosition);
  });

  // スケジュールを一つ上に移動させるボタンを生成し、ボタンを押したときの動作を定義する
  const upButton = document.createElement("button");
  upButton.innerText = "上へ";
  upButton.addEventListener("click", () => {
    // 移動させるスケジュールと、その上にあるスケジュールを取得する
    const upTarget = upButton.parentNode;
    const elementBeforeTarget = upButton.parentElement.previousElementSibling;

    // 上にまだスケジュールがあれば、移動させたいスケジュールを移動する
    if (elementBeforeTarget !== null) {
      elementBeforeTarget.before(upTarget);
    }
  });

  // スケジュールを一つ下に移動させるボタンを生成し、ボタンを押したときの動作を定義する
  const downButton = document.createElement("button");
  downButton.innerText = "下へ";
  downButton.addEventListener("click", () => {
    // 移動させるスケジュールと、その下にあるスケジュールを取得する
    const downTarget = downButton.parentNode;
    const elementAfterTarget = downButton.parentElement.nextElementSibling;

    // 下にまだスケジュールがあれば、移動させたいスケジュールを移動する
    if (elementAfterTarget !== null) {
      elementAfterTarget.after(downTarget);
    }
  });

  // 生成したタグを組み合わせて、一つのスケジュールを生成する
  div.appendChild(li);
  div.appendChild(deleteButton);
  div.appendChild(upButton);
  div.appendChild(downButton);

  // 生成したスケジュールをhtmlに組み込む
  document.getElementById("schedule-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => ClickAddButton());
