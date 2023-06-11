import typia from "../../../../src";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";
import { _test_isParse } from "../../../internal/_test_isParse";
export const test_createIsParse_ObjectDynamic = _test_isParse("ObjectDynamic", ObjectDynamic.generate, (input: any): typia.Primitive<ObjectDynamic> => { const is = (input: any): input is ObjectDynamic => {
    const $join = (typia.createIsParse as any).join;
    const $io0 = (input: any): boolean => Object.keys(input).every((key: any) => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (RegExp(/(.*)/).test(key))
            return "string" === typeof value || "number" === typeof value && Number.isFinite(value) || "boolean" === typeof value;
        return true;
    });
    return "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input);
}; input = JSON.parse(input); return is(input) ? input as any : null; }, ObjectDynamic.SPOILERS);
