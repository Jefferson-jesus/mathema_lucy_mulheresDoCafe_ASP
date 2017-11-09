using mathema_lucy_mulheresdocafe.Domain.Entities.Geral;
using mathema_lucy_mulheresdocafe.Infra.EntityConfig;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace mathema_lucy_mulheresdocafe.Infra.Contexto
{
	public class mathema_lucy_mulheresdocafeContexto : DbContext
	{
		public mathema_lucy_mulheresdocafeContexto()
			:base("DefaultConnection")
		{ }

		public DbSet<LoginModels> Login { get; set; }


		protected override void OnModelCreating(DbModelBuilder modelBuilder)
		{
			modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
			modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>();
			modelBuilder.Conventions.Remove<ManyToManyCascadeDeleteConvention>();

			modelBuilder.Properties()
				.Where(s => s.Name == s.ReflectedType.Name + "Id")
				.Configure(p => p.IsKey());

			modelBuilder.Properties<string>()
			  .Configure(p => p.HasColumnType("varchar"));

			modelBuilder.Properties<string>()
				.Configure(p => p.HasMaxLength(100));

			modelBuilder.Configurations.Add(new LoginConfig());

			base.OnModelCreating(modelBuilder);
		}
	}
}
