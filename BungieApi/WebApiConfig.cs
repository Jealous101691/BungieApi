using System.Web.Http;
using System.Web.Routing;

namespace BungieApi
{
    internal class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            config.Routes.MapHttpRoute(
                name: "Web API RPC",
                routeTemplate: "api/{controller}/{action}",
                defaults: new { },
                constraints: new { action = @"[A-Za-z]+", httpMethod = new HttpMethodConstraint("GET") }
            );
        }
    }
}