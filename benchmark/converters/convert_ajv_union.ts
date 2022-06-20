import ajv from "fast-json-stringify";
import TSON from "../../src";
import { ArrayRecursiveUnion } from "../../test/structures/ArrayRecursiveUnion";

export const convert_ajv_union = () => {
    const app: TSON.IJsonApplication = TSON.application<
        [ArrayRecursiveUnion],
        "ajv"
    >();
    return ajv(app.schemas[0] as any, {
        // mode: "standalone",
        schema: {
            components: app.components,
        } as any,
    }) as any;
};
