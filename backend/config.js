const config = {
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    host: 'awshackathondb.cnpaqptltymp.ap-northeast-1.rds.amazonaws.com',
    user: 'root',
    password: 'hackathon',
    database: 'InsuranceData',
    port: 3306,
  },
};
export default config;
