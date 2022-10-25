import TSON from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_is_stringify } from "./../is_stringify/_test_is_stringify";

export const test_create_is_stringify_object_primitive = _test_is_stringify(
    "primitive object",
    ObjectPrimitive.generate,
    TSON.createIsStringify<ObjectPrimitive>(),
    ObjectPrimitive.SPOILERS,
);
