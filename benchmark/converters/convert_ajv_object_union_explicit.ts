import ajv from "fast-json-stringify";
import TSON from "../../src";
import { ObjectUnionExplicit } from "../../test/structures/ObjectUnionExplicit";

export const convert_ajv_object_union_explicit = () => {
    try {
        const app: TSON.IJsonApplication = TSON.application<
            [ObjectUnionExplicit],
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
