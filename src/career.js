const career = [
  {
    "company": "Transfix",
    "location": "New York City, NY",
    "logo": "transfix.png",
    "role": "Senior Data Engineer",
    "highlights": [
      "Own Transfix’s data infrastructure spanning Redshift, Snowflake, Airflow, Kubernetes, RDS Postgres Instances, Amazon Database Migration Service Instances, Kinesis Streams & Firehoses, ensuring integrity and completeness of data operations including timely and accurate data delivery for all use cases",
      "Architect ELT on Snowflake and Looker, structuring logical replication based data extraction, loading as variant unstructured data, and transforming of data in LookML creating a highly performant and adaptable data pipeline, replacing existing ETL data warehouse solutions leading to a ~66% performance improvement in query runtime and an order of magnitude difference in the  efficiency of changing the transformation code",
      "Productionize machine learning models for dynamic pricing, by integrating new data sources, developing ETL for computationally intensive feature engineering transforms, building data integrations with platform micro-services enabling 4 new machine learning models in production per quarter"
    ]
  },
  {
    "company": "Call 9",
    "location": "Brooklyn, NY",
    "logo": "call9.png",
    "role": "Senior Data Engineer",
    "highlights": [
      "Established new data warehouse using Snowflake and Alooma, with unit and integration testing best practices utilizing publish subscribe pattern, maintaining uptime and quality for external data product, board reporting, clinical operations, finance, business intelligence and machine learning use cases",
      "Owned Looker deployment, maintaining LookML code base, ensuring secure & performant data management, and maintaining appropriate availability for high-risk patient personal health information data",
      "Contributed to Call9’s proprietary telemedicine platform in Ruby on Rails, React and GraphQL, including optimizing application page load time against database queries and evolving the database schema"
    ]
  },
  {"company": "Goldman, Sachs & Co.",
    "location": "New York City, NY",
    "logo": "Goldman-Sachs-Logo.png",
   "role": "Data Engineer - Technology & Operational Risk",
   "highlights": [
     "Led a team of 5 developers to automate GS Group’s Risk Appetite Statement, constructing data pipelines using Python & Spark shaping GS Group board reporting from monthly manually collected metrics to automated calculations resulting in significant operational leverage and transparency",
     "Produced 100 refined datasets in SQL (ETL), solving information security controls monitoring metrics and Tableau reporting, leveraged cross-divisionally to inform the firm’s technology and operational risk strategy",
     "Managed data warehousing needs for the global team, i.e. 150+ headcount, working with partners to obtain & model relevant datasets and debug issues with data flow using compute nodes, Linux, Spark, HDFS and RDBMS technologies"
    ]
  },
  {"company": "Goldman, Sachs & Co.",
    "location": "Jersey City, NJ",
    "logo": "Goldman-Sachs-Logo.png",
   "role": "Data Engineer - Technology Infrastructure Risk",
   "highlights": [
    "Championed entitlement data for global technology infrastructure, analyzing thousands of fine grained entitlements into privilege management roles in Python (Pandas, Numpy, SciPy), leading to a 94% increase in organizational entitlement review efficiency",
    "Led 8 developers to architect and develop multi-language API, including API integrations in Bash, Powershell, Python, Slang,  and Perl, for our proprietary just-in-time credential management solution, driving adoption in 100% of the firm’s divisions",
    "Transformed authentication logs into Spark dataframes, reporting on the firm’s global authentication using language processing  techniques, crafting the firm’s strategy on user requirements and areas for authentication reduction, leading to the lockdown of  20+ system accounts"
    ]
  },
]
export default career;
