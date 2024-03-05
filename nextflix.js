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


document.addEventListener("keyup", (event) => {
    // Make sure we pressed `Space`
    if (event.code != "Space" || event.shiftKey || event.altKey || event.ctrlKey || event.metaKey) {
        return;
    }

    // It's important to make sure we only click the weird center button, not the regular one.
    // Otherwise, we might mess with the functionality of clicking "Space" in general.
    // But since we specifically find the center button, we're ok.

    // Find the center button by looking for a "Play" button that is not a play-pause button.
    let playButton = document.querySelector("[aria-label='Play']:not([data-uia='control-play-pause-play'])");
    playButton?.click();

    // Alternatively, we can look for the center play button specifically using:
    // document.querySelector("[aria-label='Play'][data-uia='player-blocked-play']")
    // But I prefer the above as I don't have to worry about multiple types of center buttons.
});