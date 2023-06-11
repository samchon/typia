import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_assertParse_ObjectPrimitive = _test_assertParse(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    (input) => typia.assertParse<ObjectPrimitive>(input),
    ObjectPrimitive.SPOILERS,
);
