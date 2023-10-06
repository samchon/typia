import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_misc_createAssertPrune_ArrayRecursiveUnionExplicitPointer =
    _test_misc_assertPrune(
        "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
        typia.misc.createAssertPrune<ArrayRecursiveUnionExplicitPointer>(),
    );
