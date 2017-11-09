using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace mathema_lucy_mulheresdocafe.Domain.Entities.Geral
{
	[Table("mathema_lucy_mulheresdocafe_Login")]
	public class LoginModels
	{
		[Key]
		public int LoginId { get; set; }
		public string Nome { get; set; }


	}
}
