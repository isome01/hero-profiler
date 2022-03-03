const { MongoClient, ServerApiVersion } = require('mongodb')

const PROTOCOL = process.env.DB_PROTOCOL
const DOMAIN = process.env.DB_DOMAIN
const DB_CLUSTER_NAME = process.env.DB_CLUSTER_NAME
const user = process.env.DB_USER
const pwd = process.env.DB_PWD

const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1
}

// const testurl = encodeURI(`${PROTOCOL}://${user}:${pwd}@${DOMAIN}/${DB_CLUSTER_NAME}`)
// console.log('test', testurl)

const uri = 'mongodb+srv://hero-profile-master:QrkR6T%24cAa%2385Md4@cluster0.m88bh.mongodb.net/Cluster0?retryWrites=true&w=majority'

module.exports = function driver(dbUri) {
  return MongoClient.connect(uri, config).then(
    client => client.db(dbUri)
  ).catch(
    err => {
      console.log(`There\'s been an error...\n ${err}`)
      return err
    }
  )
}
