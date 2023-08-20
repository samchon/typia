import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_assertStringify_ObjectUndefined = _test_assertStringify(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input) => typia.assertStringify<ObjectUndefined>(input),
    ObjectUndefined.SPOILERS,
);
