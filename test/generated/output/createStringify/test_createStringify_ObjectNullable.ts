import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_createStringify_ObjectNullable = _test_stringify(
    "ObjectNullable",
    ObjectNullable.generate,
    (input: ObjectNullable): string => {
        const $io1: any = (input: any): boolean =>
            "manufacturer" === input.type && "string" === typeof input.name;
        const $io2: any = (input: any): boolean =>
            "brand" === input.type && "string" === typeof input.name;
        const $iu0: any = (input: any): any =>
            (() => {
                if ("brand" === input.type) return $io2(input);
                if ("manufacturer" === input.type) return $io1(input);
                return false;
            })();
        const $string: any = (typia.createStringify as any).string;
        const $throws: any = (typia.createStringify as any).throws;
        const $so0: any = (input: any): any =>
            `{"name":${$string(input.name)},"manufacturer":${$so1(
                input.manufacturer,
            )},"brand":${
                null !== input.brand ? $so2(input.brand) : "null"
            },"similar":${
                null !== input.similar ? $su0(input.similar) : "null"
            }}`;
        const $so1: any = (input: any): any =>
            `{"type":${(() => {
                if ("string" === typeof input.type) return $string(input.type);
                if ("string" === typeof input.type)
                    return '"' + input.type + '"';
                $throws({
                    expected: '"manufacturer"',
                    value: input.type,
                });
            })()},"name":${$string(input.name)}}`;
        const $so2: any = (input: any): any =>
            `{"type":${(() => {
                if ("string" === typeof input.type) return $string(input.type);
                if ("string" === typeof input.type)
                    return '"' + input.type + '"';
                $throws({
                    expected: '"brand"',
                    value: input.type,
                });
            })()},"name":${$string(input.name)}}`;
        const $su0: any = (input: any): any =>
            (() => {
                if ("brand" === input.type) return $so2(input);
                if ("manufacturer" === input.type) return $so1(input);
                $throws({
                    expected:
                        "(ObjectNullable.IBrand | ObjectNullable.IManufacturer)",
                    value: input,
                });
            })();
        return `[${$so0(input[0])},${$so0(input[1])},${$so0(input[2])}]`;
    },
);
