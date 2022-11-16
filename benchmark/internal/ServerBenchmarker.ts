import cannon from "autocannon";
import PHYSICAL_CPU_COUNT from "physical-cpu-count";

export namespace ServerBenchmarker {
    export interface IOutput {
        category: string;
        result: Record<string, number>;
        unit: string;
    }

    export type IParameters = Record<string, number>;

    export const prepare =
        (parameters: IParameters) =>
        (category: string, path: string) =>
        async () => {
            const output: IOutput = {
                category,
                result: {} as any,
                unit: "megabytes/sec",
            };
            for (const [key, port] of Object.entries(parameters)) {
                const result: cannon.Result = await measure(path)(port);
                const value: number =
                    result.throughput.total /
                    (result.finish.getTime() - result.start.getTime());
                output.result[key] = value;
            }
            return output;
        };
}

const measure = (path: string) => (port: number) =>
    new Promise<cannon.Result>((resolve, reject) =>
        cannon(
            {
                url: `http://127.0.0.1:${port}/${path}`,
                connections: PHYSICAL_CPU_COUNT * 32,
                workers: Math.min(1, Math.ceil(PHYSICAL_CPU_COUNT / 2)),
            },
            (err, result) => {
                if (err) reject(err);
                else resolve(result);
            },
        ),
    );
