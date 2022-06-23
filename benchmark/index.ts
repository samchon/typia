// import { NumberUtil } from "../test/internal/NumberUtil";

import { benchmark_assert } from "./features/benchmark_assert";
import { benchmark_is } from "./features/benchmark_is";
import { benchmark_optimizer } from "./features/benchmark_optimizer";
import { benchmark_stringify } from "./features/benchmark_stringify";

type Output = Record<string, number | null> & { name: string };

// const round = NumberUtil.elaborate(4)(Math.round);
function measure<T extends Output>(functor: () => (() => T)[]): void {
    console.log(`## ${functor.name}`);

    const parameters: string[] = [];

    for (const comp of functor()) {
        // DO BENCHMARK
        const output = comp();

        // CONSTRUCT LABEL WITH PROPERTIES
        const labeled: boolean = parameters.length !== 0;
        if (labeled === false) {
            parameters.push(
                ...Object.keys(output).filter((key) => key !== "name"),
            );
            console.log(" Components | " + parameters.join(" | ") + " ");
            console.log(
                "-".repeat(12) +
                    "|" +
                    parameters
                        .map((str) => "-".repeat(str.length + 2))
                        .join("|"),
            );
        }

        // REPORT
        console.log(
            [
                output.name +
                    " | " +
                    parameters
                        .map((key) => output[key] || "Failed")
                        .join(" | "),
            ].join(" | "),
        );
    }
    console.log("\n\n");
}

function main(): void {
    const features = [
        benchmark_assert,
        benchmark_is,
        benchmark_stringify,
        benchmark_optimizer,
    ];
    for (const f of features) measure(f as any);
}
main();
