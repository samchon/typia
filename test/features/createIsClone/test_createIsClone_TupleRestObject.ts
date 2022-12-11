import TSON from "../../../src";
import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_TupleRestObject = _test_isClone(
    "TupleRestObject",
    TupleRestObject.generate,
    TSON.createIsClone<TupleRestObject>(),
    TupleRestObject.SPOILERS,
);
