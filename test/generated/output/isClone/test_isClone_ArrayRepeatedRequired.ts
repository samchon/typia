import typia from "../../../../src";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";
import { _test_isClone } from "../../../internal/_test_isClone";
export const test_isClone_ArrayRepeatedRequired = _test_isClone("ArrayRepeatedRequired", ArrayRepeatedRequired.generate, (input) => ((input: any): typia.Primitive<string | number | Array<ArrayRepeatedRequired>> | null => { const is = (input: any): input is string | number | Array<ArrayRepeatedRequired> => {
    const $ia0 = (input: any): any => input.every((elem: any) => null !== elem && undefined !== elem && ("string" === typeof elem || "number" === typeof elem && Number.isFinite(elem) || Array.isArray(elem) && ($ia0(elem) || false)));
    return null !== input && undefined !== input && ("string" === typeof input || "number" === typeof input && Number.isFinite(input) || Array.isArray(input) && ($ia0(input) || false));
}; const clone = (input: string | number | Array<ArrayRepeatedRequired>): typia.Primitive<string | number | Array<ArrayRepeatedRequired>> => {
    const $ia0 = (input: any): any => input.every((elem: any) => null !== elem && undefined !== elem && ("string" === typeof elem || "number" === typeof elem || Array.isArray(elem) && ($ia0(elem) || false)));
    const $cp0 = (input: any) => $ca0(input);
    const $ca0 = (input: any): any => input.map((elem: any) => Array.isArray(elem) ? $cp0(elem) : elem as any);
    return Array.isArray(input) ? $cp0(input) : input as any;
}; if (!is(input))
    return null; const output = clone(input); return output; })(input), ArrayRepeatedRequired.SPOILERS);
