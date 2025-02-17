const express = require('express');
const app = express();

// サーバーのポート番号（好きな番号に変更可）
const PORT = 3000;

// ルートURLにアクセスしたときの処理
app.get('/', (req, res) => {
    res.send('動画配信サーバーへようこそ！');
});

// サーバーを起動
app.listen(PORT, () => {
    console.log(`サーバーが http://localhost:${PORT} で起動しました！`);
});
