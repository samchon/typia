import ajv from "fast-json-stringify";
import TSON from "../../src";
import { ObjectHierarchical } from "../../test/structures/ObjectHierarchical";

export const fast_hierarchical = () => {
    const app: TSON.IJsonApplication = TSON.application<
        [ObjectHierarchical],
        "ajv"
    >();
    return ajv(app.schemas[0] as any, {
        schema: {
            components: app.components,
        } as any,
    });
};
