import typia from "../../../src";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_is } from "../internal/_test_is";

export const test_is_ArrayRecursiveUnionExplicit = _test_is(
    "ArrayRecursiveUnionExplicit",
    ArrayRecursiveUnionExplicit.generate,
    (input) => typia.is(input),
    ArrayRecursiveUnionExplicit.SPOILERS,
);
