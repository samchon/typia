import ajv from "fast-json-stringify";
import TSON from "../../src";
import { ArrayRecursiveUnion } from "../../test/structures/ArrayRecursiveUnion";

export const convert_ajv_array_recursive_union = () => {
    try {
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
    } catch {
        return null;
    }
};
