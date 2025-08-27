const Bonjour = require("bonjour")
const os = require("os")

const bonjour = new Bonjour()

function publishCluster(port = 4000) {
  bonjour.publish({
    name: `Cluster-${os.hostname()}`,
    type: "udcp",
    port
  })
}

function findClusters(cb) {
  bonjour.find({ type: "udcp" }, service => cb(service))
}

module.exports = { publishCluster, findClusters }
