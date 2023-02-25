import typia from "../../../src";
import { TupleUnion } from "../../structures/TupleUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_TupleUnion = _test_assert(
    "TupleUnion",
    TupleUnion.generate,
    typia.createAssert<TupleUnion>(),
    TupleUnion.SPOILERS,
);
