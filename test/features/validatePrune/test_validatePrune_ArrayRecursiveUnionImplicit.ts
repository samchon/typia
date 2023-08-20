import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_validatePrune_ArrayRecursiveUnionImplicit =
    _test_validatePrune(
        "ArrayRecursiveUnionImplicit",
        ArrayRecursiveUnionImplicit.generate,
        (input) => typia.validatePrune<ArrayRecursiveUnionImplicit>(input),
        ArrayRecursiveUnionImplicit.SPOILERS,
    );
