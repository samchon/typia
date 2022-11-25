import TSON from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ObjectPrimitive = _test_isStringify(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    TSON.createIsStringify<ObjectPrimitive>(),
    ObjectPrimitive.SPOILERS,
);