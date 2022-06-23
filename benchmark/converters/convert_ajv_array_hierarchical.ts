import ajv from "fast-json-stringify";
import TSON from "../../src";
import { ArrayHierarchical } from "../../test/structures/ArrayHierarchical";

export const convert_ajv_array_hierarchical = () => {
    try {
        const app: TSON.IJsonApplication = TSON.application<
            [ArrayHierarchical],
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
