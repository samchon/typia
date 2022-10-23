import TSON from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_assert_equals } from "./../assert_equals/_test_assert_equals";

export const test_create_assert_equals_object_primitive = _test_assert_equals(
    "primitive object",
    ObjectPrimitive.generate,
    TSON.createAssertEquals<ObjectPrimitive>(),
);
