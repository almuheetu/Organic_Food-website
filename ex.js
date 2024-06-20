// script.js
document.addEventListener("DOMContentLoaded", () => {
    const startScanButton = document.getElementById("startScan");
    const retryButton = document.getElementById("retryButton");
    const cameraFeed = document.getElementById("cameraFeed");

    const screens = {
        screen1: document.getElementById("screen1"),
        screen2: document.getElementById("screen2"),
        screen3: document.getElementById("screen3"),
        screen4: document.getElementById("screen4"),
        screen5: document.getElementById("screen5"),
        screen6: document.getElementById("screen6"),
    };

    const result = document.getElementById("result");

    const showScreen = (screenId) => {
        for (let key in screens) {
            screens[key].style.display = key === screenId ? 'flex' : 'none';
        }
    };

    const fakeLoader = (nextScreen) => {
        setTimeout(() => {
            showScreen(nextScreen);
        }, 2000);
    };

    startScanButton.addEventListener("click", () => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                cameraFeed.srcObject = stream;
                showScreen('screen2');
                setTimeout(() => {
                    showScreen('screen3');
                    setTimeout(() => {
                        fakeLoader('screen5');
                        setTimeout(() => {
                            showScreen('screen6');
                            fakeLoader('screen6');
                            setTimeout(() => {
                                if (Math.random() > 0.5) {
                                    result.innerHTML = '<h2>Approved</h2><p>&#10004;</p>';
                                } else {
                                    result.innerHTML = '<h2>Not Approved</h2><p>&#10060;</p>';
                                    retryButton.style.display = 'block';
                                }
                                result.style.display = 'block';
                            }, 2000);
                        }, 2000);
                    }, 2000);
                }, 2000);
            })
            .catch((err) => {
                alert('Camera access denied: ' + err);
            });
    });

    retryButton.addEventListener("click", () => {
        result.innerHTML = '';
        retryButton.style.display = 'none';
        result.style.display = 'none';
        showScreen('screen1');
    });

    showScreen('screen1');
});
