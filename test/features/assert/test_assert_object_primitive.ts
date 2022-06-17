import TSON from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_assert } from "./_test_assert";

export const test_assert_object_primitive = _test_assert(
    "primitive object",
    ObjectPrimitive.generate,
    (input) => TSON.assert(input),
);
