/* Javascript for pdfXBlock. */
function pdfXBlockInitView(runtime, element) {
    // Ensure element is the jQuery object
    if (element.innerHTML) {
        element = $(element);
    }

    // Function to call the handler method to emit completion
    function emitCompletion() {
        var handlerUrl = runtime.handlerUrl(element, 'emit_completion_handler');
        $.post(handlerUrl, '{}', function(response) {
            console.log('Completion event emitted:', response);
        });
    }

    // Initialize a variable to track time spent and interval
    var timeSpent = 0;
    var interval;

    // Function to start a timer that increments time spent every second
    function startTimer() {
        interval = setInterval(function () {
            timeSpent += 1; // Increment time spent every second
            if (timeSpent >= 5) {
                // If 5 seconds have passed, emit completion event
                emitCompletion();
                clearInterval(interval); // Stop the timer
            }
        }, 1000); // Run every second (1000 milliseconds)
    }

    // Check if the XBlock is being viewed in the LMS student view
    if (!window.location.href.includes('studio')) {
        // Only start the timer in LMS student view
        startTimer();
    }

    // Bind event handler for PDF download button click
    $(function () {
        element.find('.pdf-download-button').on('click', function () {
            var handlerUrl = runtime.handlerUrl(element, 'on_download');
            $.post(handlerUrl, '{}');
        });
    });
}

