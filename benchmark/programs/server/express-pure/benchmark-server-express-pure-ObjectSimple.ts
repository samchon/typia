import { createClientBenchmarkProgram } from "../createClientBenchmarkProgram";

createClientBenchmarkProgram(
    __dirname +
        "/../internal/express-pure/benchmark-server-express-pure-ObjectSimple" +
        __filename.substr(-3),
);
