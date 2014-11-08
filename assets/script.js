(function ($) {
    $(document).on('leaflet.map', function (e, settings, lMap) {
        if (settings.plugins.zoomfs) {
            var container = lMap.getContainer();
            var height = $(container).css('height');

            // Create and attach zoomfs control.
            var zoomFS = new L.Control.ZoomFS();
            lMap.addControl(zoomFS);

            lMap.on('enterFullscreen', function () {
                // Make sure we are above drupal navbar elements (z-index 502).
                $(container).css('z-index', 600);
            });
            lMap.on('exitFullscreen', function () {
                // Restore height on exit.
                $(container).css('height', height);
            });
        }
    });
})(jQuery);
