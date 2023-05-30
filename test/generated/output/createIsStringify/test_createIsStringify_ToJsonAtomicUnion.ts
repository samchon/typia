import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";
export const test_createIsStringify_ToJsonAtomicUnion = _test_isStringify("ToJsonAtomicUnion", ToJsonAtomicUnion.generate, (input: ToJsonAtomicUnion): string | null => { const is = (input: any): input is ToJsonAtomicUnion => {
    const $io0 = (input: any): boolean => true;
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
}; const stringify = (input: ToJsonAtomicUnion): string => {
    const $string = (typia.createIsStringify as any).string;
    const $number = (typia.createIsStringify as any).number;
    const $throws = (typia.createIsStringify as any).throws;
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
}; return is(input) ? stringify(input) : null; });
