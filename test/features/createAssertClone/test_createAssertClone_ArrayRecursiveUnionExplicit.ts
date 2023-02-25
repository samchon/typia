import typia from "../../../src";

import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ArrayRecursiveUnionExplicit = _test_assertClone(
    "ArrayRecursiveUnionExplicit",
    ArrayRecursiveUnionExplicit.generate,
    typia.createAssertClone<ArrayRecursiveUnionExplicit>(),
    ArrayRecursiveUnionExplicit.SPOILERS,
);
