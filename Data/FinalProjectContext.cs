using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using FinalProject.Models;

namespace FinalProject.Data
{
    public class FinalProjectContext : DbContext
    {
        public FinalProjectContext (DbContextOptions<FinalProjectContext> options)
            : base(options)
        {
        }

        public DbSet<FinalProject.Models.Product> Product { get; set; }

        public DbSet<FinalProject.Models.Cars> Cars { get; set; }

        public DbSet<FinalProject.Models.Order> Order { get; set; }
    }
}
