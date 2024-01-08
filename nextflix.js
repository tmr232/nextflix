document.addEventListener("keyup", (event) => {
    // Make sure we pressed `n`
    if (event.code != "KeyN" || !event.shiftKey || event.altKey || event.ctrlKey || event.metaKey) {
        return;
    }

    // Press Ctrl to focus the controls
    document.dispatchEvent(new Event("keydown", {code:"Control"}));
    document.dispatchEvent(new Event("keyup", {code:"Control"}));
    

    // Get the "next" button and click it
    let nextButton = document.querySelector('[data-uia="next-episode-seamless-button"]') ??
                     document.querySelector('[data-uia="control-next"]');
    nextButton.click();
});