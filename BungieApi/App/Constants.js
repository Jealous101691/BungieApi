var BUNGIE_URL = "Http://www.bungie.net";

var BUNGIE_PLATFORM_USER = BUNGIE_URL + "/Platform/User";
var BUNGIE_PLATFORM_DESTINY = BUNGIE_URL + "/Platform/Destiny";

//List of bungie params that are used for find & replace inside api urls.
var BUNGIE_PARAM_MEMBERSHIP_ID = "{membershipId}";
var BUNGIE_PARAM_MEMBERSHIP_TYPE = "{membershipType}";
var BUNGIE_PARAM_BUNGIE_ID = "{bungieId}";
var BUNGIE_PARAM_SEARCH = "{search}";
var BUNGIE_PARAM_SEARCH_PAGE = "{searchPage}";
var BUNGIE_PARAM_CHARACTER_ID = "{characterId}";
var BUNGIE_PARAM_MANIFEST_TYPE = "{manifestType}";
var BUNGIE_PARAM_MANIFEST_ID = "{manifestId}";
var BUNGIE_PARAM_ITEM_ID = "{itemId}";
var BUNGIE_PARAM_ACTIVITY_ID = "{activityId}";


//All urls on the User Platform
var GET_AVAILABLE_THEMES = BUNGIE_PLATFORM_USER + "/GetAvailableThemes/";
var GET_BUNGIE_ACCOUNT = BUNGIE_PLATFORM_USER + "/GetBungieAccount/" + BUNGIE_PARAM_MEMBERSHIP_ID + "/" + BUNGIE_PARAM_MEMBERSHIP_TYPE + "/";
var GET_BUNGIE_NET_USER_BY_ID = BUNGIE_PLATFORM_USER + "/GetBungietNetUserById/" + BUNGIE_PARAM_BUNGIE_ID + "/";
var GET_USER_ALIASES_BY_ID = BUNGIE_PLATFORM_USER + "/GetUserAliases/" + BUNGIE_PARAM_BUNGIE_ID +"/";
var SEARCH_USERS = BUNGIE_PLATFORM_USER + "/SearchUsers/?q=" + BUNGIE_PARAM_SEARCH;
var SEARCH_USERS_PAGED = BUNGIE_PLATFORM_USER + "/SearchUsersPaged/" + BUNGIE_PARAM_SEARCH + "/" + BUNGIE_PARAM_SEARCH_PAGE + "/";

//All urls on the Destiny Platform
var ACCOUNT_SUMMARY = BUNGIE_PLATFORM_DESTINY + "/" + BUNGIE_PARAM_MEMBERSHIP_TYPE + "/Account/" + BUNGIE_PARAM_MEMBERSHIP_ID + "/Summary/";
var ACCOUNT_ITEMS = BUNGIE_PLATFORM_DESTINY + "/" + BUNGIE_PARAM_MEMBERSHIP_TYPE + "/Account/" + BUNGIE_PARAM_MEMBERSHIP_ID + "/Items/";
var ACCOUNT_STATS = BUNGIE_PLATFORM_DESTINY + "/Stats/Account/" + BUNGIE_PARAM_MEMBERSHIP_TYPE + "/" + BUNGIE_PARAM_MEMBERSHIP_ID + "/";
var ACCOUNT_TRIUMPHS = BUNGIE_PLATFORM_DESTINY + "/" + BUNGIE_PARAM_MEMBERSHIP_TYPE + "/Account/" + BUNGIE_PARAM_MEMBERSHIP_ID + "/Triumphs/";
var ACCOUNT_GRIMOIRE = BUNGIE_PLATFORM_DESTINY + "/Vanguard/Grimoire/" + BUNGIE_PARAM_MEMBERSHIP_TYPE + "/" + BUNGIE_PARAM_MEMBERSHIP_ID + "/";
var CHARACTER_ACTIVITIES = BUNGIE_PLATFORM_DESTINY + "/" + BUNGIE_PARAM_MEMBERSHIP_TYPE + "/Account/" + BUNGIE_PARAM_MEMBERSHIP_ID + "/Character/" + BUNGIE_PARAM_CHARACTER_ID + "/Activities/";
var CHARACTER_INVENTORY_SUMMARY = BUNGIE_PLATFORM_DESTINY + "/" + BUNGIE_PARAM_MEMBERSHIP_TYPE + "/Account/" + BUNGIE_PARAM_MEMBERSHIP_ID + "/Character/" + BUNGIE_PARAM_CHARACTER_ID + "/Inventory/Summary/";
var CHARACTER_ITEM_LOOKUP = BUNGIE_PLATFORM_DESTINY + "/" + BUNGIE_PARAM_MEMBERSHIP_TYPE + "/Account/" + BUNGIE_PARAM_MEMBERSHIP_ID + "/Character/" + BUNGIE_PARAM_CHARACTER_ID + "/Inventory/" + BUNGIE_PARAM_ITEM_ID + "/";
var CHARACTER_PROGRESSION = BUNGIE_PLATFORM_DESTINY + "/" + BUNGIE_PARAM_MEMBERSHIP_TYPE + "/Account/" + BUNGIE_PARAM_MEMBERSHIP_ID + "/Character/" + BUNGIE_PARAM_CHARACTER_ID + "/Progression/";
var CHARACTER_SUMMARY = BUNGIE_PLATFORM_DESTINY + "/" + BUNGIE_PARAM_MEMBERSHIP_TYPE + "/Account/" + BUNGIE_PARAM_MEMBERSHIP_ID + "/Character/" + BUNGIE_PARAM_CHARACTER_ID + "/";
var CHARACTER_STATS_ACTIVITY_HISTORY = BUNGIE_PLATFORM_DESTINY + "/Stats/ActivityHistory/" + BUNGIE_PARAM_MEMBERSHIP_TYPE + "/" + BUNGIE_PARAM_MEMBERSHIP_ID + "/" + BUNGIE_PARAM_CHARACTER_ID + "/";
var CHARACTER_UNIQUE_WEAPON_STATS = BUNGIE_PLATFORM_DESTINY + "/Stats/UniqueWeapons/" + BUNGIE_PARAM_MEMBERSHIP_TYPE + "/" + BUNGIE_PARAM_MEMBERSHIP_ID + "/" + BUNGIE_PARAM_CHARACTER_ID;
var CHARACTER_AGGREGATE_STATS = BUNGIE_PLATFORM_DESTINY + "/Stats/AggregateActivityStats/" + BUNGIE_PARAM_MEMBERSHIP_TYPE + "/" + BUNGIE_PARAM_MEMBERSHIP_ID + "/" + BUNGIE_PARAM_CHARACTER_ID + "/";
var EXPLORER_ITEMS = BUNGIE_PLATFORM_DESTINY + "/Explorer/Items";
var EXPLORER_TALENT_NODE = BUNGIE_PLATFORM_DESTINY + "/Explorer/TalentNodeSteps/";
var MANIFEST = BUNGIE_PLATFORM_DESTINY + "/Manifest/";
var MANIFEST_LOOKUP = BUNGIE_PLATFORM_DESTINY + "/Manifest/" + BUNGIE_PARAM_MANIFEST_TYPE + "/" + BUNGIE_PARAM_MANIFEST_ID + "/";
var VANGUARD_GRIMOIRE_DEFINITION = BUNGIE_PLATFORM_DESTINY + "/Vanguard/Grimoire/Definition/";
var STATS_DEFINITION = BUNGIE_PLATFORM_DESTINY + "/Stats/Definition/";
var STATS_POST_GAME_CARNAGE_REPORT = BUNGIE_PLATFORM_DESTINY + "/Stats/PostGameCarnageReport/" + BUNGIE_PARAM_ACTIVITY_ID + "/";
var SEARCH_MEMBERSHIP_ID = BUNGIE_PLATFORM_DESTINY + "/" + BUNGIE_PARAM_MEMBERSHIP_TYPE + "/Stats/GetMembershipIdByDisplayName/" + BUNGIE_PARAM_SEARCH;
var SEARCH_DESTINY_PLAYER = BUNGIE_PLATFORM_DESTINY + "/SearchDestinyPlayer/" + BUNGIE_PARAM_MEMBERSHIP_TYPE + "/" + BUNGIE_PARAM_SEARCH + "/";

