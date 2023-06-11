import typia from "../../../../src";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
export const test_assertStringify_ToJsonAtomicUnion = _test_assertStringify("ToJsonAtomicUnion", ToJsonAtomicUnion.generate, (input) => ((input: any): string => { const assert = (input: any): Array<ToJsonAtomicUnion.IToJson> => {
    const __is = (input: any): input is Array<ToJsonAtomicUnion.IToJson> => {
        const $io0 = (input: any): boolean => true;
        return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is Array<ToJsonAtomicUnion.IToJson> => {
            const $guard = (typia.assertStringify as any).guard;
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => true || $guard(_exceptionable, {
                path: _path + ".toJSON",
                expected: "unknown",
                value: input.toJSON
            });
            return (Array.isArray(input) || $guard(true, {
                path: _path + "",
                expected: "ToJsonAtomicUnion",
                value: input
            })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "ToJsonAtomicUnion.IToJson",
                value: elem
            })) && $ao0(elem, _path + "[" + _index1 + "]", true) || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "ToJsonAtomicUnion.IToJson",
                value: elem
            })) || $guard(true, {
                path: _path + "",
                expected: "ToJsonAtomicUnion",
                value: input
            });
        })(input, "$input", true);
    return input;
}; const stringify = (input: Array<ToJsonAtomicUnion.IToJson>): string => {
    const $string = (typia.assertStringify as any).string;
    const $number = (typia.assertStringify as any).number;
    const $throws = (typia.assertStringify as any).throws;
    return `[${input.map((elem: any) => null !== elem.toJSON() ? (() => {
        if ("string" === typeof elem.toJSON())
            return $string(elem.toJSON());
        if ("number" === typeof elem.toJSON())
            return $number(elem.toJSON());
        if ("boolean" === typeof elem.toJSON())
            return elem.toJSON();
        $throws({
            expected: "(boolean | null | number | string)",
            value: elem.toJSON()
        });
    })() : "null").join(",")}]`;
}; return stringify(assert(input)); })(input));
