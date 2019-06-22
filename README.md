# Flashback

Flashback is a Pomodoro-timer browser extension created as a way for me to familiarize myself with browser extensions.

# Chrome Extensions FAQ

## What is a `content` script?
A content script is a piece of JavaScript code (which can also include and reference CSS) that runs after the page loads. It has full access to the DOM so you can do things like alter content, styles, layout, images, anything that is on the page. The manifest.json file should reference your content script.

## Notes and other useful things

The [Manifest File Format](https://developer.chrome.com/extensions/manifest) page is super useful. 