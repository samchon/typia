import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";

export const test_createIs_ArrayRecursive = _test_is(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input: any): input is ArrayRecursive => {
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
    },
    ArrayRecursive.SPOILERS,
);
