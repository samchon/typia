import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";

export const test_isStringify_ArrayRecursive = _test_isStringify(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input) =>
        ((input: ArrayRecursive.ICategory): string | null => {
            const is: any = (input: any): input is ArrayRecursive.ICategory => {
                const $io0: any = (input: any): boolean =>
                    Array.isArray(input.children) &&
                    input.children.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
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
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const stringify: any = (
                input: ArrayRecursive.ICategory,
            ): string => {
                const $io0: any = (input: any): boolean =>
                    Array.isArray(input.children) &&
                    input.children.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    ) &&
                    "number" === typeof input.id &&
                    "string" === typeof input.code &&
                    "number" === typeof input.sequence &&
                    "object" === typeof input.created_at &&
                    null !== input.created_at &&
                    $io1(input.created_at);
                const $io1: any = (input: any): boolean =>
                    "number" === typeof input.time &&
                    "number" === typeof input.zone;
                const $number: any = (typia.isStringify as any).number;
                const $string: any = (typia.isStringify as any).string;
                const $so0: any = (input: any): any =>
                    `{"children":${(() =>
                        `[${input.children
                            .map((elem: any) => $so0(elem))
                            .join(",")}]`)()},"id":${$number(
                        input.id,
                    )},"code":${$string(input.code)},"sequence":${$number(
                        input.sequence,
                    )},"created_at":${`{"time":${$number(
                        input.created_at.time,
                    )},"zone":${$number(input.created_at.zone)}}`}}`;
                return $so0(input);
            };
            return is(input) ? stringify(input) : null;
        })(input),
    ArrayRecursive.SPOILERS,
);
