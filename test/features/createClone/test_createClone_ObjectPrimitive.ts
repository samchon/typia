import TSON from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ObjectPrimitive = _test_clone(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    TSON.createClone<ObjectPrimitive>(),
);
