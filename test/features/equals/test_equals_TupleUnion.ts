import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_equals_TupleUnion = _test_equals<TupleUnion>(TupleUnion)(
    (input) => typia.equals(input),
);
