import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_assertStringify_ObjectTuple = _test_assertStringify(
    "ObjectTuple",
    ObjectTuple.generate,
    (input) => typia.assertStringify(input),
    ObjectTuple.SPOILERS,
);
