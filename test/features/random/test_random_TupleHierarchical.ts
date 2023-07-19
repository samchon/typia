import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_random_TupleHierarchical = _test_random<TupleHierarchical>(
    TupleHierarchical,
)({
    random: () => typia.random<TupleHierarchical>(),
    assert: typia.createAssert<TupleHierarchical>(),
});
