import TSON from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_is_clone } from "../internal/_test_is_clone";

export const test_create_is_clone_object_primitive = _test_is_clone(
    "primitive object",
    ObjectPrimitive.generate,
    TSON.createIsClone<ObjectPrimitive>(),
    ObjectPrimitive.SPOILERS,
);
