import { createClientStringifyBenchmarkProgram } from "../createClientStringifyBenchmarkProgram";

createClientStringifyBenchmarkProgram(
    __dirname +
        "/../internal/fastify-pure/benchmark-server-stringify-fastify-pure-ObjectSimple" +
        __filename.substr(-3),
);
