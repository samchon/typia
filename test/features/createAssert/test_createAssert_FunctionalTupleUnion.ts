import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_assert_FunctionalTupleUnion = _test_assert(
    "FunctionalTupleUnion",
    FunctionalTupleUnion.generate,
    typia.createAssert<FunctionalTupleUnion>(),
    FunctionalTupleUnion.SPOILERS,
);
