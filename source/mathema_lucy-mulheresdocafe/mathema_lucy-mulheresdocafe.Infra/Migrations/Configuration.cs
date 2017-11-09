namespace mathema_lucy_mulheresdocafe.Infra.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<mathema_lucy_mulheresdocafe.Infra.Contexto.mathema_lucy_mulheresdocafeContexto>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(mathema_lucy_mulheresdocafe.Infra.Contexto.mathema_lucy_mulheresdocafeContexto context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data.
        }
    }
}
