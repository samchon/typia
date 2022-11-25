import TSON from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_is } from "../internal/_test_is";

export const test_is_ObjectPrimitive = _test_is(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    (input) => TSON.is(input),
    ObjectPrimitive.SPOILERS,
);
