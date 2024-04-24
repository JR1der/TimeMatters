const container = document.getElementById("number-container")

container.onmousedown = function (event) {

    let shiftX = event.clientX - container.getBoundingClientRect().left;
    let shiftY = event.clientY - container.getBoundingClientRect().top;

    container.style.position = 'absolute';
    container.style.zIndex = 1000;
    document.body.append(container);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        container.style.left = pageX - shiftX + 'px';
        container.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    container.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        container.onmouseup = null;
    };

};

container.ondragstart = function () {
    return false;
};