/**
 * insert PWA manifest JSON
 */
const metaLink = document.createElement("link");
metaLink.setAttribute("rel", "manifest");
metaLink.setAttribute(
  "href",
  "https://raw.githubusercontent.com/nasoooor29/slack-pwa/main/pwa/pwa-manifest.json",
);
document.head.appendChild(metaLink);
