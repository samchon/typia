import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_assertParse_ArrayRecursiveUnionExplicit = _test_assertParse(
    "ArrayRecursiveUnionExplicit",
    ArrayRecursiveUnionExplicit.generate,
    (input) => typia.assertParse<ArrayRecursiveUnionExplicit>(input),
    ArrayRecursiveUnionExplicit.SPOILERS,
);
