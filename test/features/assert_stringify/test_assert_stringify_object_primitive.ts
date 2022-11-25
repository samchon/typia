import TSON from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_assert_stringify_object_primitive = _test_assert_stringify(
    "primitive object",
    ObjectPrimitive.generate,
    (input) => TSON.assertStringify(input),
    ObjectPrimitive.SPOILERS,
);
