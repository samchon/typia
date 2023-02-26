import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_isParse_ArrayRecursiveUnionImplicit = _test_isParse(
    "ArrayRecursiveUnionImplicit",
    ArrayRecursiveUnionImplicit.generate,
    (input) => typia.isParse<ArrayRecursiveUnionImplicit>(input),
    ArrayRecursiveUnionImplicit.SPOILERS,
);
