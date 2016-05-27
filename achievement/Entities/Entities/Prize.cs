using Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Entities
{
    public class Prize: Item
    {
        public List<Achievement> AchivementsSet { get; set; }
        public bool IsCompleted { get; set; }
    }
}
