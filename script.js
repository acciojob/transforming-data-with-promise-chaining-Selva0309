//your JS code here. If required.
document.getElementById('btn').addEventListener('click', function() {
    const inputNumber = parseInt(document.getElementById('ip').value);

    const promise1 = new Promise((resolve) => {
        setTimeout(() => {
            resolve(inputNumber);
        }, 2000);
    });

    promise1
        .then((num) => {
            document.getElementById('output').textContent = 'Result: ' + num;
            return num;
        })
        .then((num) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(num * 2);
                }, 1000);
            });
        })
        .then((num) => {
            document.getElementById('output').textContent = 'Result: ' + num;
            return num;
        })
        .then((num) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(num - 3);
                }, 1000);
            });
        })
        .then((num) => {
            document.getElementById('output').textContent = 'Result: ' + num;
            return num;
        })
        .then((num) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(num / 2);
                }, 1000);
            });
        })
        .then((num) => {
            document.getElementById('output').textContent = 'Result: ' + num;
            return num;
        })
        .then((num) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(num + 10);
                }, 1000);
            });
        })
        .then((num) => {
            document.getElementById('output').textContent = 'Final Result: ' + num;
        });
});