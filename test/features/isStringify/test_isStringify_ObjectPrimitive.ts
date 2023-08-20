import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_isStringify_ObjectPrimitive = _test_isStringify(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    (input) => typia.isStringify<ObjectPrimitive>(input),
    ObjectPrimitive.SPOILERS,
);
