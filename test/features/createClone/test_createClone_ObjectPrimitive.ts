import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_createClone_ObjectPrimitive = _test_clone(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    typia.createClone<ObjectPrimitive>(),
);
