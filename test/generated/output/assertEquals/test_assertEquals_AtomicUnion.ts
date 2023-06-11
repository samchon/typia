import typia from "../../../../src";
import { AtomicUnion } from "../../../structures/AtomicUnion";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
export const test_assertEquals_AtomicUnion = _test_assertEquals("AtomicUnion", AtomicUnion.generate, (input) => ((input: any): Array<AtomicUnion.Union> => {
    const __is = (input: any, _exceptionable: boolean = true): input is Array<AtomicUnion.Union> => {
        return Array.isArray(input) && input.every((elem: any, _index1: number) => null === elem || "string" === typeof elem || "number" === typeof elem && Number.isFinite(elem) || "boolean" === typeof elem);
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is Array<AtomicUnion.Union> => {
            const $guard = (typia.assertEquals as any).guard;
            return (Array.isArray(input) || $guard(true, {
                path: _path + "",
                expected: "AtomicUnion",
                value: input
            })) && input.every((elem: any, _index1: number) => null === elem || "string" === typeof elem || "number" === typeof elem && Number.isFinite(elem) || "boolean" === typeof elem || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "(boolean | null | number | string)",
                value: elem
            })) || $guard(true, {
                path: _path + "",
                expected: "AtomicUnion",
                value: input
            });
        })(input, "$input", true);
    return input;
})(input));
