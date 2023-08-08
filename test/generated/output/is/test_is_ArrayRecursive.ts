import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";

export const test_is_ArrayRecursive = _test_is(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input) =>
        ((input: any): input is ArrayRecursive.ICategory => {
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
                "number" === typeof (input.created_at as any).time &&
                Number.isFinite((input.created_at as any).time) &&
                "number" === typeof (input.created_at as any).zone &&
                Number.isFinite((input.created_at as any).zone);
            return "object" === typeof input && null !== input && $io0(input);
        })(input),
    ArrayRecursive.SPOILERS,
);
