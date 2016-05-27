using Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Achievements.Dal.Helpers
{
    public static class AchievementHelper
    {
        public static Dictionary<string, object> SetAchievementInsertParameters(Achievement item)
        {           

            Dictionary<string, object> parameters = new Dictionary<string, object>{
                        {"Name", item.Name},
                        {"Description", item.Description},
                        {"Image", item.Image},
                        {"IsActive", item.IsActive},
                        {"PrizeSetIndex", item.PrizeSetIndex},
                        {"PrizeSetId", item.PrizeSetId}
                     };

            return parameters;
        }
    }
}
