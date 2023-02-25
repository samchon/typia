import typia from "../../../src";
import { TupleUnion } from "../../structures/TupleUnion";
import { _test_random } from "../internal/_test_random";

export const test_random_TupleUnion = _test_random(
    "TupleUnion",
    () => typia.random<TupleUnion>(),
    typia.createAssert<TupleUnion>(),
);
