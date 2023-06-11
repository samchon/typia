import typia from "../../../../src";
import { TagLength } from "../../../structures/TagLength";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
export const test_assertEquals_TagLength = _test_assertEquals("TagLength", TagLength.generate, (input) => ((input: any): Array<TagLength.Type> => {
    const __is = (input: any, _exceptionable: boolean = true): input is Array<TagLength.Type> => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean => "string" === typeof input.fixed && 5 === input.fixed.length && ("string" === typeof input.minimum && 3 <= input.minimum.length) && ("string" === typeof input.maximum && 7 >= input.maximum.length) && ("string" === typeof input.minimum_and_maximum && 3 <= input.minimum_and_maximum.length && 7 >= input.minimum_and_maximum.length) && (4 === Object.keys(input).length || Object.keys(input).every((key: any) => {
            if (["fixed", "minimum", "maximum", "minimum_and_maximum"].some((prop: any) => key === prop))
                return true;
            const value = input[key];
            if (undefined === value)
                return true;
            return false;
        }));
        return Array.isArray(input) && input.every((elem: any, _index1: number) => "object" === typeof elem && null !== elem && $io0(elem, true));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is Array<TagLength.Type> => {
            const $guard = (typia.assertEquals as any).guard;
            const $join = (typia.assertEquals as any).join;
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ("string" === typeof input.fixed && (5 === input.fixed.length || $guard(_exceptionable, {
                path: _path + ".fixed",
                expected: "string (@length 5)",
                value: input.fixed
            })) || $guard(_exceptionable, {
                path: _path + ".fixed",
                expected: "string",
                value: input.fixed
            })) && ("string" === typeof input.minimum && (3 <= input.minimum.length || $guard(_exceptionable, {
                path: _path + ".minimum",
                expected: "string (@minLength 3)",
                value: input.minimum
            })) || $guard(_exceptionable, {
                path: _path + ".minimum",
                expected: "string",
                value: input.minimum
            })) && ("string" === typeof input.maximum && (7 >= input.maximum.length || $guard(_exceptionable, {
                path: _path + ".maximum",
                expected: "string (@maxLength 7)",
                value: input.maximum
            })) || $guard(_exceptionable, {
                path: _path + ".maximum",
                expected: "string",
                value: input.maximum
            })) && ("string" === typeof input.minimum_and_maximum && (3 <= input.minimum_and_maximum.length || $guard(_exceptionable, {
                path: _path + ".minimum_and_maximum",
                expected: "string (@minLength 3)",
                value: input.minimum_and_maximum
            })) && (7 >= input.minimum_and_maximum.length || $guard(_exceptionable, {
                path: _path + ".minimum_and_maximum",
                expected: "string (@maxLength 7)",
                value: input.minimum_and_maximum
            })) || $guard(_exceptionable, {
                path: _path + ".minimum_and_maximum",
                expected: "string",
                value: input.minimum_and_maximum
            })) && (4 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).every((key: any) => {
                if (["fixed", "minimum", "maximum", "minimum_and_maximum"].some((prop: any) => key === prop))
                    return true;
                const value = input[key];
                if (undefined === value)
                    return true;
                return $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value
                });
            })));
            return (Array.isArray(input) || $guard(true, {
                path: _path + "",
                expected: "Array<TagLength.Type>",
                value: input
            })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "TagLength.Type",
                value: elem
            })) && $ao0(elem, _path + "[" + _index1 + "]", true) || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "TagLength.Type",
                value: elem
            })) || $guard(true, {
                path: _path + "",
                expected: "Array<TagLength.Type>",
                value: input
            });
        })(input, "$input", true);
    return input;
})(input));
