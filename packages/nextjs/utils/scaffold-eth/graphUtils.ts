type Node = { position: { x: number; y: number } };
type Connection = { from: number; to: number };

export function generateConnections(nodes: Node[], threshold: number, maxConnectionsPerNode = 3): Connection[] {
  const connections: Connection[] = [];
  const nodeConnections: Map<number, Connection[]> = new Map();
  const connectionSet = new Set<string>();

  const getDistance = (a: Node, b: Node) => Math.hypot(a.position.x - b.position.x, a.position.y - b.position.y);

  const potentialConnections: { i: number; j: number; dist: number }[] = [];

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dist = getDistance(nodes[i], nodes[j]);
      if (dist <= threshold) {
        potentialConnections.push({ i, j, dist });
      }
    }
  }

  potentialConnections.sort((a, b) => a.dist - b.dist);

  for (const { i, j } of potentialConnections) {
    const key = `${Math.min(i, j)}-${Math.max(i, j)}`;
    if (connectionSet.has(key)) continue;

    const iConnections = nodeConnections.get(i) ?? [];
    const jConnections = nodeConnections.get(j) ?? [];

    if (iConnections.length >= maxConnectionsPerNode || jConnections.length >= maxConnectionsPerNode) {
      continue;
    }

    iConnections.push({ from: i, to: j });
    jConnections.push({ from: j, to: i });

    nodeConnections.set(i, iConnections);
    nodeConnections.set(j, jConnections);
    connectionSet.add(key);

    connections.push({ from: i, to: j });
  }

  for (let i = 0; i < nodes.length; i++) {
    if ((nodeConnections.get(i)?.length ?? 0) === 0) {
      let minDist = Infinity;
      let nearest = -1;

      for (let j = 0; j < nodes.length; j++) {
        if (i === j) continue;
        const dist = getDistance(nodes[i], nodes[j]);
        if (dist < minDist) {
          minDist = dist;
          nearest = j;
        }
      }

      const key = `${Math.min(i, nearest)}-${Math.max(i, nearest)}`;
      if (!connectionSet.has(key)) {
        connections.push({ from: Math.min(i, nearest), to: Math.max(i, nearest) });
        connectionSet.add(key);
      }
    }
  }

  return connections;
}

export type { Node, Connection };
