import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_createValidatePrune_ArrayRecursiveUnionImplicit =
    _test_validatePrune(
        "ArrayRecursiveUnionImplicit",
        ArrayRecursiveUnionImplicit.generate,
        typia.createValidatePrune<ArrayRecursiveUnionImplicit>(),
        ArrayRecursiveUnionImplicit.SPOILERS,
    );
