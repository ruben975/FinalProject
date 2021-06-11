using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FinalProject.Models
{
    public class Product
    {
        public Guid Id { get; set; }
        public int Weight { get; set; }
        public int Length { get; set; }
        public int Thickness { get; set; }
        public int Price { get; set; } 
    }
}
