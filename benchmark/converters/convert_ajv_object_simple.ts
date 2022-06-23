import ajv from "fast-json-stringify";
import TSON from "../../src";
import { Primitive } from "../../test/internal/Primitive";
import { ObjectSimple } from "../../test/structures/ObjectSimple";

const convert = () => {
    try {
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
    } catch {
        return null;
    }
};
const success = (() => {
    try {
        const data: ObjectSimple = ObjectSimple.generate();
        const json: string = convert()(data);
        const restored = JSON.parse(json);

        return Primitive.equal_to(data, restored);
    } catch {
        return false;
    }
})();

export const convert_ajv_object_simple = () => {
    const func = convert();
    return success ? func : null;
};
