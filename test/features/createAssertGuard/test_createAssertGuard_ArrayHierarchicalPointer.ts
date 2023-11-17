import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_createAssertGuard_ArrayHierarchicalPointer =
    _test_assertGuard("ArrayHierarchicalPointer")<ArrayHierarchicalPointer>(
        ArrayHierarchicalPointer,
    )(typia.createAssertGuard<ArrayHierarchicalPointer>());
