import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_random_ArrayHierarchicalPointer =
    _test_random<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)({
        random: () => typia.random<ArrayHierarchicalPointer>(),
        assert: typia.createAssert<ArrayHierarchicalPointer>(),
    });
