import ajv from "fast-json-stringify";
import TSON from "../../src";
import { ObjectHierarchical } from "../../test/structures/ObjectHierarchical";

export const convert_ajv_hierarchical = () => {
    const app: TSON.IJsonApplication = TSON.application<
        [ObjectHierarchical],
        "ajv"
    >();
    return ajv(app.schemas[0] as any, {
        // mode: "standalone",
        schema: {
            components: app.components,
        } as any,
    }) as any;
};
