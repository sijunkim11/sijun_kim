document.addEventListener("DOMContentLoaded", () => {
    console.log("NAIF SHOP loaded!");

    // 📌 1️⃣ TYPE-A, TYPE-B, TYPE-C 클릭 시 경고창 띄우기
    document.getElementById("warningA").addEventListener("click", () => {
        alert("⚠️ Attention ! Une situation défavorable pourrait vous arriver. Soyez prudent !");
    });

    document.getElementById("warningB").addEventListener("click", () => {
        alert("⚠️ Soyez vigilant ! Vous pourriez rencontrer des difficultés imprévues.");
    });

    document.getElementById("warningC").addEventListener("click", () => {
        alert("⚠️ Prenez garde ! Une erreur pourrait survenir si vous continuez.");
    });

    // 📌 2️⃣ 배경음악 ON/OFF 기능 추가
    const music = document.getElementById("backgroundMusic");
    const toggleMusic = document.getElementById("toggleMusic");

    let isMusicPlaying = false; // 음악 상태 저장
    // music.play();
    // music.pause();
    toggleMusic.addEventListener("click", () => {
        // console.log("누름");
        if (isMusicPlaying) {
            music.pause(); // 음악 정지
            toggleMusic.textContent = "음악 켜기";
        } else {
            music.muted = false; // 음소거 해제
            music.play().catch(error => console.log("음악 재생 오류:", error)); // 오류 감지
            toggleMusic.textContent = "음악 끄기";
        }
        isMusicPlaying = !isMusicPlaying;
    });
});
