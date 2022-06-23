import ajv from "fast-json-stringify";
import TSON from "../../src";
import { ObjectRecursive } from "../../test/structures/ObjectRecursive";

export const convert_ajv_object_recursive = () => {
    try {
        const app: TSON.IJsonApplication = TSON.application<
            [ObjectRecursive],
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
