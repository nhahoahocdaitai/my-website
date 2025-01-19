// script.js

// Xử lý nộp bài kiểm tra
document.getElementById('quizForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Ngừng hành động mặc định của form

    let score = 0;
    // Lấy giá trị trả lời từ các câu hỏi
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');

    // Kiểm tra câu trả lời và tính điểm
    if (q1 && q1.value === 'A') score++;
    if (q2 && q2.value === 'B') score++;

    // Lưu kết quả và chuyển đến trang kết quả
    localStorage.setItem('score', score);
    location.href = 'result.html';
});

// Hiển thị kết quả khi vào trang kết quả
window.onload = function() {
    const result = localStorage.getItem('score');
    if (result !== null) {
        document.getElementById('result').textContent = `Bạn đã trả lời đúng ${result} câu!`;
    }
};
