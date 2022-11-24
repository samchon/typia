import TSON from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_create_assert_stringify_object_primitive =
    _test_assert_stringify(
        "primitive object",
        ObjectPrimitive.generate,
        TSON.createAssertStringify<ObjectPrimitive>(),
        ObjectPrimitive.SPOILERS,
    );
