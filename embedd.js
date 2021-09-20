(function (srcURL, glassConfig) {
    window.GLASS = [glassConfig, new Date()];       // Config, visit start time
    glassScript = document.createElement("script");
    firstScript = document.getElementsByTagName("script")[0];
    glassScript.async = 1;
    glassScript.srcURL = srcURL;
    firstScript.parentNode.insertBefore(glassScript, firstScript);
})("https://static.glass-api.deno.dev/glass-client.bundle.min.js", {});


(function (window, document, tag, srcURL, fName, a, m) {
    window.GoogleAnalyticsObject = fName;
    window[fName] = window[fName] || function () {
        (window[fName].q = window[fName].q || []).push(arguments);
    }, window[fName].l = 1 * new Date;
    a = document.createElement("script"), 
    m = document.getElementsByTagName("script")[0];
    a.async = 1;
    a.src = srcURL;
    m.parentNode.insertBefore(a, m);
}(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga"));

