import TSON from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_ObjectPrimitive = _test_assertClone(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    (input) => TSON.assertClone(input),
    ObjectPrimitive.SPOILERS,
);
