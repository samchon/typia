import cannon from "autocannon";
import PHYSICAL_CPU_COUNT from "physical-cpu-count";

export namespace ServerBenchmarker {
    export interface IOutput {
        category: string;
        result: Record<string, number>;
        unit: string;
    }

    export type IParameters = Record<string, number>;
    export interface IRequest {
        method: "GET" | "POST";
        path: string;
        body?: string;
    }

    export const prepare =
        (parameters: IParameters) =>
        (category: string, input: string | Omit<IRequest, "method">) =>
        async () => {
            const request: IRequest =
                typeof input === "string"
                    ? {
                          method: "GET",
                          path: input,
                      }
                    : {
                          ...input,
                          method: "POST",
                      };
            const output: IOutput = {
                category,
                result: {} as any,
                unit:
                    request.method === "GET" ? "megabytes/sec" : "requsts/sec",
            };
            for (const key of Object.keys(parameters)) output.result[key] = 0;

            const total =
                request.method === "GET"
                    ? (result: cannon.Result) => result.throughput.total / 1_024
                    : (result: cannon.Result) => result.requests.total;

            const entries = Object.entries(parameters).slice().reverse();
            for (const [key, port] of entries) {
                const result: cannon.Result = await measure(request)(port);
                const sec: number =
                    (result.finish.getTime() - result.start.getTime()) / 1_000;

                const value: number = total(result) / sec;
                output.result[key] = value;
            }
            return output;
        };

    const measure = (request: IRequest) => (port: number) =>
        new Promise<cannon.Result>((resolve, reject) =>
            cannon(
                {
                    url: `http://127.0.0.1:${port}/${request.path}`,
                    method: request.method,
                    body: request.body,
                    connections: 100,
                    workers: Math.min(1, Math.ceil(PHYSICAL_CPU_COUNT / 2)),
                },
                (err, result) => {
                    if (err) reject(err);
                    else resolve(result);
                },
            ),
        );
}
