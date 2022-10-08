import fs from "fs";
import os from "os";

import { benchmark_is } from "./features/benchmark_is";
import { benchmark_optimizer } from "./features/benchmark_optimizer";
import { benchmark_stringify } from "./features/benchmark_stringify";
import { benchmark_validate } from "./features/benchmark_validate";
import { WriteStream } from "./internal/WriteStream";

type Output = Record<string, number | null> & { name: string };

async function get_package_version(): Promise<string> {
    const content: string = await fs.promises.readFile(
        __dirname + "/../package.json",
        "utf8",
    );
    const data: { version: string } = JSON.parse(content);
    return data.version;
}

async function measure<T extends Output>(
    stream: WriteStream,
    functor: () => (() => T)[],
): Promise<void> {
    await stream.write(`## ${functor.name}`);
    console.log("  - " + functor.name);

    const parameters: string[] = [];
    const outputList: T[] = [];

    for (const comp of functor()) {
        // DO BENCHMARK
        const output = comp();
        outputList.push(output);
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
    await stream.write("\n");

    // DRAW GRAPHS
    for (const output of outputList) {
        await stream.write("```mermaid");
        await stream.write(`pie title ${functor.name} - ${output.name}`);

        for (const [key, value] of Object.entries(output)) {
            if (key === "name") continue;
            await stream.write(`  "${key}": ${value || 0}`);
        }
        await stream.write("```");
        await stream.write("\n");
    }

    // TERMINATE
    await stream.write("\n\n\n");
}

async function main(): Promise<void> {
    const cpu: string = os.cpus()[0].model;
    const memory: number = os.totalmem();

    console.log(`Benchmark ${cpu}`);

    const stream = new WriteStream(`${__dirname}/results/${cpu}.md`);
    const functors = [
        benchmark_validate,
        benchmark_is,
        benchmark_optimizer,
        benchmark_stringify,
    ];

    await stream.write("# Benchmark of `typescript-json`");
    await stream.write(`> CPU: ${cpu}`);
    await stream.write(
        `> Memory: ${Math.round(memory / 1024 / 1024).toLocaleString()} MB`,
    );
    await stream.write(`> NodeJS version: ${process.version}`);
    await stream.write(
        `> TypeScript-JSON version: ${await get_package_version()}`,
    );
    await stream.write("\n");
    for (const func of functors) await measure(stream, func as any);
}
main().catch((exp) => {
    console.log(exp);
    process.exit(1);
});
