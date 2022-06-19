import ajv from "fast-json-stringify";
import TSON from "../../src";
import { ObjectRecursive } from "../../test/structures/ObjectRecursive";

export const fast_recursive = () => {
    const app: TSON.IJsonApplication = TSON.application<
        [ObjectRecursive],
        "ajv"
    >();
    return ajv(app.schemas[0] as any, {
        schema: {
            components: app.components,
        } as any,
    });
};
