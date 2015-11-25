using System;
using System.Net;
using System.Net.Http;

namespace BungieApi.Bungie
{
    public class BungieClient
    {
        private const string BungieBaseUrl = "https://www.bungie.net";
        private const string BungieGenericApiKey = "892d8d550e884dafb4e3ffb3a0af7050";

        public BungieClient( )
        {
            var cookies = new CookieContainer( );
            var handler = new HttpClientHandler { CookieContainer = cookies };

            Client = new HttpClient( handler ) { BaseAddress = new Uri( BungieBaseUrl ) };
            Client.DefaultRequestHeaders.Add( "X-API-Key", BungieGenericApiKey );
            Client.DefaultRequestHeaders.Add( "Accept", "application/json" );
        }

        public HttpClient Client { get; }
    }
}
