import TSON from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_equals } from "./../equals/_test_equals";

export const test_create_equals_object_primitive = _test_equals(
    "primitive object",
    ObjectPrimitive.generate,
    TSON.createEquals<ObjectPrimitive>(),
);
