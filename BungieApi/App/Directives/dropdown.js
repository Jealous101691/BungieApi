directives.directive("myDropdown", function() {
    return {
        restrict: "A",
        scope: {
            data: "=",
            title: "=",
            onSelectItem: '&',
            selectedItem: '='
        },
        templateUrl: "Views/Templates/dropdownDT.html",

        link: function (scope, elem, attrs) {
            scope.dataItems = [];
            scope.displayTitle = {};
            scope.selectedValue = {};

            scope.$watch('data', function (data) {
                scope.dataItems = data;
            });

            scope.$watch('title', function (data) {
                scope.displayTitle = data;
            });

            scope.$watch('value', function (data) {
                scope.selectedValue = data;
            });

            var onSelectItemHandler = scope.onSelectItem();
            scope.onItemSelected = function (dataItem) {
                scope.selectedItem = dataItem;
                onSelectItemHandler(dataItem);
            };
        }
    };
});