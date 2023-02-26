import typia from "../../../../src";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_ObjectRecursive = _test_stringify(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) =>
        ((input: ObjectRecursive.IDepartment): string => {
            const $number = (typia.stringify as any).number;
            const $string = (typia.stringify as any).string;
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
                "number" === typeof input.time &&
                "number" === typeof input.zone;
            const $so0 = (input: any): any =>
                `{"parent":${
                    null !== input.parent ? $so0(input.parent) : "null"
                },"id":${$number(input.id)},"code":${$string(
                    input.code,
                )},"name":${$string(input.name)},"sequence":${$number(
                    input.sequence,
                )},"created_at":${`{"time":${$number(
                    input.created_at.time,
                )},"zone":${$number(input.created_at.zone)}}`}}`;
            return $so0(input);
        })(input),
);
