document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.frame');
    const tagsContainer = document.querySelector('.tags_box');
    const leftArrow = document.querySelector('.scroll_arrow.left');
    const rightArrow = document.querySelector('.scroll_arrow.right');
    const scrollStep = 20;

    leftArrow.addEventListener('click', () => {
        container.scrollLeft -= scrollStep;
    });

    rightArrow.addEventListener('click', () => {
        container.scrollLeft += scrollStep;
    });

    function checkArrowsVisibility() {
        leftArrow.style.opacity = container.scrollLeft > 0 ? 1 : 0;
        rightArrow.style.opacity =
            container.scrollLeft + container.clientWidth < tagsContainer.clientWidth
                ? 1
                : 0;
    }

    checkArrowsVisibility();

    container.addEventListener('scroll', () => {
        checkArrowsVisibility();
    });
});
