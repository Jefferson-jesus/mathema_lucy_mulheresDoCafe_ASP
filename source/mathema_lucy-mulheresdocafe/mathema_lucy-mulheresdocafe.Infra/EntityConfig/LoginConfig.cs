using mathema_lucy_mulheresdocafe.Domain.Entities.Geral;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.Infrastructure.Annotations;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace mathema_lucy_mulheresdocafe.Infra.EntityConfig
{
	public class LoginConfig : EntityTypeConfiguration<LoginModels>
	{
		public LoginConfig()
		{
			HasKey(r => r.LoginId);

			Property(r => r.Nome)
				.IsRequired()
				.HasMaxLength(100)
				.HasColumnType("varchar")
				.HasColumnAnnotation("Index", new IndexAnnotation(
					new IndexAttribute { IsUnique = true }
				));

			ToTable("mulheresCafe_Login");
		}
	}
}
