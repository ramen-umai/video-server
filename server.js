const express = require('express');
const app = express();
const path = require('path');

// 静的ファイルを提供する
app.use(express.static(path.join(__dirname, 'public')));

// ルートにアクセスしたときにindex.htmlを表示
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// サーバー起動
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
