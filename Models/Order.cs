using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FinalProject.Models
{
    public class Order
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public Guid CarId { get; set; }
        public int Price { get; set; }
        public int Telefon { get; set; }
        public string Adress { get; set; }

    }
}
