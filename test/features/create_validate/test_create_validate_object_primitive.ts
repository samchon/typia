import TSON from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_validate } from "../internal/_test_validate";

export const test_create_validate_object_primitive = _test_validate(
    "primitive object",
    ObjectPrimitive.generate,
    TSON.createValidate<ObjectPrimitive>(),
    ObjectPrimitive.SPOILERS,
);
