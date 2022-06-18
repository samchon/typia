import ajv from "fast-json-stringify";
import TSON from "../../src";
import { ObjectSimple } from "../../test/structures/ObjectSimple";

export const fast_simple = () => {
    const app: TSON.IJsonApplication = TSON.application<
        [ObjectSimple],
        "ajv"
    >();
    return ajv(app.schemas[0] as any, {
        schema: {
            components: app.components,
        } as any,
    });
};
