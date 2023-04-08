import fs from "fs";
import os from "os";

import { BenchmarkServer } from "./BenchmarkServer";
import { BenchmarkStream } from "./BenhmarkStream";
import { HorizontalBarChart } from "./HorizontalBarChart";

const EXTENSION = __filename.substring(-2);

export namespace BenchmarkReporter {
    export interface Measurement {
        type: string;
        result: Record<string, number | null>;
        unit: string;
    }

    export const write =
        (stream: BenchmarkStream) =>
        async (report: BenchmarkServer.IAggregation): Promise<void> => {
            // TITLE AND IMAGE TAG
            await stream.write(`## ${report.category}`);
            await stream.write(
                `![${report.category} benchmark](images/${report.category}.svg)`,
            );
            await stream.write("");

            // THE TABLE
            await stream.write(` Types | ${report.libraries.join(" | ")} `);
            await stream.write(
                "-------|" + report.libraries.map(() => "------").join("|"),
            );
            for (const type of report.types) {
                const label: string = DICTIONARY[type];
                const record: string[] = report.libraries.map((library) => {
                    const value = report.result[type][library];
                    if (value === null) return " - ";
                    else return (value.count / value.time).toLocaleString();
                });
                await stream.write(` ${label} | ${record.join(" | ")} `);
            }

            // GENERATE CHART
            const relatives: HorizontalBarChart.IMeasure[] = report.types.map(
                (type) => {
                    const label: string = DICTIONARY[type];
                    const record: HorizontalBarChart.IMeasure = {
                        label,
                        result: {},
                    };
                    for (const library of report.libraries) {
                        const value = report.result[type][library];
                        record.result[library] =
                            value === null
                                ? 0
                                : value.time
                                ? value.count / value.time
                                : 0;
                    }

                    const minimum: number = Math.min(
                        ...(Object.values(record.result) as number[]).filter(
                            (value) => value !== 0,
                        ),
                    );
                    for (const library of report.libraries)
                        record.result[library] /= minimum;
                    return record;
                },
            );

            const svg = HorizontalBarChart.generate(
                `${report.category} benchmark`,
            )(report.libraries)(relatives);
            await fs.promises.writeFile(
                `${stream.path}/images/${report.category}.svg`,
                svg.node()?.outerHTML ?? "",
                "utf8",
            );
        };

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

    const DICTIONARY: Record<string, string> = {
        ObjectSimple: "object (simple)",
        ObjectHierarchical: "object (hierarchical)",
        ObjectRecursive: "object (recursive)",
        ObjectUnionExplicit: "object (union, explicit)",
        ObjectUnionImplicit: "object (union, implicit)",
        ArraySimple: "array (simple)",
        ArrayHierarchical: "array (hierarchical)",
        ArrayRecursive: "array (recursive)",
        ArrayRecursiveUnionExplicit: "array (union, explicit)",
        ArrayRecursiveUnionImplicit: "array (union, implicit)",
        UltimateUnion: "ultimate union",
    };
}
