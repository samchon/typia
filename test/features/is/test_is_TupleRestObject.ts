import TSON from "../../../src";
import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_is } from "../internal/_test_is";

export const test_is_TupleRestObject = _test_is(
    "TupleRestObject",
    TupleRestObject.generate,
    (input) => TSON.is(input),
    TupleRestObject.SPOILERS,
);
