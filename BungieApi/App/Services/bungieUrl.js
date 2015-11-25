services.factory("bungieUrlSvc", function () {

    function replace(url, valueToReplace, newValue) {
        if (!angular.isUndefined(newValue)) {
            return url.replace(valueToReplace, newValue);
        }
        return url;
    }
    function createRequest(url) {
        var request = {
            Url: encodeURI(url)
        }
        return request;
    }

    return {
        getBungieUserPlatformParameters: function(membershipId, membershipType, bungieId, search, searchPage) {
            return {
                MembershipId: membershipId,
                MembershipType: membershipType,
                BungieId: bungieId,
                Search: search,
                SearchPage: searchPage
            }
        },
        formatUrlWithParameters: function (parameters, formattedUrl) {
            if (!angular.isUndefined(parameters)) {

                formattedUrl = replace(formattedUrl, BUNGIE_PARAM_MEMBERSHIP_ID, parameters.MembershipId);
                formattedUrl = replace(formattedUrl, BUNGIE_PARAM_MEMBERSHIP_TYPE, parameters.MembershipType);
                formattedUrl = replace(formattedUrl, BUNGIE_PARAM_BUNGIE_ID, parameters.BungieId);
                formattedUrl = replace(formattedUrl, BUNGIE_PARAM_SEARCH, parameters.Search);
                formattedUrl = replace(formattedUrl, BUNGIE_PARAM_SEARCH_PAGE, parameters.SearchPage);
                formattedUrl = replace(formattedUrl, BUNGIE_PARAM_CHARACTER_ID, parameters.CharacterId);
                formattedUrl = replace(formattedUrl, BUNGIE_PARAM_MANIFEST_TYPE, parameters.ManifestType);
                formattedUrl = replace(formattedUrl, BUNGIE_PARAM_MANIFEST_ID, parameters.ManifestId);
                formattedUrl = replace(formattedUrl, BUNGIE_PARAM_ITEM_ID, parameters.ItemId);
                formattedUrl = replace(formattedUrl, BUNGIE_PARAM_ACTIVITY_ID, parameters.ActivityId);

            }
            return createRequest(formattedUrl);

        }
    }
});