import * as $ from 'jquery'

function createAnalytics() {
    let counter = 0;
    let isDestroyed = false;

    const increaseCounter = () => counter++;

    $(document).on('click', increaseCounter);

    return {
        destroy(){
            $(document).off('click', increaseCounter);
            isDestroyed = true;
        },
        getClicks(){
            if (isDestroyed) return 'Analytics is destroyed'
            return counter
        }
    }
}

window.analytics = createAnalytics();