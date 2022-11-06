import TSON from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_assert_clone } from "./../assert_clone/_test_assert_clone";

export const test_create_assert_clone_object_primitive =
    _test_assert_clone(
        "primitive object",
        ObjectPrimitive.generate,
        TSON.createAssertClone<ObjectPrimitive>(),
        ObjectPrimitive.SPOILERS,
    );
