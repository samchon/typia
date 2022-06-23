import ajv from "fast-json-stringify";
import TSON from "../../src";
import { ObjectUnionImplicit } from "../../test/structures/ObjectUnionImplicit";

export const convert_ajv_object_union_implicit = () => {
    try {
        const app: TSON.IJsonApplication = TSON.application<
            [ObjectUnionImplicit],
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
