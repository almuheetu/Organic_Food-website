document.addEventListener('DOMContentLoaded', function () {
    const startScanBtn = document.getElementById('startScanBtn');
    const grantPermissionBtn = document.getElementById('grantPermissionBtn');
    const steps = document.querySelectorAll('.step');
    let currentStep = 0;

    function showStep(stepIndex) {
        steps.forEach((step, index) => {
            step.classList.toggle('active', index === stepIndex);
        });
        currentStep = stepIndex;
    }

    startScanBtn.addEventListener('click', function () {
        showStep(1); // Show Camera Permission step
    });

    grantPermissionBtn.addEventListener('click', function () {
        // Simulate camera permission granted
        showStep(2); // Show Instructions step
        setTimeout(() => {
            showStep(3); // Show Fake Loader step
            setTimeout(() => {
                showStep(2); // Retry with new instruction
                setTimeout(() => {
                    showStep(3); // Show Fake Loader again
                    setTimeout(() => {
                        // Simulate result
                        const isApproved = Math.random() > 0.5;
                        const resultElement = document.getElementById('result');
                        const resultIcon = document.getElementById('resultIcon');
                        if (isApproved) {
                            resultElement.textContent = 'Approved';
                            resultIcon.textContent = '✔️';
                            resultIcon.classList.add('approved');
                        } else {
                            resultElement.textContent = 'Not Approved';
                            resultIcon.textContent = '❌';
                            resultIcon.classList.add('not-approved');
                        }
                        showStep(4); // Show result step
                    }, 2000); // Simulate checking duration
                }, 2000); // Simulate instruction duration
            }, 2000); // Simulate checking duration
        }, 2000); // Simulate instruction duration
    });

    // Initialize with the first step
    showStep(0);
});
