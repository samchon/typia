import TSON from "../../../src";
import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_TupleRestObject = _test_isParse(
    "TupleRestObject",
    TupleRestObject.generate,
    (input) => TSON.isParse<TupleRestObject>(input),
    TupleRestObject.SPOILERS,
);
