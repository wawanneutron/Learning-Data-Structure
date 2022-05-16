/* Struktur data dengan pemetaan hubungan antar data */
function createNode(key) {
  const neighbors = [];
  return {
    key: key,
    // teman yg berelasi / hubungan
    neighbors: neighbors,

    addNeighbor: function (node) {
      neighbors.push(node);
    },
  };
}

export function createGraph(directed = false) {
  const nodes = [];
  const edges = [];
  return {
    directed: directed,
    //titik" dari data
    nodes: nodes,
    // memetakan satu titik dengan titik berikutnya
    edges: edges,

    addNode: function (key) {
      const newNode = createNode(key);
      nodes.push(newNode);
    },
    getNode: function (key) {
      return nodes.find(function (node) {
        return node.key == key;
      });
    },
    // hubungan satu node dengan node lain
    //  mempunyai node awal dan node tujuan
    addEdge: function (node1key, node2key) {
      const node1 = this.getNode(node1key);
      const node2 = this.getNode(node2key);

      node1.addNeighbor(node2);

      if (!directed) {
        node2.addNeighbor(node1);
      }
    },
    recommend: function () {
      let results = {};
      nodes.map(function ({ key, neighbors }) {
        let itemId = key.id;

        if (neighbors.length) {
          results[itemId] = neighbors.map(function (neighbor) {
            return neighbor.key;
          });
        }
        return itemId;
      });
      return results;
    },
  };
}
