import TSON from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ObjectPrimitive = _test_isClone(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    (input) => TSON.isClone(input),
    ObjectPrimitive.SPOILERS,
);