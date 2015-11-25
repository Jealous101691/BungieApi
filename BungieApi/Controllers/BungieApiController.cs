using System.Security.Policy;
using System.Web.Http;
using BungieApi.Bungie;
using Newtonsoft.Json.Linq;

namespace BungieApi.Controllers
{
    public class BungieApiController : ApiController
    {
        private readonly BungieClient _client;

        public BungieApiController()
        {
            _client = new BungieClient( );
        }

        [Route("api/destiny/request")]
        [HttpPost]
        [HttpGet]
        public IHttpActionResult GetBungieRequest( [FromBody]DestinyRequest request )
        {
            if (request == null || request.Url == null)
            {
                return BadRequest("input was null.");
            }
            var data = _client.Client.GetAsync( request.Url ).Result.Content.ReadAsStringAsync( ).Result;
            JObject json = JObject.Parse( data );
            return Ok( json );
        }
    }

    public class DestinyRequest
    {
        public string Url { get; set; }
    }
}
