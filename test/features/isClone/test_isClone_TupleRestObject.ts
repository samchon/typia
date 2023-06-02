import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_isClone_TupleRestObject = _test_isClone(
    "TupleRestObject",
    TupleRestObject.generate,
    (input) => typia.isClone(input),
    TupleRestObject.SPOILERS,
);
