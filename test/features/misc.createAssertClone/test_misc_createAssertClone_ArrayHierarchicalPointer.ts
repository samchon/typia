import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_misc_createAssertClone_ArrayHierarchicalPointer =
    _test_misc_assertClone(
        "ArrayHierarchicalPointer",
    )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)(
        typia.misc.createAssertClone<ArrayHierarchicalPointer>(),
    );
