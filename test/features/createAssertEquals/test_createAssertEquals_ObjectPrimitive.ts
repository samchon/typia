import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_createAssertEquals_ObjectPrimitive = _test_assertEquals(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    typia.createAssertEquals<ObjectPrimitive>(),
);
