import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_isStringify_ArrayRecursiveUnionExplicit = _test_isStringify(
    "ArrayRecursiveUnionExplicit",
    ArrayRecursiveUnionExplicit.generate,
    (input) => typia.isStringify(input),
    ArrayRecursiveUnionExplicit.SPOILERS,
);
