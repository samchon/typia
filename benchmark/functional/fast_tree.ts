import ajv from "fast-json-stringify";
import TSON from "../../src";
import { ArrayRecursive } from "../../test/structures/ArrayRecursive";

export const fast_tree = () => {
    const app: TSON.IJsonApplication = TSON.application<
        [ArrayRecursive],
        "ajv"
    >();
    return ajv(app.schemas[0] as any, {
        schema: {
            components: app.components,
        } as any,
    });
};
