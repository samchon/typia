import typia from "../../../src";
import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_TupleRestObject = _test_assertStringify(
    "TupleRestObject",
    TupleRestObject.generate,
    (input) => typia.assertStringify(input),
    TupleRestObject.SPOILERS,
);