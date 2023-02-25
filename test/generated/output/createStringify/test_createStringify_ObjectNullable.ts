import typia from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_stringify } from "../internal/_test_stringify";
export const test_createStringify_ObjectNullable = _test_stringify("ObjectNullable", ObjectNullable.generate, (input: ObjectNullable): string => {
    const $string = (typia.createStringify as any).string;
    const $throws = (typia.createStringify as any).throws;
    const $io1 = (input: any) => "manufacturer" === input.type && "string" === typeof input.name;
    const $io2 = (input: any) => "brand" === input.type && "string" === typeof input.name;
    const $iu0 = (input: any) => (() => {
        if ("manufacturer" === input.type)
            return $io1(input);
        if ("brand" === input.type)
            return $io2(input);
        return false;
    })();
    const $so0 = (input: any) => `{"name":${$string(input.name)},"manufacturer":${$so1(input.manufacturer)},"brand":${$so2(input.brand)},"similar":${$su0(input.similar)}}`;
    const $so1 = (input: any) => `{"type":${(() => {
        if ("string" === typeof input.type)
            return $string(input.type);
        if ("string" === typeof input.type)
            return "\"" + input.type + "\"";
        $throws({
            expected: "\"manufacturer\"",
            value: input.type
        });
    })()},"name":${$string(input.name)}}`;
    const $so2 = (input: any) => `{"type":${(() => {
        if ("string" === typeof input.type)
            return $string(input.type);
        if ("string" === typeof input.type)
            return "\"" + input.type + "\"";
        $throws({
            expected: "\"brand\"",
            value: input.type
        });
    })()},"name":${$string(input.name)}}`;
    const $su0 = (input: any) => (() => {
        if ("manufacturer" === input.type)
            return $so1(input);
        if ("brand" === input.type)
            return $so2(input);
        $throws({
            expected: "(ObjectNullable.IManufacturer | ObjectNullable.IBrand)",
            value: input
        });
    })();
    return `[${$so0(input[0])},${$so0(input[1])},${$so0(input[2])}]`;
});
