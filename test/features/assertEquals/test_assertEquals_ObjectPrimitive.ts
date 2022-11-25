import TSON from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_ObjectPrimitive = _test_assertEquals(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    (input) => TSON.assertEquals(input),
);