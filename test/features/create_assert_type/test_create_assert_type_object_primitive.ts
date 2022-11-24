import TSON from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_create_assert_type_object_primitive = _test_assert_type(
    "primitive object",
    ObjectPrimitive.generate,
    TSON.createAssertType<ObjectPrimitive>(),
    ObjectPrimitive.SPOILERS,
);
