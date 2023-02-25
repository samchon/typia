import typia from "../../../src";

import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_FunctionalTupleUnion = _test_assert(
    "FunctionalTupleUnion",
    FunctionalTupleUnion.generate,
    typia.createAssert<FunctionalTupleUnion>(),
    FunctionalTupleUnion.SPOILERS,
);
