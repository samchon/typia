import typia from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ObjectPrimitive = _test_assertStringify(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    (input) => typia.assertStringify(input),
    ObjectPrimitive.SPOILERS,
);
