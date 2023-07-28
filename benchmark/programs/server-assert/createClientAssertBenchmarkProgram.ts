import cannon from "autocannon";
import PHYSICAL_CPU_COUNT from "physical-cpu-count";
import tgrid from "tgrid";

import { ICollection } from "../../structures/ICollection";
import { IBenchmarkProgram } from "../IBenchmarkProgram";
import { IServerAssertProgram } from "./internal/IServerAssertProgram";

export const createClientAssertBenchmarkProgram = async <T>(
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

            const driver = connector.getDriver<IServerAssertProgram>();
            const port = await driver.open();

            const collection: ICollection<T> = {
                data: new Array(100).fill(input),
            };
            const result: IBenchmarkProgram.IMeasurement = await shoot(
                port,
                JSON.stringify(collection),
            );
            await driver.close();
            return result;
        },
    };
    const worker = new tgrid.protocols.workers.WorkerServer();
    await worker.open(provider);
};

const shoot = (port: number, body: string) =>
    new Promise<IBenchmarkProgram.IMeasurement>((resolve, reject) =>
        cannon(
            {
                url: `http://127.0.0.1:${port}/assert`,
                method: "POST",
                body,
                headers: {
                    "Content-Type": "application/json",
                },
                connections: 500,
                workers: Math.min(1, Math.ceil(PHYSICAL_CPU_COUNT / 2)),
            },
            (err, result) => {
                if (err) reject(err);
                else
                    resolve({
                        amount:
                            Buffer.from(body).byteLength *
                            (result["2xx"] + result["4xx"]),
                        time: result.finish.getTime() - result.start.getTime(),
                    });
            },
        ),
    );
