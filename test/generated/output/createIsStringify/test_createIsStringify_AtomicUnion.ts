import typia from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_createIsStringify_AtomicUnion = _test_isStringify("AtomicUnion", AtomicUnion.generate, (input: AtomicUnion): string | null => { const is = (input: any): input is AtomicUnion => {
    return Array.isArray(input) && input.every((elem: any) => "string" === typeof elem || "number" === typeof elem && !Number.isNaN(elem) || "boolean" === typeof elem);
}; const stringify = (input: AtomicUnion): string => {
    const $string = (typia.createIsStringify as any).string;
    const $throws = (typia.createIsStringify as any).throws;
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
}; return is(input) ? stringify(input) : null; }, AtomicUnion.SPOILERS);
