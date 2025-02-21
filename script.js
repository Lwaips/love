let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");

let clickCount = 0;  // 记录点击 No 的次数

// No 按钮的文字变化
const noTexts = [
    "？你认真的吗…", 
    "要不再想想？", 
    "不许选这个！ ", 
    "我会很伤心…", 
    "不行:(",
    "再考虑一下吧！",
    "再给我一次机会！",
    "我会等你的！",
    '我会一直等你的！',
    "答应我好不好",
    "我真的很喜欢你！"


];

// No 按钮点击事件
noButton.addEventListener("click", function() {
    clickCount++;

    // 让 Yes 变大，每次放大 2 倍
    let yesSize = 1 + (clickCount * 1.2);
    yesButton.style.transform = `scale(${yesSize})`;

    // 挤压 No 按钮，每次右移 100px
    let noOffset = clickCount * 50;
    noButton.style.transform = `translateX(${noOffset}px)`;

    // **新增：让图片和文字往上移动**
    let moveUp = clickCount * 25; // 每次上移 20px
    (document.getElementById("mainImage")).style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    // No 文案变化（前 11 次变化）
    if (clickCount <= 11) {
        noButton.innerText = noTexts[clickCount - 1];
    }

    // 图片变化（前 6 次变化）
    if (clickCount === 1) (document.getElementById("mainImage")).src ="F:/工作区/tang-love/images/shocked.png";
    if (clickCount === 2) (document.getElementById("mainImage")).src = "F:/工作区/tang-love/images/think.png";
    if (clickCount === 3) (document.getElementById("mainImage")).src = "F:/工作区/tang-love/images/angry.png";
    if (clickCount === 4) (document.getElementById("mainImage")).src = "F:/工作区/tang-love/images/crying.png";
    if (clickCount === 5) (document.getElementById("mainImage")).src = "F:/工作区/tang-love/images/crying.png";  // 2次变成哭泣
    if (clickCount === 6) (document.getElementById("mainImage")).src = "F:/工作区/tang-love/images/Screenshot.gif";

});

// Yes 按钮点击后，进入表白成功页面
yesButton.addEventListener("click", function() {
    document.body.innerHTML = `
        <div class="yes-page">
            <h1 class="yes-text">!!!我爱你!! 给我发微信吧</h1>
            <img src="F:/工作区/tang-love/images/hug.png" class="yes-image">
        </div>
    `;

    document.body.style.overflow = "hidden";
});