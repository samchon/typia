import typia from "../../../src";

import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_ArrayRecursiveUnionImplicit = _test_validateClone(
    "ArrayRecursiveUnionImplicit",
    ArrayRecursiveUnionImplicit.generate,
    typia.createValidateClone<ArrayRecursiveUnionImplicit>(),
    ArrayRecursiveUnionImplicit.SPOILERS,
);
