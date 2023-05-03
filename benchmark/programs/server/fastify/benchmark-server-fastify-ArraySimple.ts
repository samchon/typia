import { createClientBenchmarkProgram } from "../createClientBenchmarkProgram";

createClientBenchmarkProgram(
    __dirname +
        "/../internal/fastify/benchmark-server-fastify-ArraySimple" +
        __filename.substr(-3),
);
