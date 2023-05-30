import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";
export const test_isStringify_ToJsonAtomicUnion = _test_isStringify("ToJsonAtomicUnion", ToJsonAtomicUnion.generate, (input) => ((input: Array<ToJsonAtomicUnion.IToJson>): string | null => { const is = (input: any): input is Array<ToJsonAtomicUnion.IToJson> => {
    const $io0 = (input: any): boolean => true;
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
}; const stringify = (input: Array<ToJsonAtomicUnion.IToJson>): string => {
    const $string = (typia.isStringify as any).string;
    const $number = (typia.isStringify as any).number;
    const $throws = (typia.isStringify as any).throws;
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
}; return is(input) ? stringify(input) : null; })(input));
