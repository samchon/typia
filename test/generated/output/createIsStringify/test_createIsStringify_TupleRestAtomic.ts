import typia from "../../../src";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_createIsStringify_TupleRestAtomic = _test_isStringify("TupleRestAtomic", TupleRestAtomic.generate, (input: TupleRestAtomic): string | null => { const is = (input: any): input is TupleRestAtomic => {
    return Array.isArray(input) && ("boolean" === typeof input[0] && ("number" === typeof input[1] && !Number.isNaN(input[1])) && (Array.isArray(input.slice(2)) && input.slice(2).every((elem: any) => "string" === typeof elem)));
}; const stringify = (input: TupleRestAtomic): string => {
    const $string = (typia.createIsStringify as any).string;
    const $rest = (typia.createIsStringify as any).rest;
    return `[${input[0]},${input[1]}${$rest(`[${input.slice(2).map((elem: any) => $string(elem)).join(",")}]`)}]`;
}; return is(input) ? stringify(input) : null; }, TupleRestAtomic.SPOILERS);
