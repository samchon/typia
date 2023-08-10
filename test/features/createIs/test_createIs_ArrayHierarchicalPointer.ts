import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_is_ArrayHierarchicalPointer =
    _test_is<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)(
        typia.createIs<ArrayHierarchicalPointer>(),
    );
