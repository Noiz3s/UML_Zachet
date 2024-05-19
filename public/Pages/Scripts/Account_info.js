window.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/account');
        if (!response.ok) {
            throw new Error('Ошибка получения данных пользователя');
        }
        const userData = await response.json();
        displayUserInfo(userData);
    } catch (error) {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при загрузке данных пользователя');
    }
});

function displayUserInfo(userData) {
    const userInfoContainer = document.getElementById('userInfo');
    userInfoContainer.innerHTML = `
        <p><strong>ID:</strong> ${userData.id}</p>
        <p><strong>Email:</strong> ${userData.email}</p>
        <p><strong>Логин:</strong> ${userData.login}</p>
        <p><strong>Посты:</strong> ${userData.posts.map(post => post.title).join(', ')}</p>
    `;
}
