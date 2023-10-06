import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_misc_validateClone_ArrayRecursiveUnionExplicitPointer =
    _test_misc_validateClone(
        "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
        (input) =>
            typia.misc.validateClone<ArrayRecursiveUnionExplicitPointer>(input),
    );
