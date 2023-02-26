import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_isParse_ArrayRecursiveUnionExplicit = _test_isParse(
    "ArrayRecursiveUnionExplicit",
    ArrayRecursiveUnionExplicit.generate,
    (input) => typia.isParse<ArrayRecursiveUnionExplicit>(input),
    ArrayRecursiveUnionExplicit.SPOILERS,
);
