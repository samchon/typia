import { createClientStringifyBenchmarkProgram } from "../createClientStringifyBenchmarkProgram";

createClientStringifyBenchmarkProgram(
    __dirname +
        "/../internal/express-pure/benchmark-server-stringify-express-pure-ArraySimple" +
        __filename.substr(-3),
);
