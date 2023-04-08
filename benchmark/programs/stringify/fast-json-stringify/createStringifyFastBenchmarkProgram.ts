import fast from "fast-json-stringify";
import typia from "typia";

import { createStringifyBenchmarkProgram } from "../createStringifyBenchmarkProgram";

export const createStringifyFastBenchmarkProgram = (
    app: typia.IJsonApplication,
) => {
    const stringify = (() => {
        try {
            return fast(app.schemas[0], {
                schema: {
                    components: app.components,
                } as any,
            });
        } catch {
            return null;
        }
    })();
    return createStringifyBenchmarkProgram(stringify);
};
