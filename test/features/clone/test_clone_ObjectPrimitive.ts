import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_clone_ObjectPrimitive = _test_clone(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    (input) => typia.clone(input),
);
