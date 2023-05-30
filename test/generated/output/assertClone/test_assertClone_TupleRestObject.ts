import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { TupleRestObject } from "../../../structures/TupleRestObject";
export const test_assertClone_TupleRestObject = _test_assertClone("TupleRestObject", TupleRestObject.generate, (input) => ((input: any): typia.Primitive<[boolean, number, ...TupleRestObject.IObject[]]> => { const assert = (input: any): [boolean, number, ...TupleRestObject.IObject[]] => {
    const $guard = (typia.assertClone as any).guard;
    const __is = (input: any): input is [boolean, number, ...TupleRestObject.IObject[]] => {
        const $io0 = (input: any): boolean => "string" === typeof input.value;
        return Array.isArray(input) && ("boolean" === typeof input[0] && ("number" === typeof input[1] && Number.isFinite(input[1])) && (Array.isArray(input.slice(2)) && input.slice(2).every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem))));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is [boolean, number, ...TupleRestObject.IObject[]] => {
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => "string" === typeof input.value || $guard(_exceptionable, {
                path: _path + ".value",
                expected: "string",
                value: input.value
            });
            return (Array.isArray(input) || $guard(true, {
                path: _path + "",
                expected: "[boolean, number, ...TupleRestObject.IObject]",
                value: input
            })) && (("boolean" === typeof input[0] || $guard(true, {
                path: _path + "[0]",
                expected: "boolean",
                value: input[0]
            })) && ("number" === typeof input[1] && Number.isFinite(input[1]) || $guard(true, {
                path: _path + "[1]",
                expected: "number",
                value: input[1]
            })) && ((Array.isArray(input.slice(2)) || $guard(true, {
                path: _path + "",
                expected: "Array<TupleRestObject.IObject>",
                value: input.slice(2)
            })) && input.slice(2).every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
                path: _path + "[" + (2 + _index1) + "]",
                expected: "TupleRestObject.IObject",
                value: elem
            })) && $ao0(elem, _path + "[" + (2 + _index1) + "]", true))));
        })(input, "$input", true);
    return input;
}; const clone = (input: [boolean, number, ...TupleRestObject.IObject[]]): typia.Primitive<[boolean, number, ...TupleRestObject.IObject[]]> => {
    const $io0 = (input: any): boolean => "string" === typeof input.value;
    const $co0 = (input: any): any => ({
        value: input.value as any
    });
    return Array.isArray(input) && ("boolean" === typeof input[0] && "number" === typeof input[1] && (Array.isArray(input.slice(2)) && input.slice(2).every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem)))) ? [
        input[0] as any,
        input[1] as any,
        ...Array.isArray(input.slice(2)) ? input.slice(2).map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem as any) : input.slice(2) as any
    ] as any : input as any;
}; assert(input); const output = clone(input); return output; })(input), TupleRestObject.SPOILERS);
