import typia from "../../../src";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_createAssertClone_TupleRestAtomic = _test_assertClone("TupleRestAtomic", TupleRestAtomic.generate, (input: any): typia.Primitive<TupleRestAtomic> => { const assert = (input: any) => {
    const $guard = (typia.createAssertClone as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is TupleRestAtomic => {
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "[boolean, number, ...string]",
            value: input
        })) && (("boolean" === typeof input[0] || $guard(true, {
            path: _path + "[0]",
            expected: "boolean",
            value: input[0]
        })) && ("number" === typeof input[1] || $guard(true, {
            path: _path + "[1]",
            expected: "number",
            value: input[1]
        })) && ((Array.isArray(input.slice(2)) || $guard(true, {
            path: _path + "",
            expected: "Array<string>",
            value: input.slice(2)
        })) && input.slice(2).every((elem: any, _index1: number) => "string" === typeof elem || $guard(true, {
            path: _path + "[" + (2 + _index1) + "]",
            expected: "string",
            value: elem
        }))));
    })(input, "$input", true);
    return input as TupleRestAtomic;
}; const clone = (input: TupleRestAtomic): typia.Primitive<TupleRestAtomic> => {
    return Array.isArray(input) && ("boolean" === typeof input[0] && "number" === typeof input[1] && (Array.isArray(input.slice(2)) && input.slice(2).every((elem: any) => "string" === typeof elem))) ? [
        input[0],
        input[1],
        ...Array.isArray(input.slice(2)) ? input.slice(2).map((elem: any) => elem) : input.slice(2)
    ] : input;
}; assert(input); const output = clone(input); /* TupleRestAtomic */; return output as TupleRestAtomic; }, TupleRestAtomic.SPOILERS);
