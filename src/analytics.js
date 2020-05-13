function createAnalytics() {
    let counter = 0;
    let isDestroyed = false;
    const increaseCounter = () => counter++;
    document.addEventListener('click', increaseCounter);
    return {
        destroy(){
            document.removeEventListener('click', increaseCounter);
            isDestroyed = true;
        },
        getClicks(){
            if (isDestroyed) return 'Analytics is destroyed'
            return counter
        }
    }
}

window.analytics = createAnalytics();