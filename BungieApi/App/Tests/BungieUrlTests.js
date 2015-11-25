/// <reference path="~/Scripts/jasmine/jasmine.js"/>
/// <reference path="~/Scripts/angular.js"/>
/// <reference path="~/Scripts/angular-mocks.js"/>

/// <reference path="~/App/App.js"/>
/// <reference path="~/App/Constants.js" />
/// <reference path="~/App/Services/bungieUrl.js" />

describe('services', function () {

    beforeEach(module("services"));

    describe("Bungie Url Service", function () {

        var bungieUrlSvc;

        var sampleParameterObject = {
            MembershipId: 1,
            MembershipType: 2,
            BungieId: 12,
            Search: "DisplayNameSearch",
            SearchPage: 0
        }

        beforeEach(inject(function ($injector) {
            bungieUrlSvc = $injector.get('bungieUrlSvc');
        }));

        it('Get Bungie Parameter Object', function () {
            var results = bungieUrlSvc.getBungieUserPlatformParameters(1, 2, 12, "DisplayNameSearch", 0);
            expect(results).toEqual(sampleParameterObject);
        });

        it('Format Bungie URL for GET_AVAILABLE_THEMES', function () {
            var results = bungieUrlSvc.formatUrlWithParameters(sampleParameterObject, GET_AVAILABLE_THEMES);
            expect(results).toBe("Http://www.bungie.net/Platform/User/GetAvailableThemes/");
        });

        it('Format Bungie URL for GET_BUNGIE_ACCOUNT', function () {
            var results = bungieUrlSvc.formatUrlWithParameters(sampleParameterObject, GET_BUNGIE_ACCOUNT);
            expect(results).toBe("Http://www.bungie.net/Platform/User/GetBungieAccount/1/2/");
        });

        it('Format Bungie URL for GET_BUNGIE_NET_USER_BY_ID', function () {
            var results = bungieUrlSvc.formatUrlWithParameters(sampleParameterObject, GET_BUNGIE_NET_USER_BY_ID);
            expect(results).toBe("Http://www.bungie.net/Platform/User/GetBungietNetUserById/12/");
        });

        it('Format Bungie URL for SEARCH_USERS_PAGED', function () {
            var results = bungieUrlSvc.formatUrlWithParameters(sampleParameterObject, SEARCH_USERS_PAGED);
            expect(results).toBe("Http://www.bungie.net/Platform/User/SearchUsersPaged/DisplayNameSearch/0/");
        });
    });
});