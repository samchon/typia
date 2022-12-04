import TSON from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_ObjectPrimitive = _test_validateClone(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    TSON.createValidateClone<ObjectPrimitive>(),
    ObjectPrimitive.SPOILERS,
);
