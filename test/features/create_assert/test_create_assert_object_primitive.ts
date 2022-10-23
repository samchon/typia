import TSON from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_object_primitive = _test_assert(
    "primitive object",
    ObjectPrimitive.generate,
    TSON.createAssertType<ObjectPrimitive>(),
    ObjectPrimitive.SPOILERS,
);
