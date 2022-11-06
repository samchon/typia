import TSON from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_object_primitive = _test_assert_clone(
    "primitive object",
    ObjectPrimitive.generate,
    (input) => TSON.assertClone(input),
    ObjectPrimitive.SPOILERS,
);
