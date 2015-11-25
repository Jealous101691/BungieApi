services.factory("apiSvc", function ($http, $q) {

    function apiError(id, httpResponseCode, description) {
        this.id = id;
        this.httpResponseCode = httpResponseCode;
        this.description = description;
    }

    return {
        httpPost: function (url, data) {
            var deferred = $q.defer();
            $http({ method: 'POST', url: url, data: data }).
                success(function (svcResponse) {
                    deferred.resolve(svcResponse);
                }).
                error(function (errorData, httpResponseCode) {
                    deferred.reject(apiError(-1, httpResponseCode, errorData));
                });
            return deferred.promise;
        }
    };
});