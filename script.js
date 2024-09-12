// Kullanıcı durumu güncelleme fonksiyonu
async function updateUserStatus(user, status) {
    const response = await fetch('https://afcngym06.glitch.me/status', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user, status })
    });
    const result = await response.json();
    console.log(result);
}

// Butonlara event listener ekleyelim
document.querySelectorAll('.status-yes').forEach(button => {
    button.addEventListener('click', () => {
        const user = button.dataset.user;  // Kullanıcıyı belirlemek için
        updateUserStatus(user, true);      // Kullanıcının geleceğini belirten istek gönder
    });
});

document.querySelectorAll('.status-no').forEach(button => {
    button.addEventListener('click', () => {
        const user = button.dataset.user;  // Kullanıcıyı belirlemek için
        updateUserStatus(user, false);     // Kullanıcının gelemeyeceğini belirten istek gönder
    });
});
