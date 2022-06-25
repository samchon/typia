import ajv from "fast-json-stringify";
import TSON from "../../src";
import { Primitive } from "../../test/internal/Primitive";
import { ObjectRecursive } from "../../test/structures/ObjectRecursive";

const convert = () => {
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

const success = (() => {
    try {
        const data: ObjectRecursive = ObjectRecursive.generate();
        const json: string = convert()(data);
        const restored = JSON.parse(json);

        return Primitive.equal_to(data, restored);
    } catch {
        return false;
    }
})();

export const convert_ajv_object_recursive = () => {
    const func = convert();
    return success ? func : null;
};
