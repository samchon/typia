import TSON from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ObjectPrimitive = _test_assert(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    TSON.createAssert<ObjectPrimitive>(),
    ObjectPrimitive.SPOILERS,
);