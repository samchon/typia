import typia from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ObjectPrimitive = _test_validateStringify(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    typia.createValidateStringify<ObjectPrimitive>(),
    ObjectPrimitive.SPOILERS,
);