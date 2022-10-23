import TSON from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_is } from "./../is/_test_is";

export const test_create_is_object_primitive = _test_is(
    "primitive object",
    ObjectPrimitive.generate,
    TSON.createIs<ObjectPrimitive>(),
    ObjectPrimitive.SPOILERS,
);
