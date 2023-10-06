import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_misc_validatePrune_ArrayRecursiveUnionExplicitPointer =
    _test_misc_validatePrune(
        "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
        (input) =>
            typia.misc.validatePrune<ArrayRecursiveUnionExplicitPointer>(input),
    );
