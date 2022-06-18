import { benchmark_stringify_optimizer } from "./features/benchmark_stringify_optimizer";
import { fast_simple } from "./functional/fast_simple";
import { BenchmarkGenerator } from "./internal/Benchmark";

function measure(functor: () => Array<() => BenchmarkGenerator.IOutput>): void {
    console.log(`## ${functor.name}`);
    console.log(
        [
            "Component",
            "typescript-json",
            "fast-json-stringify",
            "JSON.stringify",
        ].join(" | "),
    );
    console.log(new Array(4).fill("------------").join("|"));
    for (const comp of functor()) {
        const result = comp();
        console.log(
            [result.name, result.tson, result.ajv, result.json].join(" | "),
        );
    }
    console.log("\n\n");
}

function main(): void {
    console.log(fast_simple().toString());
    measure(benchmark_stringify_optimizer);
}
main();
