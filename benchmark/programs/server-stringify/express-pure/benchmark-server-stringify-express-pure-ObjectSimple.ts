import { createClientStringifyBenchmarkProgram } from "../createClientStringifyBenchmarkProgram";

createClientStringifyBenchmarkProgram(
    __dirname +
        "/../internal/express-pure/benchmark-server-stringify-express-pure-ObjectSimple" +
        __filename.substr(-3),
);
