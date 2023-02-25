import typia from "../../../src";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_isStringify_ToJsonAtomicUnion = _test_isStringify("ToJsonAtomicUnion", ToJsonAtomicUnion.generate, (input) => ((input: ToJsonAtomicUnion): string | null => { const is = (input: any): input is ToJsonAtomicUnion => {
    const $io0 = (input: any) => true;
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
}; const stringify = (input: ToJsonAtomicUnion): string => {
    const $string = (typia.isStringify as any).string;
    const $throws = (typia.isStringify as any).throws;
    return `[${input.map((elem: any) => (() => {
        if ("string" === typeof elem.toJSON())
            return $string(elem.toJSON());
        if ("number" === typeof elem.toJSON())
            return elem.toJSON();
        if ("boolean" === typeof elem.toJSON())
            return elem.toJSON();
        $throws({
            expected: "(boolean | number | string)",
            value: elem.toJSON()
        });
    })()).join(",")}]`;
}; return is(input) ? stringify(input) : null; })(input));
