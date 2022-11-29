var renderTime = function () {
    var time = new Date();
    clock.textContent = time.toLocaleTimeString('en-US');
};

// Update the time every second
setInterval(renderTime, 1000);