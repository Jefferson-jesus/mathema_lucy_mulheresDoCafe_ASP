using mathema_lucy_mulheresdocafe.Domain.Interfaces.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace mathema_lucy_mulheresdocafe.Infra.Repositories
{
	public class RepositoryBase<TEntity> : IDisposable, IRepositoryBase<TEntity> where TEntity : class
	{
		public void Add(TEntity obj)
		{
			throw new NotImplementedException();
		}

		public void Dispose()
		{
			throw new NotImplementedException();
		}

		public IEnumerable<TEntity> GetAll()
		{
			throw new NotImplementedException();
		}

		public TEntity GetById(int Id)
		{
			throw new NotImplementedException();
		}

		public void Remove(TEntity obj)
		{
			throw new NotImplementedException();
		}

		public void Update(TEntity obj)
		{
			throw new NotImplementedException();
		}
	}
}
