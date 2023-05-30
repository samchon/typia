import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ObjectNullable } from "../../../structures/ObjectNullable";
export const test_isStringify_ObjectNullable = _test_isStringify("ObjectNullable", ObjectNullable.generate, (input) => ((input: [ObjectNullable.IProduct, ObjectNullable.IProduct, ObjectNullable.IProduct]): string | null => { const is = (input: any): input is [ObjectNullable.IProduct, ObjectNullable.IProduct, ObjectNullable.IProduct] => {
    const $io0 = (input: any): boolean => "string" === typeof input.name && ("object" === typeof input.manufacturer && null !== input.manufacturer && $io1(input.manufacturer)) && (null === input.brand || "object" === typeof input.brand && null !== input.brand && $io2(input.brand)) && (null === input.similar || "object" === typeof input.similar && null !== input.similar && $iu0(input.similar));
    const $io1 = (input: any): boolean => "manufacturer" === input.type && "string" === typeof input.name;
    const $io2 = (input: any): boolean => "brand" === input.type && "string" === typeof input.name;
    const $iu0 = (input: any): any => (() => {
        if ("brand" === input.type)
            return $io2(input);
        if ("manufacturer" === input.type)
            return $io1(input);
        return false;
    })();
    return Array.isArray(input) && (input.length === 3 && ("object" === typeof input[0] && null !== input[0] && $io0(input[0])) && ("object" === typeof input[1] && null !== input[1] && $io0(input[1])) && ("object" === typeof input[2] && null !== input[2] && $io0(input[2])));
}; const stringify = (input: [ObjectNullable.IProduct, ObjectNullable.IProduct, ObjectNullable.IProduct]): string => {
    const $string = (typia.isStringify as any).string;
    const $throws = (typia.isStringify as any).throws;
    const $io1 = (input: any): boolean => "manufacturer" === input.type && "string" === typeof input.name;
    const $io2 = (input: any): boolean => "brand" === input.type && "string" === typeof input.name;
    const $iu0 = (input: any): any => (() => {
        if ("brand" === input.type)
            return $io2(input);
        if ("manufacturer" === input.type)
            return $io1(input);
        return false;
    })();
    const $so0 = (input: any): any => `{"name":${$string(input.name)},"manufacturer":${$so1(input.manufacturer)},"brand":${null !== input.brand ? $so2(input.brand) : "null"},"similar":${null !== input.similar ? $su0(input.similar) : "null"}}`;
    const $so1 = (input: any): any => `{"type":${(() => {
        if ("string" === typeof input.type)
            return $string(input.type);
        if ("string" === typeof input.type)
            return "\"" + input.type + "\"";
        $throws({
            expected: "\"manufacturer\"",
            value: input.type
        });
    })()},"name":${$string(input.name)}}`;
    const $so2 = (input: any): any => `{"type":${(() => {
        if ("string" === typeof input.type)
            return $string(input.type);
        if ("string" === typeof input.type)
            return "\"" + input.type + "\"";
        $throws({
            expected: "\"brand\"",
            value: input.type
        });
    })()},"name":${$string(input.name)}}`;
    const $su0 = (input: any): any => (() => {
        if ("brand" === input.type)
            return $so2(input);
        if ("manufacturer" === input.type)
            return $so1(input);
        $throws({
            expected: "(ObjectNullable.IBrand | ObjectNullable.IManufacturer)",
            value: input
        });
    })();
    return `[${$so0(input[0])},${$so0(input[1])},${$so0(input[2])}]`;
}; return is(input) ? stringify(input) : null; })(input), ObjectNullable.SPOILERS);
