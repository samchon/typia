import typia from "../../../../src";
import { TagStep } from "../../../structures/TagStep";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
export const test_createAssertStringify_TagStep = _test_assertStringify("TagStep", TagStep.generate, (input: any): string => { const assert = (input: any): TagStep => {
    const __is = (input: any): input is TagStep => {
        const $io0 = (input: any): boolean => "number" === typeof input.exclusiveMinimum && 0 === input.exclusiveMinimum % 5 - 3 && 3 < input.exclusiveMinimum && ("number" === typeof input.minimum && 0 === input.minimum % 5 - 3 && 3 <= input.minimum) && ("number" === typeof input.range && 0 === input.range % 5 - 0 && 0 < input.range && 100 > input.range) && ("number" === typeof input.multipleOf && 0 === input.multipleOf % 5 && 3 <= input.multipleOf && 99 >= input.multipleOf);
        return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is TagStep => {
            const $guard = (typia.createAssertStringify as any).guard;
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ("number" === typeof input.exclusiveMinimum && (0 === input.exclusiveMinimum % 5 - 3 || $guard(_exceptionable, {
                path: _path + ".exclusiveMinimum",
                expected: "number (@step 5)",
                value: input.exclusiveMinimum
            })) && (3 < input.exclusiveMinimum || $guard(_exceptionable, {
                path: _path + ".exclusiveMinimum",
                expected: "number (@exclusiveMinimum 3)",
                value: input.exclusiveMinimum
            })) || $guard(_exceptionable, {
                path: _path + ".exclusiveMinimum",
                expected: "number",
                value: input.exclusiveMinimum
            })) && ("number" === typeof input.minimum && (0 === input.minimum % 5 - 3 || $guard(_exceptionable, {
                path: _path + ".minimum",
                expected: "number (@step 5)",
                value: input.minimum
            })) && (3 <= input.minimum || $guard(_exceptionable, {
                path: _path + ".minimum",
                expected: "number (@minimum 3)",
                value: input.minimum
            })) || $guard(_exceptionable, {
                path: _path + ".minimum",
                expected: "number",
                value: input.minimum
            })) && ("number" === typeof input.range && (0 === input.range % 5 - 0 || $guard(_exceptionable, {
                path: _path + ".range",
                expected: "number (@step 5)",
                value: input.range
            })) && (0 < input.range || $guard(_exceptionable, {
                path: _path + ".range",
                expected: "number (@exclusiveMinimum 0)",
                value: input.range
            })) && (100 > input.range || $guard(_exceptionable, {
                path: _path + ".range",
                expected: "number (@exclusiveMaximum 100)",
                value: input.range
            })) || $guard(_exceptionable, {
                path: _path + ".range",
                expected: "number",
                value: input.range
            })) && ("number" === typeof input.multipleOf && (0 === input.multipleOf % 5 || $guard(_exceptionable, {
                path: _path + ".multipleOf",
                expected: "number (@multipleOf 5)",
                value: input.multipleOf
            })) && (3 <= input.multipleOf || $guard(_exceptionable, {
                path: _path + ".multipleOf",
                expected: "number (@minimum 3)",
                value: input.multipleOf
            })) && (99 >= input.multipleOf || $guard(_exceptionable, {
                path: _path + ".multipleOf",
                expected: "number (@maximum 99)",
                value: input.multipleOf
            })) || $guard(_exceptionable, {
                path: _path + ".multipleOf",
                expected: "number",
                value: input.multipleOf
            }));
            return (Array.isArray(input) || $guard(true, {
                path: _path + "",
                expected: "TagStep",
                value: input
            })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "TagStep.Type",
                value: elem
            })) && $ao0(elem, _path + "[" + _index1 + "]", true) || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "TagStep.Type",
                value: elem
            })) || $guard(true, {
                path: _path + "",
                expected: "TagStep",
                value: input
            });
        })(input, "$input", true);
    return input;
}; const stringify = (input: TagStep): string => {
    const $number = (typia.createAssertStringify as any).number;
    const $so0 = (input: any): any => `{"exclusiveMinimum":${$number(input.exclusiveMinimum)},"minimum":${$number(input.minimum)},"range":${$number(input.range)},"multipleOf":${$number(input.multipleOf)}}`;
    return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
}; return stringify(assert(input)); }, TagStep.SPOILERS);
