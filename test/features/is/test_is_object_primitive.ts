import TSON from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_is } from "./_test_is";

export const test_is_object_primitive = _test_is(
    "primitive object",
    ObjectPrimitive.generate,
    (input) => TSON.is(input),
    ObjectPrimitive.SPOILERS,
);
