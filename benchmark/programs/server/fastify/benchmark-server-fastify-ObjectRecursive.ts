import { createClientBenchmarkProgram } from "../createClientBenchmarkProgram";

createClientBenchmarkProgram(
    __dirname +
        "/../internal/fastify/benchmark-server-fastify-ObjectRecursive" +
        __filename.substr(-3),
);
