import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_assertStringify_ObjectSimple = _test_assertStringify(
    "ObjectSimple",
    ObjectSimple.generate,
    (input) => typia.assertStringify<ObjectSimple>(input),
    ObjectSimple.SPOILERS,
);
