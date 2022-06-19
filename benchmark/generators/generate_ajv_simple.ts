import ajv from "fast-json-stringify";
import TSON from "../../src";
import { ObjectSimple } from "../../test/structures/ObjectSimple";

export const generate_ajv_simple = () => {
    const app: TSON.IJsonApplication = TSON.application<
        [ObjectSimple],
        "ajv"
    >();
    return ajv(app.schemas[0] as any, {
        // mode: "standalone",
        schema: {
            components: app.components,
        } as any,
    }) as any;
};
