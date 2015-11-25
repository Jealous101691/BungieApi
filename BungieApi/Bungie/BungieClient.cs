using System;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;

namespace BungieApi.Bungie
{
    public class BungieClient
    {
        private const string PsnOauthBaseUrl = "https://auth.api.sonyentertainmentnetwork.com/";
        private const string BungieBaseUrl = "https://www.bungie.net";
        private const string BungieAuthComplete = "/en/User/SignIn/Psnid?auth=complete";
        private const string BungieGenericApiKey = "892d8d550e884dafb4e3ffb3a0af7050";

        public BungieClient( )
        {
            var cookies = new CookieContainer( );


            var handler = new HttpClientHandler { CookieContainer = cookies };
            Client = new HttpClient( handler ) { BaseAddress = new Uri( PsnOauthBaseUrl ) };
            Client.DefaultRequestHeaders.AcceptEncoding.Add( new StringWithQualityHeaderValue( "gzip" ) );
            Client.DefaultRequestHeaders.AcceptEncoding.Add( new StringWithQualityHeaderValue( "deflate" ) );
            Client.DefaultRequestHeaders.AcceptEncoding.Add( new StringWithQualityHeaderValue( "sdch" ) );
            Client.DefaultRequestHeaders.Add( "Accept-Language", "en-GB,en-US;q=0.8,en;q=0.6" );
            Client.DefaultRequestHeaders.Host = "auth.api.sonyentertainmentnetwork.com";
            Client.DefaultRequestHeaders.ExpectContinue = false;
            Client.DefaultRequestHeaders.Add( "Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8" );
            Client.DefaultRequestHeaders.Add( "User-Agent", "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36" );

            var bungieCookies = cookies.GetCookies( new Uri( BungieBaseUrl ) );
            var xcsrfValue = "";
            foreach( Cookie ck in bungieCookies )
            {
                if( ck.Name == "bungled" )
                    xcsrfValue = ck.Value;
            }

            Client = new HttpClient( handler ) { BaseAddress = new Uri( BungieBaseUrl ) };
            Client.GetAsync( BungieAuthComplete ).Wait( );
            Client.GetAsync( "/" ).Wait( );
            Client.DefaultRequestHeaders.Add( "X-API-Key", BungieGenericApiKey );
            Client.DefaultRequestHeaders.Add( "Accept", "application/json" );
            Client.DefaultRequestHeaders.Add( "x-csrf", xcsrfValue );
        }

        public HttpClient Client { get; }
    }
}
