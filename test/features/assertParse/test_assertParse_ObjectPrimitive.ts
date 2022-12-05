import TSON from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_ObjectPrimitive = _test_assertParse(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    (input) => TSON.assertParse<ObjectPrimitive>(input),
    ObjectPrimitive.SPOILERS,
);
