import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_isClone_ObjectPrimitive = _test_isClone(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    (input) => typia.isClone<ObjectPrimitive>(input),
    ObjectPrimitive.SPOILERS,
);
