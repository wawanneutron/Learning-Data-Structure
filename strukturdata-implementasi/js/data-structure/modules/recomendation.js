import { createGraph } from "./graph.js";
import { items, items2 } from "./data-product.js";

const graph = createGraph(false);

// user1
for (let i = 0; i < items.length; i++) {
  graph.addNode(items[i]);
}

for (let i = 0; i < items.length - 1; i++) {
  graph.addEdge(items[i], items[i + 1]);
}

// user2
for (let i = 0; i < items2.length; i++) {
  graph.addNode(items2[i]);
}

for (let i = 0; i < items2.length - 1; i++) {
  graph.addEdge(items2[i], items2[i + 1]);
}

const recomendation = graph.recommend();
console.log(recomendation);

export { recomendation };
