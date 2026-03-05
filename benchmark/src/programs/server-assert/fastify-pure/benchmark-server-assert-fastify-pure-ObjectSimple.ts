import { createClientAssertBenchmarkProgram } from "../createClientAssertBenchmarkProgram";

createClientAssertBenchmarkProgram(
  __dirname +
    "/../internal/fastify-pure/benchmark-server-assert-fastify-pure-ObjectSimple" +
    __filename.substr(-3),
);
