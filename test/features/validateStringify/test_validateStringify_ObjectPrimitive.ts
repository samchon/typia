import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_validateStringify_ObjectPrimitive = _test_validateStringify(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    (input) => typia.validateStringify<ObjectPrimitive>(input),
    ObjectPrimitive.SPOILERS,
);
