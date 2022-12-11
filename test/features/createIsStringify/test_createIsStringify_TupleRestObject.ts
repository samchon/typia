import TSON from "../../../src";
import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_TupleRestObject = _test_isStringify(
    "TupleRestObject",
    TupleRestObject.generate,
    TSON.createIsStringify<TupleRestObject>(),
    TupleRestObject.SPOILERS,
);
