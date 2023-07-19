import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_json_stringify_ObjectNullable =
    _test_json_stringify<ObjectNullable>(ObjectNullable)((input) =>
        ((
            input: [
                ObjectNullable.IProduct,
                ObjectNullable.IProduct,
                ObjectNullable.IProduct,
            ],
        ): string => {
            const $io1 = (input: any): boolean =>
                "manufacturer" === input.type && "string" === typeof input.name;
            const $io2 = (input: any): boolean =>
                "brand" === input.type && "string" === typeof input.name;
            const $iu0 = (input: any): any =>
                (() => {
                    if ("brand" === input.type) return $io2(input);
                    if ("manufacturer" === input.type) return $io1(input);
                    return false;
                })();
            const $string = (typia.json.stringify as any).string;
            const $throws = (typia.json.stringify as any).throws;
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
                    if ("brand" === input.type) return $so2(input);
                    if ("manufacturer" === input.type) return $so1(input);
                    $throws({
                        expected:
                            "(ObjectNullable.IBrand | ObjectNullable.IManufacturer)",
                        value: input,
                    });
                })();
            return `[${$so0(input[0])},${$so0(input[1])},${$so0(input[2])}]`;
        })(input),
    );
