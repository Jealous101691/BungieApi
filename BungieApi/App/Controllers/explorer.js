controllers.controller("explorerCtrl", function ($scope, $log, bungieUrlSvc, bungieSvc) {

    $scope.BungieApiCalls = BUNGIE_API_CALLS;       //scope variable used in dropdown for available API Calls

    $scope.parameter = {
        MembershipId: "4611686018429358229",
        MembershipType: "2",
        BungieId: "6657009",
        Search: "Jealous101691",
        SearchPage: "1",
        CharacterId: "2305843009215222579",
        ManifestType: "",
        ManifestId: "",
        ItemId: "",
        ActivityId: ""
    }

    $scope.apiCallSelected = function (selectedItem) {
        $scope.SelectedApiCall = selectedItem;

        if (selectedItem) {
            $scope.FormattedUrl = bungieUrlSvc.formatUrlWithParameters($scope.parameter, selectedItem.Value);
            bungieSvc.Get($scope.FormattedUrl).then($scope.formatResults, $scope.formatResults);
        } else {
            $scope.FormattedUrl = null;
            $scope.formatResults(null);
        }

    };

    $scope.parametersToggle = function () {
        var current = $("#parametersIcon").attr("class");
        if (current === "glyphicon glyphicon-chevron-down") {
            $("#parametersIcon").removeClass("glyphicon-chevron-down");
            $("#parametersIcon").addClass("glyphicon-chevron-left");
        } else if (current === "glyphicon-chevron-left") {
            $("#parametersIcon").removeClass("glyphicon-chevron-left");
            $("#parametersIcon").addClass("glyphicon-chevron-down");
        } else {
            $("#parametersIcon").removeClass();
            $("#parametersIcon").addClass("glyphicon glyphicon-chevron-down");
        }
    };

    $scope.formatResults = function(results) {
        var node = new PrettyJSON.view.Node({
            el: $('#elem'),
            data: results
        });
    };
});