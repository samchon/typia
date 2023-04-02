import fs from "fs";
import os from "os";

import { BenchmarkStream } from "./BenhmarkStream";
import { HorizontalBarChart } from "./HorizontalBarChart";

const EXTENSION = __filename.substring(-2);

export namespace BenchmarkReporter {
    export interface Measurement<Components extends string> {
        category: string;
        result: Record<Components, number | null>;
        unit: string;
    }

    export async function measure<
        Components extends string,
        T extends Measurement<any>,
    >(
        stream: BenchmarkStream,
        functor: () => Array<(() => T) | (() => Promise<T>)>,
        starter?: () => Promise<void>,
        terminator?: () => Promise<void>,
        filter?: (category: string) => boolean,
    ): Promise<void> {
        if (starter) await starter();

        const name: string = functor.name
            .split("po_")
            .join("(")
            .split("_pc")
            .join(")")
            .split("_")
            .join(" ");
        console.log("  - " + name);

        // MEASURE PERFORMANCE
        const measurements: Measurement<any>[] = (
            await map(functor(), async (f) => {
                const m: Measurement<any> = await f();
                console.log("    - " + m.category);
                return m;
            })
        ).filter(({ category }) => (filter ?? (() => true))(category));
        const columns = Object.keys(measurements[0].result) as Components[];
        const relatives = measurements.map((measured) => {
            // COALESCING
            const ratio: HorizontalBarChart.IMeasure<Components> = {
                category: measured.category,
                result: {} as any,
            };
            for (const key of columns)
                ratio.result[key] = measured.result[key] || 0;

            // CONVERT TO RATIO
            const minimum: number = Math.min(
                ...(Object.values(ratio.result) as number[]).filter(
                    (value) => value !== 0,
                ),
            );
            for (const key of columns) ratio.result[key] /= minimum;
            return ratio;
        });

        // TITLE
        await stream.write(`## ${name}\n`);

        // INSERT CHART
        const svg = HorizontalBarChart.generate(`${name} benchmark`)(columns)(
            relatives,
        );
        await fs.promises.writeFile(
            `${stream.path}/images/${functor.name}.svg`,
            svg.node()?.outerHTML ?? "",
            "utf8",
        );
        await stream.write(
            `![${name} benchmark](images/${functor.name}.svg)\n`,
        );

        // TABLE CONTENT
        await stream.write(` Components | ${columns.join(" | ")} `);
        await stream.write(
            "-".repeat(12) +
                "|" +
                columns.map((str) => "-".repeat(str.length + 2)).join("|"),
        );
        for (const measured of measurements)
            await stream.write(
                [
                    measured.category +
                        " | " +
                        columns
                            .map((key) => measured.result[key] || "Failed")
                            .join(" | "),
                ].join(" | "),
            );
        if (measurements.length !== 0)
            await stream.write(
                `\n<p style="text-align: right"> Unit: ${measurements[0].unit} </p>`,
            );
        await stream.write("\n\n");

        if (terminator) await terminator();
    }

    export async function initialize(): Promise<BenchmarkStream> {
        const results: string =
            EXTENSION === "ts"
                ? `${__dirname}/../results`
                : `${__dirname}/../../../benchmark/results`;

        const memory: number = os.totalmem();
        const cpu: string = os.cpus()[0].model.trim();
        const location: string = `${results}/${cpu}`;

        await mkdir(results);
        await mkdir(location);
        await mkdir(`${location}/images`);

        const stream: BenchmarkStream = new BenchmarkStream(location);
        await stream.write("# Benchmark of `typia`");
        await stream.write(`> - CPU: ${cpu}`);
        await stream.write(
            `> - Memory: ${Math.round(
                memory / 1024 / 1024,
            ).toLocaleString()} MB`,
        );
        await stream.write(`> - OS: ${os.platform()}`);
        await stream.write(`> - NodeJS version: ${process.version}`);
        await stream.write(`> - Typia version: ${await get_package_version()}`);
        await stream.write("\n");
        return stream;
    }

    export async function terminate(stream: BenchmarkStream): Promise<void> {
        await stream.write("\n\n");
        await stream.write(
            `> Total elapsed time: ${stream.elapsed().toLocaleString()} ms`,
        );
        await stream.close();
    }

    async function mkdir(location: string): Promise<void> {
        try {
            await fs.promises.mkdir(location);
        } catch {}
    }

    async function get_package_version(): Promise<string> {
        const content: string = await fs.promises.readFile(
            EXTENSION === "ts"
                ? __dirname + "/../../package.json"
                : __dirname + "/../../../package.json",
            "utf8",
        );
        const data: { version: string } = JSON.parse(content);
        return data.version;
    }

    async function map<T, U>(
        array: T[],
        closure: (value: T) => Promise<U>,
    ): Promise<U[]> {
        const result: U[] = [];
        for (const value of array) result.push(await closure(value));
        return result;
    }
}
