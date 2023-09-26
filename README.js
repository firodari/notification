// قائمة بالرسائل العشوائية
const messages = [
    "رسالة عشوائية رقم 1",
    "رسالة عشوائية رقم 2",
    "رسالة عشوائية رقم 3",
    "رسالة عشوائية رقم 4",
    "رسالة عشوائية رقم 5"
];

// انتظر حتى يتم تحميل الصفحة بالكامل
document.addEventListener("DOMContentLoaded", function () {
    // انشئ متغيراً للعنصر الذي يحتوي على الرسالة
    var messageElement = document.querySelector(".bottom-message");

    // عرض الرسائل بشكل دوري
    let currentIndex = 0;
    setInterval(function () {
        if (currentIndex === messages.length) {
            currentIndex = 0;
        }
        messageElement.textContent = messages[currentIndex];
        messageElement.classList.add("message-visible");
        setTimeout(function () {
            messageElement.classList.remove("message-visible");
        }, 3000); // عرض الرسالة لمدة 3 ثواني
        currentIndex++;
    }, 4000); // تبديل الرسائل كل 4 ثواني
});
