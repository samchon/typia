import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_createAssertStringify_ObjectPrimitive = _test_assertStringify(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    typia.createAssertStringify<ObjectPrimitive>(),
    ObjectPrimitive.SPOILERS,
);
