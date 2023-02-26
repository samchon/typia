import typia from "../../../src";
import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_TupleRestObject = _test_validateClone(
    "TupleRestObject",
    TupleRestObject.generate,
    (input) => typia.validateClone(input),
    TupleRestObject.SPOILERS,
);
