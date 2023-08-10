import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_misc_isPrune_ArrayHierarchicalPointer =
    _test_misc_isPrune<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)(
        (input) => typia.misc.isPrune(input),
    );
