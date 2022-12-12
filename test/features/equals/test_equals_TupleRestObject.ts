import typia from "../../../src";
import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_TupleRestObject = _test_equals(
    "TupleRestObject",
    TupleRestObject.generate,
    (input) => typia.equals(input),
);
