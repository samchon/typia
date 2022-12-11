import TSON from "../../../src";
import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_TupleRestObject = _test_assertParse(
    "TupleRestObject",
    TupleRestObject.generate,
    TSON.createAssertParse<TupleRestObject>(),
    TupleRestObject.SPOILERS,
);