//All urls on the Forum Platform


//Variable for use inside a dropdown to display the available API Calls.
var BUNGIE_API_CALLS = [
    { DisplayName: "Account Summary", Value: ACCOUNT_SUMMARY },
    { DisplayName: "Account Items", Value: ACCOUNT_ITEMS },
    { DisplayName: "Account Stats", Value: ACCOUNT_STATS },
    { DisplayName: "Account Triumphs", Value: ACCOUNT_TRIUMPHS },
    { DisplayName: "Account Grimoire", Value: ACCOUNT_GRIMOIRE },
    { DisplayName: "Bungie Account", Value: GET_BUNGIE_ACCOUNT },
    { DisplayName: "Bungie Net User", Value: GET_BUNGIE_NET_USER_BY_ID },
    { DisplayName: "Bungie Aliases", Value: GET_USER_ALIASES_BY_ID },
    { DisplayName: "Character Activities", Value: CHARACTER_ACTIVITIES },
    { DisplayName: "Character Inventory", Value: CHARACTER_INVENTORY_SUMMARY },
    { DisplayName: "Character Item Lookup", Value: CHARACTER_ITEM_LOOKUP },
    { DisplayName: "Character Progression", Value: CHARACTER_PROGRESSION },
    { DisplayName: "Character Summary", Value: CHARACTER_SUMMARY },
    { DisplayName: "Character Stats", Value: CHARACTER_STATS_ACTIVITY_HISTORY },
    { DisplayName: "Character Unique Weapon Stats", Value: CHARACTER_UNIQUE_WEAPON_STATS },
    { DisplayName: "Character Aggregate Stats", Value: CHARACTER_AGGREGATE_STATS },
    { DisplayName: "Explorer Items", Value: EXPLORER_ITEMS },
    { DisplayName: "Explorer Talent Node", Value: EXPLORER_TALENT_NODE },
    { DisplayName: "Grimoire Definition", Value: VANGUARD_GRIMOIRE_DEFINITION },
    { DisplayName: "Manifest", Value: MANIFEST },
    { DisplayName: "Manifest Lookup", Value: MANIFEST_LOOKUP },
    { DisplayName: "Search Users", Value: SEARCH_USERS },
    { DisplayName: "Search Users Paged", Value: SEARCH_USERS_PAGED },
    { DisplayName: "Search Membership Id", Value: SEARCH_MEMBERSHIP_ID },
    { DisplayName: "Search Destiny Player", Value: SEARCH_DESTINY_PLAYER },
    { DisplayName: "Stats Definition", Value: STATS_DEFINITION },
    { DisplayName: "Stats Post Game Carnage Report", Value: STATS_POST_GAME_CARNAGE_REPORT },
    { DisplayName: "Themes", Value: GET_AVAILABLE_THEMES }
];
