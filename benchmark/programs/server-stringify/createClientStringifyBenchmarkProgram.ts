import cannon from "autocannon";
import PHYSICAL_CPU_COUNT from "physical-cpu-count";
import tgrid from "tgrid";

import { ICollection } from "../../structures/ICollection";
import { IBenchmarkProgram } from "../IBenchmarkProgram";
import { IServerStringifyProgram } from "./internal/IServerStringifyProgram";

export const createClientStringifyBenchmarkProgram = async <T>(
    location: string,
): Promise<void> => {
    const provider: IBenchmarkProgram<T> = {
        type: () => "success",
        validate: () => true,
        skip: () => true,
        success: async (input: T): Promise<IBenchmarkProgram.IMeasurement> => {
            const connector = new tgrid.protocols.workers.WorkerConnector(
                null,
                null,
                "process",
            );
            await connector.connect(location);

            const collection: ICollection<T> = {
                data: new Array(100).fill(input),
            };
            const driver =
                connector.getDriver<IServerStringifyProgram<ICollection<T>>>();

            const port = await driver.open(collection);

            const result: IBenchmarkProgram.IMeasurement = await shoot(port);
            await driver.close();
            return result;
        },
    };
    const worker = new tgrid.protocols.workers.WorkerServer();
    await worker.open(provider);
};

const shoot = (port: number) =>
    new Promise<IBenchmarkProgram.IMeasurement>((resolve, reject) =>
        cannon(
            {
                url: `http://127.0.0.1:${port}/stringify`,
                method: "GET",
                connections: 500,
                workers: Math.min(1, Math.ceil(PHYSICAL_CPU_COUNT / 2)),
            },
            (err, result) => {
                if (err) reject(err);
                else
                    resolve({
                        amount: result.throughput.total,
                        time: result.finish.getTime() - result.start.getTime(),
                    });
            },
        ),
    );
