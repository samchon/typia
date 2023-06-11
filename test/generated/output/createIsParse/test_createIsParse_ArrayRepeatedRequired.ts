import typia from "../../../../src";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";
import { _test_isParse } from "../../../internal/_test_isParse";
export const test_createIsParse_ArrayRepeatedRequired = _test_isParse("ArrayRepeatedRequired", ArrayRepeatedRequired.generate, (input: any): typia.Primitive<ArrayRepeatedRequired> => { const is = (input: any): input is ArrayRepeatedRequired => {
    const $ia0 = (input: any): any => input.every((elem: any) => null !== elem && undefined !== elem && ("string" === typeof elem || "number" === typeof elem && Number.isFinite(elem) || Array.isArray(elem) && ($ia0(elem) || false)));
    return null !== input && undefined !== input && ("string" === typeof input || "number" === typeof input && Number.isFinite(input) || Array.isArray(input) && ($ia0(input) || false));
}; input = JSON.parse(input); return is(input) ? input as any : null; }, ArrayRepeatedRequired.SPOILERS);
