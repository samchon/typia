import TSON from "../../../src";
import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_TupleRestObject = _test_assertClone(
    "TupleRestObject",
    TupleRestObject.generate,
    (input) => TSON.assertClone(input),
    TupleRestObject.SPOILERS,
);
