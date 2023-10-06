import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";

export const test_createIs_ObjectRecursive = _test_is(
    "ObjectRecursive",
)<ObjectRecursive>(ObjectRecursive)((input: any): input is ObjectRecursive => {
    const $io0 = (input: any): boolean =>
        (null === input.parent ||
            ("object" === typeof input.parent &&
                null !== input.parent &&
                $io0(input.parent))) &&
        "number" === typeof input.id &&
        Number.isFinite(input.id) &&
        "string" === typeof input.code &&
        "string" === typeof input.name &&
        "number" === typeof input.sequence &&
        Number.isFinite(input.sequence) &&
        "object" === typeof input.created_at &&
        null !== input.created_at &&
        "number" === typeof (input.created_at as any).time &&
        Number.isFinite((input.created_at as any).time) &&
        "number" === typeof (input.created_at as any).zone &&
        Number.isFinite((input.created_at as any).zone);
    return "object" === typeof input && null !== input && $io0(input);
});
