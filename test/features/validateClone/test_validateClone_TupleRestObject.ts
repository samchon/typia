import TSON from "../../../src";
import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_TupleRestObject = _test_validateClone(
    "TupleRestObject",
    TupleRestObject.generate,
    (input) => TSON.validateClone(input),
    TupleRestObject.SPOILERS,
);
