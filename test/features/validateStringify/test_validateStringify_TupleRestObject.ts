import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_validateStringify_TupleRestObject = _test_validateStringify(
    "TupleRestObject",
    TupleRestObject.generate,
    (input) => typia.validateStringify<TupleRestObject>(input),
    TupleRestObject.SPOILERS,
);
