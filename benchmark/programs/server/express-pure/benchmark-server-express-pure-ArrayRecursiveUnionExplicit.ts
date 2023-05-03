import { createClientBenchmarkProgram } from "../createClientBenchmarkProgram";

createClientBenchmarkProgram(
    __dirname +
        "/../internal/express-pure/benchmark-server-express-pure-ArrayRecursiveUnionExplicit" +
        __filename.substr(-3),
);
