import TSON from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_object_primitive = _test_stringify(
    "primitive object",
    ObjectPrimitive.generate,
    TSON.createStringify<ObjectPrimitive>(),
);
