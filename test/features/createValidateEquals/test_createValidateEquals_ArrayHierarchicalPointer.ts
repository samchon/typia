import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_validateEquals_ArrayHierarchicalPointer =
    _test_validateEquals("ArrayHierarchicalPointer")<ArrayHierarchicalPointer>(
        ArrayHierarchicalPointer,
    )(typia.createValidateEquals<ArrayHierarchicalPointer>());
