import typia from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ObjectUndefined = _test_assertStringify(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input) => typia.assertStringify(input),
    ObjectUndefined.SPOILERS,
);