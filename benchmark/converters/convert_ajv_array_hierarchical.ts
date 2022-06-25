import ajv from "fast-json-stringify";
import TSON from "../../src";
import { Primitive } from "../../test/internal/Primitive";
import { ArrayHierarchical } from "../../test/structures/ArrayHierarchical";

const convert = () => {
    if (success === false) return null;
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

const success = (() => {
    try {
        const data: ArrayHierarchical = ArrayHierarchical.generate();
        const json: string = convert()(data);
        const restored = JSON.parse(json);

        return Primitive.equal_to(data, restored);
    } catch {
        return false;
    }
})();

export const convert_ajv_array_hierarchical = () => {
    const func = convert();
    return success ? func : null;
};
