import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_isParse_ObjectPrimitive = _test_isParse(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    (input) => typia.isParse<ObjectPrimitive>(input),
    ObjectPrimitive.SPOILERS,
);
