import { BenchmarkGenerator } from "./internal/Benchmark";

import { benchmark_stringify_optimizer } from "./features/benchmark_stringify_optimizer";
import { benchmark_stringify_repeat } from "./features/benchmark_stringify_repeat";

function measure(functor: () => Array<() => BenchmarkGenerator.IOutput>): void {
    console.log(`## ${functor.name}`);
    console.log(
        [
            "Component",
            "ideal",
            "typescript-json",
            "fast-json-stringify",
            "JSON.stringify",
        ].join(" | "),
    );
    console.log(new Array(5).fill("------------").join("|"));
    for (const comp of functor()) {
        const result = comp();
        console.log(
            [
                result.name,
                (result.ideal / result.json) * 100,
                (result.tson / result.json) * 100,
                result.ajv !== null
                    ? (result.ajv / result.json) * 100
                    : "Failed",
                (result.json / result.json) * 100,
            ].join(" | "),
        );
    }
    console.log("\n\n");
}

function main(): void {
    measure(benchmark_stringify_repeat);
    measure(benchmark_stringify_optimizer);
}
main();
