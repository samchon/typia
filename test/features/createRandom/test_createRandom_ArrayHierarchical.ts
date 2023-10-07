import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_createRandom_ArrayHierarchical = _test_random(
    "ArrayHierarchical",
)<ArrayHierarchical>(ArrayHierarchical)({
    random: typia.createRandom<ArrayHierarchical>(
        (ArrayHierarchical as any).RANDOM,
    ),
    assert: typia.createAssert<ArrayHierarchical>(),
});
