import TSON from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ObjectPrimitive = _test_validate(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    TSON.createValidate<ObjectPrimitive>(),
    ObjectPrimitive.SPOILERS,
);