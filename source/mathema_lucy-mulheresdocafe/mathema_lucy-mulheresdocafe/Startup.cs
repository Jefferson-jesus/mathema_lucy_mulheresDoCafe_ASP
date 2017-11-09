using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(mathema_lucy_mulheresdocafe.Startup))]
namespace mathema_lucy_mulheresdocafe
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
