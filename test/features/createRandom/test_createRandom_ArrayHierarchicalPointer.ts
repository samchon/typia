import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_createRandom_ArrayHierarchicalPointer = _test_random(
    "ArrayHierarchicalPointer",
)<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)({
    random: typia.createRandom<ArrayHierarchicalPointer>(),
    assert: typia.createAssert<ArrayHierarchicalPointer>(),
});
