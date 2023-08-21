import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";

export const test_json_stringify_ObjectRecursive = _test_json_stringify(
    "ObjectRecursive",
)<ObjectRecursive>(ObjectRecursive)((input) =>
    ((input: ObjectRecursive): string => {
        const $io0 = (input: any): boolean =>
            (null === input.parent ||
                ("object" === typeof input.parent &&
                    null !== input.parent &&
                    $io0(input.parent))) &&
            "number" === typeof input.id &&
            "string" === typeof input.code &&
            "string" === typeof input.name &&
            "number" === typeof input.sequence &&
            "object" === typeof input.created_at &&
            null !== input.created_at &&
            $io1(input.created_at);
        const $io1 = (input: any): boolean =>
            "number" === typeof input.time && "number" === typeof input.zone;
        const $number = (typia.json.stringify as any).number;
        const $string = (typia.json.stringify as any).string;
        const $so0 = (input: any): any =>
            `{"parent":${
                null !== input.parent ? $so0(input.parent) : "null"
            },"id":${$number(input.id)},"code":${$string(
                input.code,
            )},"name":${$string(input.name)},"sequence":${$number(
                input.sequence,
            )},"created_at":${`{"time":${$number(
                (input.created_at as any).time,
            )},"zone":${$number((input.created_at as any).zone)}}`}}`;
        return $so0(input);
    })(input),
);
