import TSON from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_clone } from "./../clone/_test_clone";

export const test_create_clone_object_primitive = _test_clone(
    "primitive object",
    ObjectPrimitive.generate,
    TSON.createClone<ObjectPrimitive>(),
);
