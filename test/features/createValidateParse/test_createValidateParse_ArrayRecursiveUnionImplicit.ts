import typia from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ArrayRecursiveUnionImplicit = _test_validateParse(
    "ArrayRecursiveUnionImplicit",
    ArrayRecursiveUnionImplicit.generate,
    typia.createValidateParse<ArrayRecursiveUnionImplicit>(),
    ArrayRecursiveUnionImplicit.SPOILERS,
);