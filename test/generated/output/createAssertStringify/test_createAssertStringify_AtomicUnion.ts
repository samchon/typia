import typia from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_assertStringify } from "../internal/_test_assertStringify";
export const test_createAssertStringify_AtomicUnion = _test_assertStringify("AtomicUnion", AtomicUnion.generate, (input: AtomicUnion): string => { const assert = (input: any) => {
    const $guard = (typia.createAssertStringify as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is AtomicUnion => {
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<(boolean | number | string)>",
            value: input
        })) && input.every((elem: any, _index1: number) => "string" === typeof elem || "number" === typeof elem && !Number.isNaN(elem) || "boolean" === typeof elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(boolean | number | string)",
            value: elem
        }));
    })(input, "$input", true);
    return input as AtomicUnion;
}; const stringify = (input: AtomicUnion): string => {
    const $string = (typia.createAssertStringify as any).string;
    const $throws = (typia.createAssertStringify as any).throws;
    return `[${input.map((elem: any) => (() => {
        if ("string" === typeof elem)
            return $string(elem);
        if ("number" === typeof elem)
            return elem;
        if ("boolean" === typeof elem)
            return elem;
        $throws({
            expected: "(boolean | number | string)",
            value: elem
        });
    })()).join(",")}]`;
}; return stringify(assert(input)); }, AtomicUnion.SPOILERS);
