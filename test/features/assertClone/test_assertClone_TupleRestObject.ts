import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_assertClone_TupleRestObject = _test_assertClone(
    "TupleRestObject",
    TupleRestObject.generate,
    (input) => typia.assertClone<TupleRestObject>(input),
    TupleRestObject.SPOILERS,
);
