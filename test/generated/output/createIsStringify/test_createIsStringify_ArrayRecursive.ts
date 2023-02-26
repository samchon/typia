import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";

export const test_createIsStringify_ArrayRecursive = _test_isStringify(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input: ArrayRecursive.ICategory): string | null => {
        const is = (input: any): input is ArrayRecursive.ICategory => {
            const $io0 = (input: any): boolean =>
                Array.isArray(input.children) &&
                input.children.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                ) &&
                "number" === typeof input.id &&
                Number.isFinite(input.id) &&
                "string" === typeof input.code &&
                "number" === typeof input.sequence &&
                Number.isFinite(input.sequence) &&
                "object" === typeof input.created_at &&
                null !== input.created_at &&
                "number" === typeof input.created_at.time &&
                Number.isFinite(input.created_at.time) &&
                "number" === typeof input.created_at.zone &&
                Number.isFinite(input.created_at.zone);
            return "object" === typeof input && null !== input && $io0(input);
        };
        const stringify = (input: ArrayRecursive.ICategory): string => {
            const $number = (typia.createIsStringify as any).number;
            const $string = (typia.createIsStringify as any).string;
            const $io0 = (input: any): boolean =>
                Array.isArray(input.children) &&
                input.children.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                ) &&
                "number" === typeof input.id &&
                "string" === typeof input.code &&
                "number" === typeof input.sequence &&
                "object" === typeof input.created_at &&
                null !== input.created_at &&
                $io1(input.created_at);
            const $io1 = (input: any): boolean =>
                "number" === typeof input.time &&
                "number" === typeof input.zone;
            const $so0 = (input: any): any =>
                `{"children":${`[${input.children
                    .map((elem: any) => $so0(elem))
                    .join(",")}]`},"id":${$number(input.id)},"code":${$string(
                    input.code,
                )},"sequence":${$number(
                    input.sequence,
                )},"created_at":${`{"time":${$number(
                    input.created_at.time,
                )},"zone":${$number(input.created_at.zone)}}`}}`;
            return $so0(input);
        };
        return is(input) ? stringify(input) : null;
    },
    ArrayRecursive.SPOILERS,
);
