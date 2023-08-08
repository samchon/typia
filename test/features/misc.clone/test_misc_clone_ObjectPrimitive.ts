import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_misc_clone_ObjectPrimitive = _test_misc_clone(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    (input) => typia.misc.clone(input),
);
