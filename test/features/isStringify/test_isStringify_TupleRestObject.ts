import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_isStringify_TupleRestObject = _test_isStringify(
    "TupleRestObject",
    TupleRestObject.generate,
    (input) => typia.isStringify<TupleRestObject>(input),
    TupleRestObject.SPOILERS,
);
