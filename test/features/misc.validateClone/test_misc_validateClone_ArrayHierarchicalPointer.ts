import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_misc_validateClone_ArrayHierarchicalPointer =
    _test_misc_validateClone<ArrayHierarchicalPointer>(
        ArrayHierarchicalPointer,
    )((input) => typia.misc.validateClone(input));
