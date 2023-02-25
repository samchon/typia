import typia from "../../../src";
import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_is } from "../internal/_test_is";
export const test_is_ObjectDynamic = _test_is("ObjectDynamic", ObjectDynamic.generate, (input) => ((input: any): input is ObjectDynamic => {
    const $join = (typia.is as any).join;
    const $io0 = (input: any) => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (RegExp(/(.*)/).test(key))
            return "string" === typeof value || "number" === typeof value || "boolean" === typeof value;
        return true;
    });
    return "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input);
})(input), ObjectDynamic.SPOILERS);
