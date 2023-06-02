import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_createAssertClone_ObjectPrimitive = _test_assertClone(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    typia.createAssertClone<ObjectPrimitive>(),
    ObjectPrimitive.SPOILERS,
);
