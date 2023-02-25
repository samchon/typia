import typia from "../../../src";

import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_ArrayRecursiveUnionExplicit = _test_validateClone(
    "ArrayRecursiveUnionExplicit",
    ArrayRecursiveUnionExplicit.generate,
    typia.createValidateClone<ArrayRecursiveUnionExplicit>(),
    ArrayRecursiveUnionExplicit.SPOILERS,
);
