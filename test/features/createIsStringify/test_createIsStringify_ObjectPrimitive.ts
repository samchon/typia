import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_createIsStringify_ObjectPrimitive = _test_isStringify(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    typia.createIsStringify<ObjectPrimitive>(),
    ObjectPrimitive.SPOILERS,
);
