import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_createAssertStringify_TupleRestObject = _test_assertStringify(
    "TupleRestObject",
    TupleRestObject.generate,
    typia.createAssertStringify<TupleRestObject>(),
    TupleRestObject.SPOILERS,
);
