import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_misc_validatePrune_ArrayRecursiveUnionExplicit =
    _test_misc_validatePrune<ArrayRecursiveUnionExplicit>(
        ArrayRecursiveUnionExplicit,
    )(typia.misc.createValidatePrune<ArrayRecursiveUnionExplicit>());