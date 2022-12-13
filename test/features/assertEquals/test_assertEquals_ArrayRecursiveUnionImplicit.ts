import typia from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_ArrayRecursiveUnionImplicit = _test_assertEquals(
    "ArrayRecursiveUnionImplicit",
    ArrayRecursiveUnionImplicit.generate,
    (input) => typia.assertEquals(input),
);