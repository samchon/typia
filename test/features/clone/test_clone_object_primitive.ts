import TSON from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_clone } from "./_test_clone";

export const test_clone_object_primitive = _test_clone(
    "primitive object",
    ObjectPrimitive.generate,
    (input) => TSON.clone(input),
);
