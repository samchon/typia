import typia from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ObjectPrimitive = _test_validateClone(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    (input) => typia.validateClone(input),
    ObjectPrimitive.SPOILERS,
);