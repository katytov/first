using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.Common;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Achievements.Dal
{
    public static class DbBasic
    {

        public static DataSet GetData(string procedureName, Dictionary<string, object> parameters = null)
        {

            DataSet dataSet = new DataSet();
            SqlConnection conn = GetConnection();
            SqlCommand cmd = GetCommand(procedureName, conn, parameters);

            conn.Open();
            SqlDataAdapter da = new SqlDataAdapter(cmd);

            da.Fill(dataSet);
            conn.Close();
            da.Dispose();

            return dataSet;
        }

        public static bool UpdateData(string procedureName, Dictionary<string, object> parameters = null)
        {

            bool res = false;
            SqlConnection conn = GetConnection();
            SqlCommand cmd = GetCommand(procedureName, conn, parameters);

            conn.Open();
            int rows = cmd.ExecuteNonQuery();
            conn.Close();

            res = rows > 0;
            return res;

        }

        public static bool UpdateMultiple(string procedureName, List<Dictionary<string, object>> parametersList)
        {
            bool res = false;
            SqlConnection conn = GetConnection();
            SqlCommand cmd = GetCommand(procedureName, conn);
            using (IDbTransaction tran = conn.BeginTransaction())
            {
                int rows = 0;
                foreach (var parameters in parametersList)
                {

                    cmd.Parameters.Clear();
                    cmd.Parameters.AddRange(AddParameters(parameters));
                    rows += cmd.ExecuteNonQuery();
                }
                try
                {
                    // your code
                    tran.Commit();
                    res = true;
                }
                catch
                {
                    tran.Rollback();
                    throw;
                }

            }
            conn.Close();

            return res;
        }

        private static SqlConnection GetConnection()
        {
            string connString = ConfigurationManager.ConnectionStrings["DbAchHo"].ConnectionString;
            SqlConnection conn = new SqlConnection(connString);
            return conn;
        }

        private static SqlCommand GetCommand(string procedureName, SqlConnection conn, Dictionary<string, object> parameters = null)
        {

            SqlCommand cmd = new SqlCommand(procedureName, conn);
            cmd.CommandType = CommandType.StoredProcedure;

            if (parameters != null && parameters.Count > 0)
                cmd.Parameters.AddRange(AddParameters(parameters));

            return cmd;
        }

        private static SqlParameter[] AddParameters(Dictionary<string, object> parameters)
        {
            List<SqlParameter> parametersToAdd = new List<SqlParameter>();
            foreach (var parameter in parameters)
            {
                SqlParameter p = new SqlParameter(parameter.Key, parameter.Value);
                parametersToAdd.Add(p);
            }

            return parametersToAdd.ToArray();

        }
    }
}
