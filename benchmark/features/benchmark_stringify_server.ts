import cp from "child_process";

import { ServerBenchmarker } from "../internal/ServerBenchmarker";

let forked: cp.ChildProcess | null = null;
const prepare = ServerBenchmarker.prepare({
    "express (pure)": 22222,
    "express (TSON.stringify)": 33333,
    "express (TSON.isStringify)": 33334,
    "express (TSON.assertStringify)": 33335,
    fastify: 44444,
});

const stringify_po_server_pc = () => [
    prepare("object (simple)", "ObjectSimple"),
    prepare("object (hierarchical)", "ObjectHierarchical"),
    prepare("object (recursive)", "ObjectRecursive"),
    prepare("object (union)", "ObjectUnionExplicit"),
    prepare("array (simple)", "ArraySimple"),
    prepare("array (hierarchical)", "ArrayHierarchical"),
    prepare("array (recursive)", "ArrayRecursive"),
    prepare("array (union)", "ArrayRecursiveUnionExplicit"),
];
stringify_po_server_pc.starter = () => {
    forked = cp.fork(__dirname + "/../servers/stringify/index.js");
    return new Promise<void>((resolve) => forked!.on("spawn", resolve));
};
stringify_po_server_pc.terminator = async () => {
    if (forked !== null) forked.kill();
};

export { stringify_po_server_pc as benchmark_stringify_server };
