import TSON from "../../../src";
import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_is } from "../internal/_test_is";

export const test_createIs_TupleRestObject = _test_is(
    "TupleRestObject",
    TupleRestObject.generate,
    TSON.createIs<TupleRestObject>(),
    TupleRestObject.SPOILERS,
);
