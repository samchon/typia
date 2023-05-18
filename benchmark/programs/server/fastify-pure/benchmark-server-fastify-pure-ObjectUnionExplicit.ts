import { createClientBenchmarkProgram } from "../createClientBenchmarkProgram";

createClientBenchmarkProgram(
    __dirname +
        "/../internal/fastify-pure/benchmark-server-fastify-pure-ObjectUnionExplicit" +
        __filename.substr(-3),
);
