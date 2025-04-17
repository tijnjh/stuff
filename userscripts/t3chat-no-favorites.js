// ==UserScript==
// @name        no-favorites
// @namespace   Violentmonkey Scripts
// @match       https://t3.chat/chat/*
// @grant       none
// @version     1.0
// @author      tijn.dev
// @description Remove favorite model functionality from t3 chat and always show all models
// ==/UserScript==

window.onload = () => {
  localStorage["model-visibility"] = "[]"

  const elOpenButton = document.getElementById("radix-:r9:");
  if (!elOpenButton) return;

  elOpenButton.onclick = () => {
    const elPopover = document.getElementById("radix-:ra:");
    if (!elPopover) return;

    const elShowAllButton = elPopover.querySelector("button.text-muted-foreground");
    if (!elShowAllButton) return;


    if (elShowAllButton.textContent.trim().toLowerCase() === "show all") {
      elShowAllButton.click();
    }

    elShowAllButton.remove();

    elPopover.querySelector(".-mb-2.ml-2.mt-1.w-full.select-none.text-color-heading").textContent = "All models";
  }
};
