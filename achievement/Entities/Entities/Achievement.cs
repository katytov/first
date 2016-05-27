using Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Entities
{
    public class Achievement: Item
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public bool IsActive { get; set; }
        public int PrizeSetIndex { get; set; }
        public int PrizeSetId { get; set; }
    }
}
