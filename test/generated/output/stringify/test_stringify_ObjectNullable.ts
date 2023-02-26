import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_stringify_ObjectNullable = _test_stringify(
    "ObjectNullable",
    ObjectNullable.generate,
    (input) =>
        ((
            input: [
                ObjectNullable.IProduct,
                ObjectNullable.IProduct,
                ObjectNullable.IProduct,
            ],
        ): string => {
            const $string = (typia.stringify as any).string;
            const $throws = (typia.stringify as any).throws;
            const $io1 = (input: any): boolean =>
                "manufacturer" === input.type && "string" === typeof input.name;
            const $io2 = (input: any): boolean =>
                "brand" === input.type && "string" === typeof input.name;
            const $iu0 = (input: any): any =>
                (() => {
                    if ("manufacturer" === input.type) return $io1(input);
                    if ("brand" === input.type) return $io2(input);
                    return false;
                })();
            const $so0 = (input: any): any =>
                `{"name":${$string(input.name)},"manufacturer":${$so1(
                    input.manufacturer,
                )},"brand":${
                    null !== input.brand ? $so2(input.brand) : "null"
                },"similar":${
                    null !== input.similar ? $su0(input.similar) : "null"
                }}`;
            const $so1 = (input: any): any =>
                `{"type":${(() => {
                    if ("string" === typeof input.type)
                        return $string(input.type);
                    if ("string" === typeof input.type)
                        return '"' + input.type + '"';
                    $throws({
                        expected: '"manufacturer"',
                        value: input.type,
                    });
                })()},"name":${$string(input.name)}}`;
            const $so2 = (input: any): any =>
                `{"type":${(() => {
                    if ("string" === typeof input.type)
                        return $string(input.type);
                    if ("string" === typeof input.type)
                        return '"' + input.type + '"';
                    $throws({
                        expected: '"brand"',
                        value: input.type,
                    });
                })()},"name":${$string(input.name)}}`;
            const $su0 = (input: any): any =>
                (() => {
                    if ("manufacturer" === input.type) return $so1(input);
                    if ("brand" === input.type) return $so2(input);
                    $throws({
                        expected:
                            "(ObjectNullable.IManufacturer | ObjectNullable.IBrand)",
                        value: input,
                    });
                })();
            return `[${$so0(input[0])},${$so0(input[1])},${$so0(input[2])}]`;
        })(input),
);
