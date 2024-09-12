const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let userStatus = {
    "user1": null,
    "user2": null,
    "user3": null,
    "user4": null
};

// GET isteği - Kullanıcıların durumu
app.get('/status', (req, res) => {
    res.json(userStatus);


// POST isteği - Kullanıcı durumunu güncelleme
app.post('/status', (req, res) => {
    const { user, status } = req.body;
    if (userStatus[user] !== undefined) {
        userStatus[user] = status;
        res.json({ message: 'Durum güncellendi', userStatus });
    } else {
        res.status(400).json({ message: 'Geçersiz kullanıcı' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

});
