import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_misc_clone_ArrayRecursiveUnionExplicitPointer =
    _test_misc_clone(
        "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
        (input) => typia.misc.clone<ArrayRecursiveUnionExplicitPointer>(input),
    );
