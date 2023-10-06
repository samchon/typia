import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_misc_prune_ArrayRecursiveUnionExplicitPointer =
    _test_misc_prune(
        "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
        (input) => typia.misc.prune<ArrayRecursiveUnionExplicitPointer>(input),
    );
