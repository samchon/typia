import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_assertStringify_ObjectPrimitive = _test_assertStringify(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    (input) => typia.assertStringify<ObjectPrimitive>(input),
    ObjectPrimitive.SPOILERS,
);
