import { createClientBenchmarkProgram } from "../createClientBenchmarkProgram";

createClientBenchmarkProgram(
    __dirname +
        "/../internal/fastify/benchmark-server-fastify-ArrayRecursive" +
        __filename.substr(-3),
);
