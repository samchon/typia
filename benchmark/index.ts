import os from "os";

import { benchmark_assert } from "./features/benchmark_assert";
import { benchmark_is } from "./features/benchmark_is";
import { benchmark_optimizer } from "./features/benchmark_optimizer";
import { benchmark_stringify } from "./features/benchmark_stringify";
import { WriteStream } from "./internal/WriteStream";

type Output = Record<string, number | null> & { name: string };

// const round = NumberUtil.elaborate(4)(Math.round);
async function measure<T extends Output>(
    stream: WriteStream,
    functor: () => (() => T)[],
): Promise<void> {
    await stream.write(`## ${functor.name}`);
    console.log("  - " + functor.name);

    const parameters: string[] = [];
    for (const comp of functor()) {
        // DO BENCHMARK
        const output = comp();
        console.log("    - " + output.name);

        // CONSTRUCT LABEL WITH PROPERTIES
        const labeled: boolean = parameters.length !== 0;
        if (labeled === false) {
            parameters.push(
                ...Object.keys(output).filter((key) => key !== "name"),
            );
            await stream.write(" Components | " + parameters.join(" | ") + " ");
            await stream.write(
                "-".repeat(12) +
                    "|" +
                    parameters
                        .map((str) => "-".repeat(str.length + 2))
                        .join("|"),
            );
        }

        // REPORT
        await stream.write(
            [
                output.name +
                    " | " +
                    parameters
                        .map((key) => output[key] || "Failed")
                        .join(" | "),
            ].join(" | "),
        );
    }
    await stream.write("\n\n");
}

async function main(): Promise<void> {
    const cpu: string = os.cpus()[0].model;
    console.log(`Benchmark ${cpu}`);

    const stream = new WriteStream(`${__dirname}/results/${cpu}.md`);
    const functors = [
        benchmark_is,
        benchmark_stringify,
        benchmark_optimizer,
        benchmark_assert,
    ];
    for (const func of functors) await measure(stream, func as any);
}
main();
