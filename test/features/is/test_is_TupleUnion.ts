import typia from "../../../src";
import { TupleUnion } from "../../structures/TupleUnion";
import { _test_is } from "../internal/_test_is";

export const test_is_TupleUnion = _test_is(
    "TupleUnion",
    TupleUnion.generate,
    (input) => typia.is(input),
    TupleUnion.SPOILERS,
);