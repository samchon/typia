import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_isStringify_ArrayRecursiveUnionImplicit = _test_isStringify(
    "ArrayRecursiveUnionImplicit",
    ArrayRecursiveUnionImplicit.generate,
    (input) => typia.isStringify(input),
    ArrayRecursiveUnionImplicit.SPOILERS,
);
