import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_createValidateClone_ObjectPrimitive = _test_validateClone(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    typia.createValidateClone<ObjectPrimitive>(),
    ObjectPrimitive.SPOILERS,
);
