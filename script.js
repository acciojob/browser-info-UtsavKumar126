//your JS code here. If required.

// Get browser information from the navigator object
        const browserName = navigator.appName;
        const browserVersion = navigator.appVersion;

        // Display the browser information in the specified format
        const browserInfoMessage = "You are using " + browserName + " version " + browserVersion;

        // Add the message to the "browser-info" div
        const browserInfoDiv = document.getElementById("browser-info");
        browserInfoDiv.textContent = browserInfoMessage;