import typia from "../../../src";
import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_TupleRestObject = _test_assertParse(
    "TupleRestObject",
    TupleRestObject.generate,
    (input) => typia.assertParse<TupleRestObject>(input),
    TupleRestObject.SPOILERS,
);
