function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
};

function keyHandler(event) {
    if (!(event.metaKey && event.key === 'Enter')) {
        event.stopPropagation();
    }
}

(async () => {
    var input = null;
    while (1) {
        try {
            input = document.getElementsByClassName('cib-serp-main')[0].shadowRoot.getElementById("cib-action-bar-main").shadowRoot.getElementById('searchbox');

            if (input) {
                input.addEventListener("keydown", event => keyHandler(event), true);
                input.addEventListener("keyup", event => keyHandler(event), true);
            }
            break;
        }
        catch (e) {
            await sleep(500);

        }
    }
})();
