import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_misc_createIsClone_ArrayRecursiveUnionExplicitPointer =
    _test_misc_isClone(
        "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
        typia.misc.createIsClone<ArrayRecursiveUnionExplicitPointer>(),
    );
