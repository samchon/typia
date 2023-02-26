import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_createValidateClone_ArrayRecursiveUnionImplicit =
    _test_validateClone(
        "ArrayRecursiveUnionImplicit",
        ArrayRecursiveUnionImplicit.generate,
        typia.createValidateClone<ArrayRecursiveUnionImplicit>(),
        ArrayRecursiveUnionImplicit.SPOILERS,
    );
