import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_is_TupleUnion = _test_is(
    "TupleUnion",
    TupleUnion.generate,
    typia.createIs<TupleUnion>(),
    TupleUnion.SPOILERS,
);
