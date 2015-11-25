services.factory("bungieSvc", function ($log, apiSvc) {
    return {
        Get: function (formattedBungieApiUrl) {
            return apiSvc.httpPost("api/destiny/request", formattedBungieApiUrl);
        }
    }
});