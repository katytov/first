using Achievements.Dal.Helpers;
using Entities.Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Achievements.Dal
{
    public static class AchievementsDal
    {
        private const string stpGetUserPrizes = "stpGetUserPrizesGT";
        private const string stpInsertAchievement = "stpInsertAchievementTS";
        


        public static DataTable GetPrizesForUser(int userId)
        {
            Dictionary<string, object> parameters = new Dictionary<string, object>{
            {
                "UserId", userId}
            };
            DataSet ds = DbBasic.GetData(stpGetUserPrizes, parameters);
            if (ds != null && ds.Tables != null && ds.Tables.Count > 0)
                return ds.Tables[0];

            return null;

        }

        public static bool InsertAchievements(List<Achievement> items)
        {
            bool res = false;
            try
            {
                if (items == null || items.Count == 0)
                    throw new Exception("Achievement list is emapty"); ;
                if (items.Count == 1)
                {
                    Achievement item = items[0];
                    Dictionary<string, object> parameters = AchievementHelper.SetAchievementInsertParameters(item);

                    DbBasic.UpdateData(stpInsertAchievement, parameters);
                }
                else {
                    List<Dictionary<string, object>> parametersList = new List<Dictionary<string, object>>();
                    foreach (var item in items)
                    {
                        Dictionary<string, object> parameters = AchievementHelper.SetAchievementInsertParameters(item);
                        parametersList.Add(parameters);                        
                    }

                    DbBasic.UpdateMultiple(stpInsertAchievement, parametersList);

                }
                res = true;
            }
            catch (Exception ex)
            {
                // todo: write log to event view                   
            }

            return res;

        }

        
    }
}
