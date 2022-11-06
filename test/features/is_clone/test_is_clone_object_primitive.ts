import TSON from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_object_primitive = _test_is_clone(
    "primitive object",
    ObjectPrimitive.generate,
    (input) => TSON.isClone(input),
    ObjectPrimitive.SPOILERS,
);
